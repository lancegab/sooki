import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import styles from './styles-android.js';
import Status from './Status';

export default class SignUp extends Component {

     onSubmit(){
          //TODO
          //Grab username and password from input fields
          //this.props.signUp(username,password);
          navigate('EditProfile');
     }

     static navigationOptions = {
          header:null
     };
     render() {
          const { navigate } = this.props.navigation;
          return (
               <View style={styles.container}>
                    <Status />
                    <View style={styles.titleContainer}>
                         <Text style={styles.welcome}>
                              Become a warrior.
                         </Text>
                    </View>
                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "username" style={styles.input} underlineColorAndroid = "transparent"/>
                         <TextInput placeholder = "password" style={styles.input} underlineColorAndroid = "transparent" secureTextEntry />
                         <TextInput placeholder = "confirm password" style={styles.input} underlineColorAndroid = "transparent" secureTextEntry />
                         <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5} onPress={this.onSubmit.bind(this)}>
                              <Text style={styles.buttonText}>
                                   Join!
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
          signUp: signUp
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
