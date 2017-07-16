import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from 'react-native';
import styles from './styles-android.js';
import axios from 'axios';
import {findChildrenMessages} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CustomerListItem} from './CustomerListItem'




class CustomerList extends Component {

  createListItems() {
    return this.props.customerList.map((customers) => {
      return (<CustomerListItem {...customers} key={customers.id} id={customers.id} name={customer.name} point={customer.point}/>)
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
          <Text> CUSTOMER'S LIST HERE</Text>

         </View>
    );
  }
}

function mapStateToProps(state) {
     return {
          customerList: state.customerList
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({

     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CustomerList);
