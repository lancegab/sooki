import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import VendorListItem from "./VendorListItem";


class VendorList extends Component {

  createListItems() {
    return this.props.vendorList.map((vendors) => {
      return (<VendorListItem {...vendors} key={vendors.id} id={vendors.id} name={vendors.name} point={vendors.point}/>)
    });
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
          {this.createListItems.bind(this)}
          <Text>VENDOR'S LIST HERE!</Text>
         </View>
    );
  }
}

function mapStateToProps(state) {
     return {
          vendorList: state.vendorList
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({

     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(VendorList);
