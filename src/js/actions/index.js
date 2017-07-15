import axios from 'axios';

export const signUp = (username,password) => {
     var obj = {
          username: username,
          password: password
     }

     const request = axios.post('/sign_up', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'SIGN_UP', payload: data})
          })
     }
}

export const testAction = () => {
     return {
          type: 'SIGN_IN',
          payload: 'Very funny'
     }
}

export const confirmScan = (data) => {
     return {
          type: 'NEW_SCAN',
          payload: {
                    vendor: 'Baker Bob',
                    amount: data
                    }
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


export const signIn = (username,password) => {
     var obj = {
          username: username,
          password: password
     }
     const request = axios.post('/sign_in', obj);

     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'SIGN_IN', payload: data});
          })
     }
}
