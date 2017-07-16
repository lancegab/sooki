import axios from 'axios';

export const payBill = (amount, account) => {

     var obj = {
          amount: amount,
          account: account,
     }

     const request = axios.post('http://192.168.8.103:3003/payBill', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: '', payload: ''})
          })
     }
}

export const signUp = (username,password, name, type, avatar) => {
     var obj = {
          username: username,
          password: password,
          name: name,
          type: type,
          avatar: avatar
     }

     const request = axios.post('http://192.168.8.103:3003/signup', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'SIGN_UP', payload: data})
          })
     }
}
//http://192.168.43.233:3003/testQuery
export const signIn = (username,password) => {
     var obj = {
          username: username,
          password: password
     }
     const request = axios.post('http://192.168.8.103:3003/signin', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'SIGN_IN', payload: data});
          })
     }
}

export const getCutomers = (vendor_id) => {
     var obj = {
          id: vendor_id
     }
     const request = axios.post('http://192.168.8.103:3003/getCustomers', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'FIND_CUSTOMERS', payload: data});
          })
     }
}

export const getVendors = (customer_id) => {
     var obj = {
          id: customer_id
     }
     const request = axios.post('http://192.168.8.103:3003/getVendors', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'FIND_VENDORS', payload: data});
          })
     }
}


export const getCustomerList = (vendor) => {
    var obj = {
         id: vendor.id
    }
     const request = axios.post('http://192.168.8.103:3003/getConsumers', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({
                    type: 'GET_CUSTOMER_LIST',
                    payload: data
               });
          })
     }
}

export const getVendorList = (consumer) => {
    var obj = {
         id: consumer.id
    }
     const request = axios.post('http://192.168.8.103:3003/pointsPerStore', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({
                    type: 'GET_VENDOR_LIST',
                    payload: data
               });
          })
     }
}


export const newUsername = (username) => {
     return {
          type: 'NEW_USERNAME',
          payload: username
     }
}

export const newPassword = (password) => {
     return {
          type: 'NEW_PASSWORD',
          payload: password
     }
}

export const newAvatar = (avatar) => {
     return {
          type: 'NEW_AVATAR',
          payload: avatar
     }
}

export const newName = (name) => {
     return {
          type: 'NEW_NAME',
          payload: name
     }
}

export const newType = (type) => {
     return {
          type: 'NEW_TYPE',
          payload: type
     }
}

export const newAccount = (account) => {
     return {
          type: 'NEW_ACCOUNT',
          payload: account
     }
}

export const newAmount = (amount) => {
     return {
          type: 'NEW_AMOUNT',
          payload: amount
     }
}

export const testAction = () => {
     return {
          type: 'SIGN_IN',
          payload: 'Very funny'
     }
}

export const confirmScan = (consumer_id, points, vendor_id) => {
     var obj = {
         consumer_id: consumer_id,
         points: points,
         vendor_id: vendor_id
    }
     const request = axios.post('http://192.168.8.103:3003/submitBarcode', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({
                    type: 'NEW_SCAN',
                    payload: data
               });
          })
     }
}

export const toggleCamera = () => {
     return {
          type: 'TOGGLE_CAMERA',
          payload: ''
     }
}

export const showCamera = () => {
     return {
          type: 'SHOW_CAMERA',
          payload: ''
     }
}

export const hideCamera = () => {
     return {
          type: 'HIDE_CAMERA',
          payload: ''
     }
}
