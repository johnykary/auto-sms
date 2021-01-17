import React, {useCallback} from 'react';
import { StyleSheet, TouchableOpacity,  Linking, Platform, Alert, Text } from 'react-native';

const isSaveButtonDisabled = (selectedCode, userData) => {
    return (userData.name === '' || userData.addr === '' || selectedCode === undefined );
}



const SendButton = (props) =>{
  const {selectedCode, userData} = props;
  return(
    <TouchableOpacity 
        style={[styles.saveBtn, {opacity : isSaveButtonDisabled(selectedCode, userData) ? 0.3 : 1}]}
        onPress = {async () => {
            const phoneNumber = 13033;
            const body = `${selectedCode} ${userData.name} ${userData.addr}`
            const url = `sms:${phoneNumber}?body=${body}`
            const supported = await Linking.canOpenURL(url);
            if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }}
        disabled={isSaveButtonDisabled(selectedCode, userData)}>
             <Text style={styles.btnText}>ΑΠΟΣΤΟΛΗ</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    saveBtn:{
        backgroundColor: '#ffad33',
        padding: 15,
        margin: 5
      },
      btnText:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default SendButton;

