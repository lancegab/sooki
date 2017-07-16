import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
     backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

     },
     titleContainer: {

          marginTop: -70,
          flexDirection: 'row',
          flex: 1,
          // height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 50,
          // backgroundColor: 'red',
     },
     welcome: {
          fontSize: 24,
          margin: 10,
     },
     inputContainer: {
          justifyContent: 'flex-end',
          paddingBottom: 80,
          alignItems: 'center',
     },
     input: {
          padding: 10,
          fontSize: 18,
          color: 'black',
          backgroundColor: 'rgba(255,255,255,0.2)',
          width: 275,
          height: 40,
          marginBottom: 10,
     },
     buttonContainer: {
          backgroundColor: '#FF5733',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          width: 80,
          marginTop: 10,
     },
     buttonRow:{
          marginTop: 10,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
     },
     buttonContainer2: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingRight: 7,
          paddingLeft: 7,
          alignItems: 'center',
          marginLeft: 5,
          marginRight: 5,
          marginTop: 10,
          borderRadius: 20,
          width: 100,
          backgroundColor: '#FF9B86'
     },
     buttonContainer1: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingRight: 7,
          paddingLeft: 7,
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 20,
          width: 100,
          backgroundColor: '#FF5733'
     },
     buttonText: {
          color: '#FFD4CB',
          fontSize: 18,
          fontWeight: 'bold'
     },
     joinText: {
          color: '#FFD4CB',
          fontSize: 18,
          borderRadius: 50,
          fontWeight: 'bold',
          marginTop: 20,
     },
     button: {
          color: 'black',
     },
     instructions: {
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5
     },
     cameraContainer: {
          flex: 1,
          flexDirection: 'row'
     },
     preview: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
     },
     avatar: {
          flex: 1,
       alignItems: 'center'
     },
     upper: {
          alignItems: 'center',
          marginTop: 40
     },
     left: {
          alignItems: 'flex-end',
          marginTop : 50,
          // marginLeft: -200,
     },

     capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          color: '#000',
          padding: 10,
          margin: 40
     }
});

export default styles;
