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
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { UrlTile } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


export default class RNRedux extends Component {

  constructor() {
    super();
  }

  render() {

    const DrunkenMonkeyPrague = {
      latitude: 50.091905,
      longitude: 14.420873,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    const SanFranciso = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    const GrandCentralStation = {
      latitude: 40.752970,
      longitude: -73.977192,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,      
    };

    return (
      <MapView
        style={ styles.map }
        initialRegion={GrandCentralStation}
      />
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('RNRedux', () => RNRedux);
