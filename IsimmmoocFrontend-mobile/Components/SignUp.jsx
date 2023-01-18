import * as React from 'react';
import { useContext, useState } from 'react';
import {Text,View,FlatList,StyleSheet,ScrollView,TextInput,} from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignUp = () => {


  const [firstName, setFirstName] = useState("")
  const [last_name, setLast_name] = useState("")
  const [date_of_birth, setDate_of_birth] = useState("")
  const [mail, setMail] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [password, setPassword] = useState("")


  async function creation() {

    let body = JSON.stringify({
      'first_name': firstName,
      'last_name': last_name,
      'date_of_birth':date_of_birth,
      'mail': mail,
      'phone_number':phone_number,
      'password': password
    })

   const response = fetch(`http://127.0.0.1:8000/users/Apprenant/addApprenant/`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      const json = await response.json()
    return json.Token
      

  }


  return (
    <View style={{backgroundColor:'#FFF',height:'100%'}}>
      <Card style={styles.card} >
      <View style={styles.infoCours}>
      <Text style={styles.pop} >Creer un Compte </Text>
      <ScrollView style={styles.scrollView}>

      <Text >First Name</Text>
        <TextInput style={styles.textinput} value={firstName} onChangeText={text => setFirstName(text)}   placeholder='First Name'/>


        <Text >Last Name</Text>
        <TextInput style={styles.textinput} value={last_name} onChangeText={text => setLast_name(text)}   placeholder='Last Name'/>

        <Text >Birth Day</Text>
        <TextInput style={styles.textinput} value={date_of_birth} onChangeText={text => setDate_of_birth(text)}   placeholder='Birth Day'/>


        <Text >Email Address</Text>
        <TextInput style={styles.textinput} value={mail} onChangeText={text => setMail(text)}   placeholder='Email'/>
        
        <Text >Phone Number</Text>
        <TextInput style={styles.textinput} value={phone_number} onChangeText={text => setPhone_number(text)}   placeholder='Phone Number'/>
        
        <Text >Password</Text>
        <TextInput style={styles.textinput} value={password} onChangeText={text => setPassword(text)}  textContentType="password" autoCompleteType="password"  placeholder='Password'/>

        <TouchableOpacity style={styles.btn} onPress={() => creation()}>
          <Text style={styles.btntxt}>Creer</Text>
        </TouchableOpacity>

      </ScrollView>
      </View>

      </Card>
    </View>
  )


}

export default SignUp

const styles = StyleSheet.create({

card:{
    borderRadius:45,
    backgroundColor:'#e8f6ff',
    height:575,
    width:398,
    marginTop:22,
    marginLeft:7,
    marginRight:7,
    borderWidth: 1,
    }
    ,
pop:{
      margin:16,
      marginTop:0,
      fontSize:23,
      textDecorationLine:"solid",
      fontWeight: "bold",
      textAlign: 'center',
      
      },

infoCours:{
        justifyContent:'space-between',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        margin:29,
      }
,
scrollView:{
  marginHorizontal: 7,

},
textinput:{
  borderColor: '#000',
  width: 313,
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
  backgroundColor:'#FFF',
}
,
btn:{
backgroundColor:'#FFF',
borderRadius:20,
height:40,
width:120,
borderWidth:1,
textAlign:'center',
margin:45,
marginLeft:90,
marginTop:25,

}
,
btntxt:{
  textAlign:'center',
  fontSize:17,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:5

}
})