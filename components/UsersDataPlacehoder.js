import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign'

const UsersDataPlacehoder = ({saveInfo, userData}) =>{

  const[name, setName] = useState('');
  const[addr, setAddr] = useState('');

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
    <View>
      <View style={styles.textNameView}>
       <Icon
            name="user"
            size={30}
            color='#8a0831'
          />
        <TextInput 
          placeholder='Ονοματεπώνυμο'
          style={styles.nameInput}
          onChangeText = {onChangeName}
          defaultValue = {userData.name !== '' ? userData.name : name}
          ></TextInput>
      </View>  
      <View style= {styles.textAddressView}>
        <Icon
            name="home"
            size={30}
            color='#8a0831'
          />
        <TextInput 
          placeholder='Διεύθυνση'
          style={styles.streetInput} 
          onChangeText = {onChangeAddr}
          defaultValue = {userData.addr !== '' ? userData.addr : addr}
          ></TextInput>
        </View>
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
        margin: 10,
        backgroundColor:'#f0f5f5',
        flex: 1
    },
    streetInput:{
        height: 50,
        padding: 10,
        fontSize: 16,
        margin: 10,
        backgroundColor:'#f0f5f5',
        flex: 1
    },
    btn:{
      backgroundColor: '#8a0831',
      padding: 9,
      margin: 5,
    },
    btnText:{
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
    },
    textNameView:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textAddressView:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
  }
})

export default UsersDataPlacehoder;

