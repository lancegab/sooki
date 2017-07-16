import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Status from './Status.js';
import {showCamera} from '../actions/index';
import {signUp} from '../actions/index';
import {newUsername} from '../actions/index';
import {newPassword} from '../actions/index';
import {newType} from '../actions/index';


class SignUp extends Component {

     onSubmitCustomer(){
          const { navigate } = this.props.navigation;
          this.props.newType("customer");
          navigate('EditCustomerProfile');
     }

     onSubmitVendor(){
          const { navigate } = this.props.navigation;
          this.props.newType("vendor");
          navigate('EditVendorProfile');
     }


     static navigationOptions = {
          header:null
     };
     render() {
          const { navigate } = this.props.navigation;
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
                    <View style={styles.inputContainer_signup}>
                         <TextInput placeholder = "Username" style={styles.input} onChangeText={(text) => this.props.newUsername(text)} underlineColorAndroid = "transparent"/>
                         <TextInput placeholder = "Password" style={styles.input} onChangeText={(text) => this.props.newPassword(text)} underlineColorAndroid = "transparent" secureTextEntry />

                         <View style={styles.buttonRow}>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onSubmitCustomer.bind(this)}>
                              <Text style={styles.buttonText}>
                                   Customer
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onSubmitVendor.bind(this)}>
                              <Text style={styles.buttonText}>
                                   Vendor
                              </Text>
                         </TouchableOpacity>
                    </View>

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
          signUp: signUp,
          showCamera: showCamera,
          newUsername: newUsername,
          newPassword: newPassword,
          newType: newType
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
