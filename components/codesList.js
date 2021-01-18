import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CodesList = ({code, selectCode}) =>{
  return(
      <TouchableOpacity style={[styles.button , {backgroundColor: code.selected ? '#fff9b8' : '#ffff'}]} onPress = {() => {selectCode(code.id)}}>
        <View >
            <Text style={styles.listItemText}>{code.text}</Text>
        </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderWidth: 5,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,

    }
})

export default CodesList;

