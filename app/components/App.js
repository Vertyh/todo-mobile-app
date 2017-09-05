import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AddItem from './AddItem/AddItem';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <AddItem />
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('App', () => App);