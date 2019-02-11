
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';
import FetchLocation from './components/FetchLocation';


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
        <FetchLocation getlocation={this.userLocationHandler} />
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
