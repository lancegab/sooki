import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js'
import {showCamera} from '../actions/index'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class ProfileCustomer extends Component {

     onPressBills(){
          const { navigate } = this.props.navigation;
          navigate('Payment');
     }

     onPressBarcode(){
          const { navigate } = this.props.navigation;
          this.props.showCamera;
          navigate('Scanner');
     }

     onPressPoints(){
          const { navigate } = this.props.navigation;
          navigate('VendorList');
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

                              <View style={styles.avatar}>
                                   <Image source={require('./img/boy.png')} style={{marginTop: 65, width: 120, height: 200}}/>
                              </View>
                              <Text style={{fontSize: 30, color: 'white'}}> {this.props.activeUser.name} </Text>

                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onPressBills.bind(this)}>
                                   <Text placeholder="bills"> Bills Payment </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onPressPoints.bind(this)}>
                                        <Text placeholder="points"> Points </Text>
                         </TouchableOpacity>
                         <View style={styles.bottom}>
                              <TouchableOpacity style={styles.buttonContainer2} activeOpacity={0.5} onPress={this.onPressBarcode.bind(this)}>
                                             <Text placeholder="barcode"> Barcode </Text>
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
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          showCamera: showCamera
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileCustomer);
