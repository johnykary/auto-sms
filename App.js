import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import UsersDataPlacehoder from './components/UsersDataPlacehoder';
import CodesList from './components/codesList';
import SendButton from './components/SendButton';


const App = () =>{
  const [codes, setItems] = useState([
    {id: 1, text: '1) Μετάβαση σε φαρμακείο ή επίσκεψη στον γιατρό', selected: false},
    {id: 2, text: '2) Μετάβαση σε εν λειτουργία κατάστημα προμηθειών αγαθών πρώτης ανάγκης', selected: false},
    {id: 3, text: '3) Μετάβαση σε δημόσια υπηρεσία ή τράπεζα', selected: false},
    {id: 4, text: '4) Κίνηση για παροχή βοήθειας σε ανθρώπους που βρίσκονται σε ανάγκη ή συνοδεία ανηλίκων μαθητών από/προς το σχολείο', selected: false},
    {id: 5, text: '5) Μετάβαση σε τελετή κηδείας υπό τους όρους που προβλέπει ο νόμος ή μετάβαση διαζευγμένων γονέων ή γονέων που τελούν σε διάσταση που είναι αναγκαία για τη διασφάλιση της επικοινωνίας γονέων και τέκνων, σύμφωνα με τις κείμενες διατάξεις', selected: false},
    {id: 6, text: '6) Σωματική άσκηση σε εξωτερικό χώρο ή κίνηση με κατοικίδιο ζώο, ατομικά ή ανά δύο άτομα', selected: false}
  ])
  const [userData, setUserData] = useState({
    name: '',
    addr: ''
  })
  const [selectedCode, setSelectedCode] = useState();


  const selectCode = id =>{
    setSelectedCode(id)

    //Update codes
    codes.forEach(code => {
      if(code.id === id){
        code.selected = true
      }else{
        code.selected = false;
      }
    })
    setItems(codes)
  }

  
  const saveInfo = userInfo => {
    if(!userInfo){
      console.log('empty')
    }else{
      //Here should save to local and to state
      userData.name = userInfo.name
      userData.addr = userInfo.addr;
      setUserData(userData)
    }
  }

  const isSaveButtonDisabled = () => {
    return (userData.name === '' || userData.addr === '' || selectedCode === undefined );
  }

  return(
    <View style={styles.container}>
      <Header title='Sms στο 13033'/>
      <UsersDataPlacehoder saveInfo = {saveInfo}/>
      <FlatList
         data = {codes}
         renderItem= {({item}) => <CodesList code={item} selectCode = {selectCode} />} 
         keyExtractor={(item, index) => index.toString()}
      />
      <SendButton selectedCode={selectedCode} userData={userData}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;

