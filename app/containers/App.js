import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Input from '../components/Input';
import ReduxTest from './ReduxTest';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <Input />
            </Provider>
        );
    }
}

export default App;

AppRegistry.registerComponent('App', () => App);