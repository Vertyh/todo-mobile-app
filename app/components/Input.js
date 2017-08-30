import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput
} from 'react-native';
const Input = (props) => {
    return (
        <TextInput
            style={props.style}
            onSubmitEditing={(text) => props.cb(text)}
        />
    );
};

export default Input;

AppRegistry.registerComponent('Input', () => Input);