import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

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

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#3498eb'
   }
});

export default App;

AppRegistry.registerComponent('App', () => App);