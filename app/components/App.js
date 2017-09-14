import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import styles from '../styles/App';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <AddItem />
                    <ItemsList />
                </View>
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('App', () => App);