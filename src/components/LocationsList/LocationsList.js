import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, Button } from 'react-native-material-design';
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} from 'react-native';

@observer
export default class GeoLocation extends Component
{
    renderRow()
    {
        return (
            <TouchableHighlight>
                <View>
                    <Text> something </Text>
                </View>
            </TouchableHighlight>
        );
    }

    render()
    {
        const { locationStore } = this.props;

        return (
          <View>
            <ListView dataSource={ locationStore.locations } />
          </View>
      );
    }
}
