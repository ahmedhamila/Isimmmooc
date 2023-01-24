import * as React from 'react';
import { useContext, useState } from 'react';
import {Text,View,FlatList,StyleSheet,ScrollView,TextInput,} from 'react-native';
import { Card } from 'react-native-paper';
import { Image,TouchableOpacity } from 'react-native';


const OrganismeSignUp = ({navigation}) => {

  const [name, setName] = useState("")
  const [web_site, setWeb_site] = useState("")
  const [adress, setAdress] = useState("")
  const [mail, setMail] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [password, setPassword] = useState("")

  async function creation() {

    let body = JSON.stringify({
      'name': name,
      'mail': mail,
      'phone_number':phone_number,
      'web_site': web_site,
      'adress':adress,
      'password': password
    })

   const response = await fetch(`http://192.168.56.1:8000/users/Organisme/addPreOrganisme/`, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:body
      })
      .catch(function(error) {
        console.log('There has been a problem with fetch operation: ' + error.message);
        });
        const json = await response.json()
        navigation.navigate("Successorg")
        return json.Token

  }


  return (
    <View style={{backgroundColor:'#FFF',height:'100%'}}>
 
      <View style={styles.head}>
      <TouchableOpacity  onPress={()=> navigation.navigate("Start")}>
      <Image source={require("../../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
      </TouchableOpacity>
      </View>

      <Card style={styles.card} >
      <View style={styles.infoCours}>
      <Text style={styles.pop} >Creer un Compte </Text>
      <ScrollView style={styles.scrollView}>

      <Text >Name</Text>
      <TextInput style={styles.textinput} value={name} onChangeText={text => setName(text)}    placeholder='Name'/>
      
      <Text >Email Address</Text>
      <TextInput style={styles.textinput} value={mail} onChangeText={text => setMail(text)}   placeholder='Email'/>
        
      <Text >Phone Number</Text>
      <TextInput style={styles.textinput} value={phone_number} onChangeText={text => setPhone_number(text)}    placeholder='Phone Number'/>
        
      <Text >website</Text>
      <TextInput style={styles.textinput} value={web_site} onChangeText={text => setWeb_site(text)}   placeholder='Website'/>

      <Text >Adress</Text>
      <TextInput style={styles.textinput} value={adress} onChangeText={text => setAdress(text)}    placeholder='Adress'/>

       
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

export default OrganismeSignUp

const styles = StyleSheet.create({

card:{
    borderRadius:45,
    backgroundColor:'#e8f6ff',
    height:579,
    width:398,
    marginTop:1,
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

},
head:{
  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:33,
  marginBottom:15,
},
notif:{
  height:35,
  width:53,
  marginRight:20,
  
},
})