import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import styles from './styles-android.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Status extends Component {
     render() {
          return (
               <StatusBar
                    backgroundColor="steelblue"
                    barStyle="light-content"
                />
          );
     }
}
