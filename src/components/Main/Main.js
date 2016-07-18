import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import LocationStore from 'loca/stores/LocationStore';
import GeoLocation from 'loca/components/GeoLocation';

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
