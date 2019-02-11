
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';
import FetchLocation from './components/FetchLocation';
import MapView from 'react-native-maps';

export default class App extends Component{
  userLocationHandler = () => {
    // console.log('Button clicked!!');
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos)
    },err => console.log(err))
  }
  

  render() {

    return (
   <View style={styles.container}>
     {/* <FetchLocation getlocation={this.userLocationHandler} /> */}
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
