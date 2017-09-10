import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Modal
} from 'react-native';

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
                animationType="fade"
                transparent={true}
                visible={this.props.editModalActive}
                onShow={() => {
                    this.setItemValue();
                    this.editInput.focus();
                }}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={styles.modalContentWrapper}>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Edit"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
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

const styles = StyleSheet.create({
    modalContentWrapper: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    modalInput: {
        flex: 0.8,
        fontSize: 22,
        padding: 25,
        backgroundColor: "#efefef"
    }
});

export default connect((store) => {
    return {
        editModalActive: store.editModalActive,
        editItem: store.editItem
    }
})(ItemEditModal);

AppRegistry.registerComponent('ItemEditModal', () => ItemEditModal);