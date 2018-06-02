/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import Config from './config/dev.json';
import App from './src/components/app.js';


console.log("Config: ", Config);


export default class RNRedux extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('RNRedux', () => RNRedux);
