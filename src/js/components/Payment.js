import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js'

class Payment extends Component {

     static navigationOptions = {
          header:null
     };
     render() {
          return (
               <View style={styles.container}>
                    <Image style={{
                         backgroundColor: '#ccc',
                         flex: 1,
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         justifyContent: 'center',
                    }}
                    source={require('./img/bg.png')}
                    />

                    <TextInput placeholder = "Account Number" style={styles.input} onChangeText={(text) => this.props.newUsername(text)} underlineColorAndroid = "transparent"/>
                    <TextInput placeholder = "Amount" style={styles.input} onChangeText={(text) => this.props.newUsername(text)} underlineColorAndroid = "transparent"/>

                    <View style={styles.inputContainer}>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5}>
                              <Text style={styles.buttonText}>
                                   PAY
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}


export default Payment;
