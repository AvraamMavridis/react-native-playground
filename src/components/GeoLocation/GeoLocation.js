import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class GeoLocation extends Component
{

    constructor()
    {
        super();
        this.state = {
            latitude  : 0,
            longitude : 0,
            accuracy  : 0,
            altitude  : 0,
        };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var initialPosition = JSON.stringify(position);
          this.setState({initialPosition});
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        var lastPosition = JSON.stringify(position);
        this.setState({lastPosition});
      });
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
      return (
        <View>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            {this.state.initialPosition}
          </Text>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            {this.state.lastPosition}
          </Text>
        </View>
      );
    }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
