import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { addToDo } from '../../redux/actions';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    addItem() {
        if(this.state.item !== '') {
            this.props.dispatch(addToDo(this.state.item));
            this.setState({ item: '' });
        }
    }
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder="Add Item"
                placeholderTextColor="rgba(255, 255, 255, 0.9)"
                value={this.state.item}
                onChangeText={(text) => this.setState({item: text})}
                onSubmitEditing={() => this.addItem()}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 70,
        fontSize: 22,
        paddingHorizontal: 15,
        color: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    }
});

export default connect((store) => store)(AddItem);

AppRegistry.registerComponent('AddItem', () => AddItem);