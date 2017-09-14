import React, {Component} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import Modal from 'react-native-modal'
import styles from '../../styles/ItemsList/ItemEditModal';
import { connect } from 'react-redux';
import { editToDo } from '../../redux/actions';

class ItemEditModal extends Component {
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
        this.props.dispatch(editToDo(item));
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
                <View style={styles.modalContentWrapper}>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Edit"
                        placeholderTextColor="rgba(0, 0, 0, 0.9)"
                        ref={(input) => { this.editInput = input; }}
                        value={this.state.content}
                        onChangeText={(text) => this.setState({content: text})}
                        onSubmitEditing={() => this.updateItemContent()}
                    />
                </View>
            </Modal>
        )
    }
}

export default connect((store) => {
    return {
        editModalActive: store.editModalActive,
        editItem: store.editItem
    }
})(ItemEditModal);