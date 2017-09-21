import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import styles from '../styles/App';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import SingleList from './SingleList/SingleList';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <SingleList />
                </View>
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('App', () => App);