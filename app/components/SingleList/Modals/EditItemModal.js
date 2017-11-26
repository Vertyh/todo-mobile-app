import React, {Component} from 'react';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';
import { editItem, closeEditModal } from '../../../redux/actions/items';

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
        editModalActive: store.items.editModalActive,
        editItem: store.items.editItem
    }
})

class EditItemModal extends Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
    }
    setItemValue() {
        this.setState({content: this.props.editItem.content})
    }
    updateItemContent() {
        let item = this.props.editItem;
        item.content = this.state.content;
        this.props.dispatch(editItem(item));
    }

    cancelModal() {
        this.setState({content: ''});
        this.props.dispatch(closeEditModal());
    }

    render() {
        return (
            <Modal
                isVisible={this.props.editModalActive}
                avoidKeyboard={true}
                onModalShow={() => {
                    this.setItemValue();
                    this.editInput.focus();
                }}
            >
                <BaseModalWrapper>

                    <BaseModalInputWrapper>
                        <BaseModalInput
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.editInput = input; }}
                            value={this.state.content}
                            onChangeText={(text) => this.setState({content: text})}
                            onSubmitEditing={() => this.updateItemContent()}
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
                            onPress={() => this.updateItemContent()}
                        >
                            <BaseModalConfirmText>
                                Save
                            </BaseModalConfirmText>
                        </BaseModalConfirmButton>
                    </BaseModalButtons>

                </BaseModalWrapper>
            </Modal>
        )
    }
}

export default EditItemModal;