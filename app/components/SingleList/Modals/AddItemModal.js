import React, {Component} from 'react';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';
import { addItem, closeItemAddModal } from '../../../redux/actions/items';

// ---------------------------------------------------------------------------------------
// Styled components

import BaseModalWrapper from '../../Common/Modals/BaseModalWrapper';
import BaseModalInputWrapper from '../../Common/Modals/BaseModalInputWrapper';
import BaseModalInput from '../../Common/Modals/BaseModalInput';
import BaseModalButtons from '../../Common/Modals/BaseModalButtons';
import BaseModalConfirmButton from '../../Common/Modals/BaseModalConfirmButton';
import BaseModalConfirmText from '../../Common/Modals/BaseModalConfirmText';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        addModalActive: store.items.addModalActive
    }
})

class AddItemModal extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    addNewItem() {
        if(this.state.item === '') {
            return false;
        }
        this.props.dispatch(addItem(this.state.item));
        this.setState({ item: '' });
    }

    cancelModal() {
        this.setState({item: ''});
        this.props.dispatch(closeItemAddModal());
    }

    render() {
        return (
            <Modal
                isVisible={this.props.addModalActive}
                avoidKeyboard={true}
                onModalShow={() => {
                    this.addInput.focus();
                }}
            >
                <BaseModalWrapper>

                    <BaseModalInputWrapper>
                        <BaseModalInput
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.addInput = input; }}
                            onChangeText={(text) => this.setState({item: text})}
                            onSubmitEditing={() => this.addNewItem()}
                        />
                    </BaseModalInputWrapper>

                    <BaseModalButtons>
                        <BaseModalConfirmButton
                            activeOpacity={0.8}
                            onPress={() => this.cancelModal()}
                        >
                            <BaseModalConfirmText>
                                Cancel
                            </BaseModalConfirmText>
                        </BaseModalConfirmButton>

                        <BaseModalConfirmButton
                            activeOpacity={0.8}
                            onPress={() => this.addNewItem()}
                        >
                            <BaseModalConfirmText>
                                Add
                            </BaseModalConfirmText>
                        </BaseModalConfirmButton>
                    </BaseModalButtons>

                </BaseModalWrapper>
            </Modal>
        )
    }
}

export default AddItemModal;