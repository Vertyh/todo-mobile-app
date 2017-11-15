import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
    static navigationOptions = ({navigation}) => ({
        header: false
    });

    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        )
    }
}

export default Login;