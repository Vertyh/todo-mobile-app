import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AppWithNavigationState from '../navigators/AppNavigator';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('App', () => App);