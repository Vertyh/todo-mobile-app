/**
 * ToDoList React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import App from './app/containers/App';

export default class ToDoApp extends Component {
  render() {
      return <App />
  }
}

AppRegistry.registerComponent('ToDoApp', () => ToDoApp);
