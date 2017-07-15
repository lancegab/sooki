import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import styles from './styles-android.js'

export default class EditProfile extends Component {
     static navigationOptions = {
          header:null
     };
     render() {
          return (
               <View style={styles.container}>
                    <View style={styles.titleContainer}>
                         <Text style={styles.welcome}>
                              Suit up.
                         </Text>
                    </View>
                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "first name" style={styles.input} underlineColorAndroid = "transparent"/>
                         <TextInput placeholder = "last name" style={styles.input} underlineColorAndroid = "transparent" secureTextEntry />
                         <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5}>
                              <Text style={styles.buttonText}>
                                   Join!
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}
