import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import LocationStore from '../../stores/LocationStore';
import GeoLocation from '../../components/GeoLocation';

export default class Main extends Component
{
    render()
    {
        return (
            <View>
                <GeoLocation locationStore={ LocationStore } />
            </View>
        );
    }
}
