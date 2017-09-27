import React, {Component} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import Modal from 'react-native-modal'
import styles from '../../../styles/AddList/AddList';
import { connect } from 'react-redux';
import { addList } from '../../../redux/actions/lists';

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
    render() {
        return (
            <Modal
                isVisible={this.props.addModalActive}
                avoidKeyboard={true}
                onModalShow={() => {
                    this.addInput.focus();
                }}
            >
                <View style={styles.modalContentWrapper}>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="List name"
                        placeholderTextColor="rgba(0, 0, 0, 0.9)"
                        ref={(input) => { this.addInput = input; }}
                        onChangeText={(text) => this.setState({list: text})}
                        onSubmitEditing={() => this.addNewList()}
                    />
                </View>
            </Modal>
        )
    }
}

export default connect((store) => {
    return {
        addModalActive: store.lists.addModalActive
    }
})(AddListModal);