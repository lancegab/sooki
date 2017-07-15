import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Vibration} from 'react-native';
import styles from './styles-android.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {confirmScan} from '../actions/index';

import Status from './Status.js';


class ScanConfirm extends Component {
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
                              Scan success!
                         </Text>
                         <Text>
                              {this.props.currentScan.vendor}
                         </Text>
                         <Text>
                              {this.props.currentScan.amount}
                         </Text>
                    </View>
               </View>
          );
     }
}

function mapStateToProps(state) {
     return {
          currentScan: state.currentScan
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          confirmScan: confirmScan
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ScanConfirm);
