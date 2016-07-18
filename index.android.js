import React, { Component } from 'react';
import Main from './src/components/Main';
import {
  AppRegistry,
  View,
} from 'react-native';

class loca extends Component {
    render()
    {
        return (
          <View>
            <Main />
          </View>
        );
    }
}

AppRegistry.registerComponent( 'loca', () => loca );
