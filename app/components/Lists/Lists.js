import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';
import styles from '../../styles/Common';
import { StackNavigator } from 'react-navigation';

class Lists extends Component {
    static navigationOptions = {
        title: 'All Lists',
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Lista"
                    onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: 'abc123'} })}
                />
                <Button
                    title="Lista 2"
                    onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: 'def456'} })}
                />
            </View>
        );
    }
}

export default Lists;