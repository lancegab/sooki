import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import MainApp from './src/js/components/index';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './src/js/reducers/index';
import {Provider} from 'react-redux';
import {Status} from './src/js/components/Status.js';


export default class Horde extends Component {

     store = createStore(allReducers, applyMiddleware(thunk));

     render() {
          return (
               <Provider store={this.store}>
                    <MainApp />
               </Provider>
          );
     }
}


AppRegistry.registerComponent('sooki', () => sooki);
