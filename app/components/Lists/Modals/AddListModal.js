import React, {Component} from 'react';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';
import { addList, closeAddModal } from '../../../redux/actions/lists';

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
        addModalActive: store.lists.addModalActive
    }
})

class AddListModal extends Component {
    constructor() {
        super();
        this.state = {
            list: ''
        }
    }

    addNewList() {
        if(this.state.list === '') {
            return false;
        }
        this.props.dispatch(addList(this.state.list));
        this.setState({ list: '' });
    }

    cancelModal() {
        this.setState({list: ''});
        this.props.dispatch(closeAddModal());
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
                            onChangeText={(text) => this.setState({list: text})}
                            onSubmitEditing={() => this.addNewList()}
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
                            onPress={() => this.addNewList()}
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

export default AddListModal;