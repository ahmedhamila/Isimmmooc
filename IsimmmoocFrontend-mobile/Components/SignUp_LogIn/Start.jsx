import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { Image,TouchableOpacity} from 'react-native';

const Start = ({navigation}) => {
  return (
    <View style={{height:'100%',backgroundColor:'#FFF'}} >
      
      <View style={styles.head}>
      <TouchableOpacity  onPress={()=> navigation.navigate("Welcome")}>
      <Image source={require("../../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
      </TouchableOpacity>
      </View>

    <Card style={styles.body} >
   
    <Text style={styles.pop} >Creer un compte </Text>

    <View style={styles.si}>
    <Card style={styles.cours} >
    <TouchableOpacity>
    <Text  style={styles.txt} onPress={()=> navigation.navigate("FormateurSignUp")} >Formateur</Text>
    </TouchableOpacity>
    </Card>
    <Card style={styles.cours} >
    <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
    <Text  style={styles.txt} >Apprenant</Text>
    </TouchableOpacity>
    </Card>
    </View>

    <View style={styles.si1} >
    <Card style={styles.cours1} >
    <TouchableOpacity onPress={()=> navigation.navigate("OrganismeSignUp")}>
    <Text  style={styles.txt} >Organisme</Text>
    </TouchableOpacity>
    </Card>
    </View>
    
    <Text style={styles.pop1}>Vous avez deja un compte  </Text>
    <TouchableOpacity style={styles.conct} >
    <Text  style={styles.btntxt} onPress={()=> navigation.navigate("Login")}>Se Connecter</Text>
    </TouchableOpacity>
    
    </Card>
    </View>
  )
}

export default Start

const styles = StyleSheet.create({

body:{
    borderWidth:2,
    borderColor:'#000',
    borderRadius:55,
    backgroundColor:'#FFF',
    height:600,
    margin:19,
    marginTop:1,
    
},
conct:{
    backgroundColor:'#84b9db',
    borderWidth:2,
    height:60,
    width:150,
    borderRadius:20,
    marginLeft:120,

},
pop:{
    margin:16,
    marginTop:24,
    fontSize:20,
    textDecorationLine:"solid",
    fontWeight: "bold",
    textAlign: 'center',
    
},
pop1:{
    margin:20,
    marginTop:48,
    fontSize:16,
    textDecorationLine:"solid",
    textAlign: 'center',
    
},
cours:{
  
    borderWidth:2,
    borderColor:'#000',
    borderRadius:36,
    backgroundColor:'#fff',
    height:120,
    width:150,
    marginTop:15,
    marginLeft:7,
    marginRight:7,
},
cours1:{
  
    borderWidth:2,
    borderColor:'#000',
    borderRadius:1,
    borderRadius:36,
    backgroundColor:'#fff',
    height:120,
    width:150,
    marginTop:15,
    marginLeft:110,
    marginRight:7,
},
txt:{

    fontSize:20,
    marginTop:33,
    marginLeft:15,
    fontWeight:'bold',   
    margin:12,
    fontStyle:'italic',
    textAlign: "center",

},
btntxt:{

    fontSize:20,
    fontWeight:'bold',   
    margin:12,
    fontStyle:'italic',
    textAlign: "center",

},
si:{
  justifyContent:'space-between',
  flexDirection: "row",
  padding:10,

},
si1:{
    justifyContent:'center',
    padding:10,
  
  },
  
notif:{
    height:35,
    width:53,
    marginRight:20,
    
},
    
head:{
    justifyContent:'space-between',
    flexDirection: "row",
    marginTop:33,
    marginBottom:15,
},


})