import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const UsersDataPlacehoder = ({saveInfo, userData}) =>{

  const[name, setName] = useState('');
  const[addr, setAddr] = useState('');
  const[disabled, setDisabled] = useState(true);

  const onChangeName = (nameTextValue) => {
    setName(nameTextValue.trim());
  }

  const onChangeAddr = (addrTextValue) => {
      setAddr(addrTextValue.trim())
  }

  const isDisabled = () => {
    return name === '' || addr === ''
  }

  return(
    <View >
      <TextInput placeholder='Ονοματεπώνυμο' style={styles.nameInput} onChangeText = {onChangeName} defaultValue={userData.name}></TextInput>
      <TextInput placeholder='Διεύθυνση' style={styles.streetInput} onChangeText = {onChangeAddr} defaultValue={userData.addr}></TextInput>
      <TouchableOpacity 
        style={[styles.btn, , { opacity: isDisabled() ? 0.3 : 1 }]}
        onPress = {() => saveInfo({
          name, addr
        })}
        disabled = {isDisabled()}>
            <Text style={styles.btnText}>ΑΠΟΘΗΚΕΥΣΗ</Text>
        </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
    nameInput:{
        height: 50,
        padding: 10,
        fontSize: 16,
        margin: 20,
        backgroundColor:'#f0f5f5'
    },
    streetInput:{
        height: 50,
        padding: 10,
        fontSize: 16,
        margin: 20,
        backgroundColor:'#f0f5f5'
    },
    btn:{
      backgroundColor: '#ffad33',
      padding: 9,
      margin: 5,
    },
    btnText:{
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
  }
})

export default UsersDataPlacehoder;

