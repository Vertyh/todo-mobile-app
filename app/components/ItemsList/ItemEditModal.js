import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

import { connect } from 'react-redux';
import { removeToDo } from '../../redux/actions';

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
        alert(this.state.content);
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.editModalActive}
                onShow={() => this.setItemValue()}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={styles.modalContentWrapper}>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Edit"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
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
        backgroundColor: "#FFF"
    }
});

export default connect((store) => {
    return {
        editModalActive: store.editModalActive,
        editItem: store.editItem
    }
})(ItemEditModal);

AppRegistry.registerComponent('ItemEditModal', () => ItemEditModal);