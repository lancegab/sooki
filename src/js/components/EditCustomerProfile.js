import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, TouchableHighlight} from 'react-native';
import styles from './styles-android.js'
import Status from './Status.js';
import {showCamera} from '../actions/index';
import {signUp} from '../actions/index';
import {newUsername} from '../actions/index';
import {newPassword} from '../actions/index';
import {newType} from '../actions/index';
import {newName} from '../actions/index';

import {newAvatar} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class EditCustomerProfile extends Component {
     onSubmit(){
          const { navigate } = this.props.navigation;
          this.props.signUp(this.props.username, this.props.password, this.props.name, this.props.type, this.props.avatar);
          navigate('ProfileCustomer');
     }
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

                    <View style={styles.titleContainer}>
                         <TouchableHighlight onPress={() => this.props.newAvatar("girl.png")}>
                              <Image source={require('./img/girl.png')} style={{marginLeft:9,marginRight:9, width: 80, height: 140}}/>
                         </TouchableHighlight>
                         <TouchableHighlight onPress={() => this.props.newAvatar("boy.png")}>
                              <Image source={require('./img/boy.png')} style={{marginLeft:9,marginRight:9,width: 80, height: 140}}/>
                         </TouchableHighlight>
                    </View>

                    <View style={styles.inputContainer}>
                         <TextInput placeholder = "Customer Name" style={styles.input}  onChangeText={(text) => this.props.newName(text)} underlineColorAndroid = "transparent"/>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onSubmit.bind(this)}>
                              <Text style={styles.buttonText}>
                                   REGISTER
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
          password: state.password,
          type: state.type,
          avatar: state.avatar,
          name: state.name
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          signUp: signUp,
          newUsername: newUsername,
          newPassword: newPassword,
          newType: newType,
          newName: newName,
          newAvatar: newAvatar
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditCustomerProfile);
