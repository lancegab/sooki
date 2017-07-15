import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Vibration} from 'react-native';
import styles from './styles-android.js';
import Camera from 'react-native-camera';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {confirmScan} from '../actions/index';
import {hideCamera} from '../actions/index';


class Scanner extends Component {
     static navigationOptions = {
          header:null
     };
     render() {
          const { navigate } = this.props.navigation;
          if(this.props.showCamera){
               return (
                    <View style={styles.cameraContainer}>
                         <Camera
                              ref={(cam) => {
                                this.camera = cam;
                              }}
                              style={styles.preview}
                              aspect={Camera.constants.Aspect.fill}

                              onBarCodeRead ={this.scan.bind(this)}

                              // barCodeTypes = {[code128]}
                         >
                              {/* <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text> */}
                         </Camera>
                    </View>
               );
          }
          else{
               return (
                    <View style={styles.cameraContainer}>
                    </View>
               );
          }

     }

     scan(e){
          const { navigate } = this.props.navigation;

          Vibration.vibrate();

          this.props.confirmScan(e.data);

          navigate('ScanConfirm');

          this.props.hideCamera();

     }

     takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
}

function mapStateToProps(state) {
     return {
          showCamera: state.showCamera
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          hideCamera: hideCamera,
          confirmScan: confirmScan
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Scanner);
