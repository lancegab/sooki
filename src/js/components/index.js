import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import EditProfile from './EditProfile';
import Profile from './Profile';
import Scanner from './Scanner';
import ScanConfirm from './ScanConfirm';


const AppNavigator = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp},
  EditProfile: { screen: EditProfile},
  Profile: {screen : Profile},
  Scanner: { screen: Scanner},
  ScanConfirm: { screen: ScanConfirm},
}, { header: null });

export default AppNavigator;
