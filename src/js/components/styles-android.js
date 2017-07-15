import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#4d88ff'
          backgroundColor: 'steelblue'

     },
     titleContainer: {
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
          color: '#ffffff',
          backgroundColor: 'rgba(255,255,255,0.2)',
          width: 275,
          height: 40,
          marginBottom: 10,
     },
     buttonContainer: {
          backgroundColor: '#66ff66',
          alignItems: 'center',
          padding: 10,
          borderRadius: 30,
          width: 80,
          marginTop: 10,
     },
     buttonText: {
          fontSize: 18,
          borderRadius: 50,
          fontWeight: 'bold'
     },
     joinText: {
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
