import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
// import EditProfile from './EditProfile';
import ProfileCustomer from './ProfileCustomer';
import ProfileVendor from './ProfileVendor';
import Scanner from './Scanner';
import ScanConfirm from './ScanConfirm';
import EditCustomerProfile from './EditCustomerProfile';
import EditVendorProfile from './EditVendorProfile';

import Payment from './Payment';
import CustomerList from './CustomerList';


import BarcodeGen from './BarcodeGen';
import VendorList from './VendorList';

const AppNavigator = StackNavigator({
     SignIn: { screen: SignIn },
     SignUp: { screen: SignUp},
     EditCustomerProfile: { screen: EditCustomerProfile},
     Payment: { screen: Payment},
     EditVendorProfile: { screen: EditVendorProfile},
     BarcodeGen: { screen: BarcodeGen },
     CustomerList: { screen: CustomerList},
     VendorList: { screen: VendorList},
     ProfileCustomer: {screen : ProfileCustomer},
     ProfileVendor: {screen : ProfileVendor},
     Scanner: { screen: Scanner},
     ScanConfirm: { screen: ScanConfirm},
}, { header: null });

export default AppNavigator;
