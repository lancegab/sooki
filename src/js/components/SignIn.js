import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, StatusBar,Image} from 'react-native';
import styles from './styles-android.js'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Status from './Status.js';

import {signIn} from '../actions/index';
import {showCamera} from '../actions/index';
import {newUsername} from '../actions/index';
import {newPassword} from '../actions/index';


import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';

class SignIn extends Component {
     static navigationOptions = {
          header : null
     };

     onSubmit(){
          //TODO
          //Grab username and password from input fields
          //this.props.signIn(document.getElementById('username').value, document.getElementById('password').value);
          this.props.signIn(this.props.username,this.props.password);

          //navigate('EditProfile');
     }

     render() {
          const { navigate } = this.props.navigation;

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
        source={require('./img/bg1.png')}
   />

                    <View style={styles.titleContainer}>
                    </View>
                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "Username" style={styles.input} onChangeText={(text) => this.props.newUsername(text)} underlineColorAndroid = "transparent"/>
                         <TextInput placeholder = "Password" style={styles.input} onChangeText={(text) => this.props.newPassword(text)} underlineColorAndroid = "transparent" secureTextEntry />

                         <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5} onPress={this.onSubmit.bind(this)}>
                              <Text style={styles.buttonText}>
                                   Login
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('SignUp')}>
                              <Text style={styles.joinText}>
                                   Join
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}

function mapStateToProps(state) {
     return {
          activeUser: state.activeUser,
          username: state.username,
          password: state.password
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          signIn: signIn,
          showCamera: showCamera,
          newUsername: newUsername,
          newPassword: newPassword

     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
