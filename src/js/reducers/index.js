import {combineReducers} from 'redux'

import ActiveUserReducer from './reducer-active-user';
import CurrentScanReducer from './reducer-current-scan';
import ShowCameraReducer from './reducer-show-camera';
import UsernameReducer from './reducer-username';
import PasswordReducer from './reducer-password';
import CustomerListReducer from './reducer-customer-list';
import VendorListReducer from './reducer-vendor-list';
import TypeReducer from './reducer-type';
import AvatarReducer from './reducer-avatar';
import NameReducer from './reducer-name';
import AccountReducer from './reducer-account'
import AmountReducer from './reducer-amount'





const allReducers = combineReducers({
     activeUser: ActiveUserReducer,
     currentScan: CurrentScanReducer,
     showCamera: ShowCameraReducer,
     username: UsernameReducer,
     password: PasswordReducer,
     customerList: CustomerListReducer,
     vendorList: VendorListReducer,
     type: TypeReducer,
     avatar: AvatarReducer,
     name: NameReducer,
     amount: AmountReducer,
     account: AccountReducer
});

export default allReducers;
