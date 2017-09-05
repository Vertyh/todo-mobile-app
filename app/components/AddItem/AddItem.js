import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput
} from 'react-native';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    addItem() {
        console.log(this.state.item);
    }
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder="Add Item"
                onChangeText={(text) => this.setState({item: text})}
                onSubmitEditing={() => this.addItem()}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 85,
        fontSize: 22,
        padding: 20,
    }
});

export default AddItem;

AppRegistry.registerComponent('AddItem', () => AddItem);