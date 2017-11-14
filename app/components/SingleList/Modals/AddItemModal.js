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
import { addItem, closeItemAddModal } from '../../../redux/actions/items';

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
                <View style={styles.baseModalWrapper}>

                    <View style={styles.modalInputWrapper}>
                        <TextInput
                            style={styles.baseModalInput}
                            placeholder="List"
                            placeholderTextColor="rgba(0, 0, 0, 0.9)"
                            underlineColorAndroid="transparent"
                            ref={(input) => { this.addInput = input; }}
                            onChangeText={(text) => this.setState({item: text})}
                            onSubmitEditing={() => this.addNewItem()}
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
                            onPress={() => this.addNewItem()}
                        >
                            <Text style={styles.modalConfirmText}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}

export default AddItemModal;