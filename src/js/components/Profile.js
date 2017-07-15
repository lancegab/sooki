import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import styles from './styles-android.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Profile extends Component {
     static navigationOptions = {
          header:null
     };

     //Avatar
     //Name
     //Level
     //List of points per store (highest to lowest)

     render() {
          return (
               <View style={styles.container}>
               </View>
          );
     }
}
