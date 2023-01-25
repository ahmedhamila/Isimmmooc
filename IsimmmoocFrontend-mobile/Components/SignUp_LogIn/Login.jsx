import * as React from 'react';
import { useContext, useState } from 'react';
import {Text,View,FlatList,StyleSheet,ScrollView,TextInput,} from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity,Image } from 'react-native';

const Login = ({navigation}) => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  async function connecter(){
    let body = JSON.stringify({
      'username': mail,
      'password':password,
    })
    const response = await fetch(`http://192.168.56.1:8000/auth/`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:body
      })
      .catch(function(error) {
        console.log('There has been a problem with  fetch operation: ' + error.message);
        });
        const json = await response.json()

        if(json.token){

          let bd = JSON.stringify({
            'Token': json.token,
          })
          const responselog =  fetch('http://192.168.56.1:8000/users/User/getUser/',{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:bd
            })
            .catch(function(error) {
              console.log('There has been a problem with  fetch operation: ' + error.message);
              });

            if(responselog){
              navigation.navigate("Choose")
            }

        }else{
          console.log("bien pas")
        }
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
      <Text style={styles.pop} >Se Connecter</Text>
      <ScrollView style={styles.scrollView}>

        <Text >Email Address</Text>
        <TextInput style={styles.textinput} value={mail} onChangeText={text => setMail(text)}   placeholder='Email'/>

        <Text >Password</Text>
        <TextInput style={styles.textinput} value={password} onChangeText={text => setPassword(text)}   autoCompleteType="password"  placeholder='Password'/>

        <TouchableOpacity style={styles.btn} onPress={() => connecter()}>
          <Text style={styles.btntxt}>Se Connecter</Text>
        </TouchableOpacity>

      </ScrollView>
      </View>

      </Card>
    </View>
  )


}

export default Login

const styles = StyleSheet.create({

card:{
    borderRadius:45,
    backgroundColor:'#e8f6ff',
    height:575,
    width:398,
    marginTop:14,
    marginLeft:7,
    marginRight:7,
    borderWidth: 2,
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
},

scrollView:{
  marginHorizontal: 5,

},
textinput:{
  borderColor: '#000',
  width: 313,
  borderWidth: 2,
  borderRadius: 10,
  padding: 10,
  backgroundColor:'#FFF',
  marginBottom:60,
}
,
btn:{
backgroundColor:'#FFF',
borderRadius:20,
height:50,
width:160,
borderWidth:2,
textAlign:'center',
margin:35,
marginLeft:90,
marginTop:15,

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
notif:{
  marginTop:13,
  height:30,
  
},
head:{
  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:20,
 
},
})