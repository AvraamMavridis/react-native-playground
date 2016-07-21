import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, Button } from 'react-native-material-design';
import {
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

    getUserLocation()
    {
        navigator.geolocation.getCurrentPosition( pos => this.setState( pos ) );
    }

    saveUserLocation()
    {
        const { locationStore } = this.props;
        locationStore.saveUserLocation( this.state );
    }

    render()
    {
        const { latitude, longitude, accuracy, altitude } = this.state;

        return (
          <View>
              <Card>
                  <Card.Body>
                      <Text>Latitude : { latitude }</Text>
                      <Text>Longitude : { longitude }</Text>
                      <Text>Accuracy : { accuracy }</Text>
                      <Text>Altitude : { altitude }</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                      <Button value="Get Location" onClick={ () => this.getUserLocation() } />
                      <Button value="Save Location" onClick={ () => this.saveUserLocation() } />
                  </Card.Actions>
              </Card>
          </View>
      );
    }
}
