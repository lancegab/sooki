import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js'

export default class BarcodeGen extends Component {

     static navigationOptions = {
          header:null
     };
     render() {
          return (
               <View style={styles.container}>
                    <Image
                       style={{
                         backgroundColor: '#ccc',
                         flex: 1,
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         justifyContent: 'center',
                       }}
                       source={require('./img/bg.png')}
                  />
                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "Price" style={styles.input} underlineColorAndroid = "transparent"/>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5}>
                              <Text style={styles.buttonText}>
                                   GENERATE
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}
