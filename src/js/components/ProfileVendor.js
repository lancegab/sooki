import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProfileVendor extends Component {

     onPressPayment(){
          const { navigate } = this.props.navigation;
          navigate('Payment');
     }

     onPressCustomers(){
          const { navigate } = this.props.navigation;
          navigate('CustomerList');
     }

     onPressBarcode(){
          const { navigate } = this.props.navigation;
          navigate('BarcodeGen');
     }

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
                         <View style={styles.inputContainer}>
                                   <Image source={require('./img/store2.png')} style = {{width: 170, height:180}}/>

                         </View>
                         <Text style={{fontSize: 30, color: 'white'}}> {this.props.activeUser.name} </Text>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onPressBarcode.bind(this)}>
                                        <Text placeholder="customers"> BarcodeGen </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onPressCustomers.bind(this)}>
                                        <Text placeholder="customers"> Customers </Text>
                                   </TouchableOpacity>
               </View>
          );
     }
}

function mapStateToProps(state) {
     return {
          activeUser: state.activeUser,
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileVendor);
