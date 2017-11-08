import React, {Component} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import Modal from 'react-native-modal'
import styles from '../../../styles/Modals/Modals';
import { connect } from 'react-redux';
import { editItem, closeEditModal } from '../../../redux/actions/items';

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
                <View style={styles.baseModalWrapper}>

                    <View style={styles.modalInputWrapper}>
                        <TextInput
                            style={styles.baseModalInput}
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.editInput = input; }}
                            value={this.state.content}
                            onChangeText={(text) => this.setState({content: text})}
                            onSubmitEditing={() => this.updateItemContent()}
                        />
                    </View>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.modalConfirmBtn}
                            onPress={() => this.cancelModal()}
                        >
                            <Text style={styles.modalConfirmText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.modalConfirmBtn}
                            onPress={() => this.updateItemContent()}
                        >
                            <Text style={styles.modalConfirmText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}

export default connect((store) => {
    return {
        editModalActive: store.items.editModalActive,
        editItem: store.items.editItem
    }
})(EditItemModal);