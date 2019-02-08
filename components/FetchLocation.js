import React from 'react';
import {Alert,Button} from 'react-native';

const fetchLocation = (props) => {
    return (
        // <Button title="get location" onPress={() =>{
        //     Alert.alert('test')
        // }} />
        <Button title="click me" onPress={props.getlocation}/>
    );
};

export default fetchLocation;