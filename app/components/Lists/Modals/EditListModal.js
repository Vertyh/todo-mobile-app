import React, {Component} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import Modal from 'react-native-modal'
import styles from '../../../styles/Common';
import { connect } from 'react-redux';
import { editList } from '../../../redux/actions/lists';

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
                    <TextInput
                        style={styles.baseModalInput}
                        placeholder="List name"
                        placeholderTextColor="rgba(0, 0, 0, 0.9)"
                        ref={(input) => { this.addInput = input; }}
                        value={this.state.listName}
                        onChangeText={(text) => this.setState({listName: text})}
                        onSubmitEditing={() => this.updateListName()}
                    />
                </View>
            </Modal>
        )
    }
}

export default connect((store) => {
    return {
        editModalActive: store.lists.editModalActive,
        editList: store.lists.editList
    }
})(EditListModal);