import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import GeoLocation from '../../components/GeoLocation';

export default class Main extends Component
{
    render()
    {
        return (
            <View>
              <Text>I am ???</Text>
              <GeoLocation />
            </View>
        );
    }
}
