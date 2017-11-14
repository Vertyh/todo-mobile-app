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
import { editList, closeEditModal } from '../../../redux/actions/lists';

@connect((store) => {
    return {
        editModalActive: store.lists.editModalActive,
        editList: store.lists.editList
    }
})

class EditListModal extends Component {
    constructor() {
        super();
        this.state = {
            listName: ''
        }
    }

    setListNameValue() {
        this.setState({listName: this.props.editList.list_name})
    }

    updateListName() {
        let list = this.props.editList;
        list.list_name = this.state.listName;
        this.props.dispatch(editList(list));
    }

    cancelModal() {
        this.props.dispatch(closeEditModal());
    }

    render() {
        return (
            <Modal
                isVisible={this.props.editModalActive}
                avoidKeyboard={true}
                onModalShow={() => {
                    this.setListNameValue();
                    this.addInput.focus();
                }}
            >
                <View style={styles.baseModalWrapper}>

                    <View style={styles.modalInputWrapper}>
                        <TextInput
                            style={styles.baseModalInput}
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.addInput = input; }}
                            value={this.state.listName}
                            onChangeText={(text) => this.setState({listName: text})}
                            onSubmitEditing={() => this.updateListName()}
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
                            onPress={() => this.updateListName()}
                        >
                            <Text style={styles.modalConfirmText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}

export default EditListModal;