import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js'

class VendorListItem extends Component {

  render() {
    return (
         <View style={styles.container}>
            <Text> Name:  {this.props.name} </Text>
            <Text> Point: {this.props.point} </Text>
         </View>
    );
  }
}
