import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, StatusBar} from 'react-native';
import styles from './styles-android.js'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Status from './Status.js';

import {signIn} from '../actions/index';
import {showCamera} from '../actions/index';

import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';

class SignIn extends Component {
     static navigationOptions = {
          header : null
     };
     render() {
          const { navigate } = this.props.navigation;

          return (
               <View style={styles.container}>
                    <Status />
                    <Barcode value={"824"} format="CODE128" />
                    <View style={styles.titleContainer}>
                         <Text style={styles.welcome}>
                              Enter the arena.
                         </Text>
                         <Text>
                              {this.props.activeUser}
                         </Text>
                    </View>
                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "username" style={styles.input} underlineColorAndroid = "transparent"/>
                         <TextInput placeholder = "password" style={styles.input} underlineColorAndroid = "transparent" secureTextEntry />
                         <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5} onPress={this.props.signIn}>
                              <Text style={styles.buttonText}>
                                   Fight!
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('SignUp')}>
                              <Text style={styles.joinText}>
                                   Join!
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity activeOpacity={0.5} onPress={() => {navigate('Scanner'); this.props.showCamera()}}>
                              <Text style={styles.joinText}>
                                   Try Scanning!
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}

function mapStateToProps(state) {
     return {
          activeUser: state.activeUser
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          signIn: signIn,
          showCamera: showCamera

     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
