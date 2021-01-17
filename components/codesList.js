import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CodesList = ({code, selectCode}) =>{
  return(
      <TouchableOpacity style={[styles.button] , {backgroundColor: code.selected ? '#3FBF3F' : '#ffff'}} onPress = {() => {selectCode(code.id)}}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{code.text}</Text>
        </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor:'#ffff'
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

