import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import MapView from 'react-native-maps';
import { UrlTile } from 'react-native-maps';
import queryString from 'query-string';
import Config from '../../config/dev.json';
import ApiService from '../remoteServices/apiService.js';



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



class MapMain extends React.Component {
  state = {
  	counter: 0
  };

  apiTest() {
    console.log("API TEST");
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json));

    ApiService.findCity('prague').then(response => console.log(response));
  }

  onMapReady() {
    Alert.alert(
      'Map Loaded',
      'Funky Funky',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.apiTest()},
      ],
      { cancelable: false }
    );

    console.log("this.props: ", this.props);
    this.props.dispatch({type: 'INCREMENT'});
    this.props.dispatch({type: 'INCREMENT'});

  }

  static getDerivedStateFromProps(props, state) {
  	console.log("props: ", props);
  	console.log("state: ", state);
  	return {
  		counter: props.counter
  	};
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

    console.log("MapMain state: ", this.state);

    return (
      <MapView
        style={ styles.map }
        initialRegion={GrandCentralStation}
        onMapReady={e => this.onMapReady(e)}
      />
    );
  }
}


const mapStateToProps = (state = {}) => {
  return Object.assign({}, state);
};

export default connect(mapStateToProps)(MapMain);