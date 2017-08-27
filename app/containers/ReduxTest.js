import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

class ReduxTest extends Component {
    incrementCounter() {
        this.props.dispatch((dispatch) => dispatch({type: 'INCREMENT'}));
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Counter: {this.props.counter}
                </Text>
                <TouchableHighlight style={styles.increment} onPress={() => this.incrementCounter()}>
                    <Text style={styles.incrementText}>Increment</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20
    },
    increment: {
        padding: 10,
        marginTop: 40,
        borderWidth: 1
    },
    incrementText: {
        fontSize: 28
    }
});

export default connect((store) => {
    return {
        counter: store.counter
    }
})(ReduxTest);

AppRegistry.registerComponent('ReduxTest', () => ReduxTest);