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
import { addList, closeAddModal } from '../../../redux/actions/lists';

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
                <View style={styles.baseModalWrapper}>

                    <View style={styles.modalInputWrapper}>
                        <TextInput
                            style={styles.baseModalInput}
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.addInput = input; }}
                            onChangeText={(text) => this.setState({list: text})}
                            onSubmitEditing={() => this.addNewList()}
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
                            onPress={() => this.addNewList()}
                        >
                            <Text style={styles.modalConfirmText}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}

export default AddListModal;