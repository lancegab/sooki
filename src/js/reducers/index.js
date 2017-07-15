import {combineReducers} from 'redux'

import ActiveUserReducer from './reducer-active-user';
import CurrentScanReducer from './reducer-current-scan';
import ShowCameraReducer from './reducer-show-camera';



const allReducers = combineReducers({
     activeUser: ActiveUserReducer,
     currentScan: CurrentScanReducer,
     showCamera: ShowCameraReducer
});

export default allReducers;
