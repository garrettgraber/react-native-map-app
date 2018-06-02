import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../stores/store.js';


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import MapMain from './mapMain.js';


class App extends Component {
  constructor(props, context) {
      super(props, context);
  }

  componentDidMount() { }

  render() {
    return (
      <Provider store={store}>
        <MapMain/>
      </Provider>        
    );
  }
}

export default App;