
import React from 'react';

import {Image ,ImageBackground,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-paper';

const Ajouter= ({navigation}) => {
  return (
    <View style={{alignItems:'center', backgroundColor:'#FFF',height:'100%'}}>
     <TouchableOpacity  onPress={()=> navigation.navigate("Mescours")}>
          <Image source={require("../../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
      </TouchableOpacity>
    <Card style={styles.body} >

    <View style={styles.bd}>
    <Card style={styles.cours} >
    <TouchableOpacity >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} >  Ajouter  video</Text>
    <TouchableOpacity style={styles.conct} >
    <Text  style={styles.btntxt} >Ajouter</Text>
    </TouchableOpacity>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
    
    <Card style={styles.cours} >
    <TouchableOpacity  >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} >   Ajouter pdf </Text>
    <TouchableOpacity style={styles.conct} >
    <Text  style={styles.btntxt} >Ajouter</Text>
    </TouchableOpacity>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
    <Card style={styles.cours} >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} >   Description</Text>
    <TouchableOpacity style={styles.conct} >
    <Text  style={styles.btntxt} >Ajouter</Text>
    </TouchableOpacity>
    </View>
    </View>
    </Card>
    </View>
    </Card>
    </View>
   

  )
}

export default Ajouter

const styles = StyleSheet.create({

body:{
        borderWidth:1,
        borderColor:'#000',
        borderRadius:25,
        backgroundColor:'#FFF',
        height:600,
        width:390,
        padding:7,
        marginTop:12,    
},
cours:{
        borderWidth:1,
        borderRadius:12,
        backgroundColor:'#fff',
        height:160,
        width:330,
        marginTop:15,
        marginLeft:22,
        marginRight:7,

},
dbtn:{

    justifyContent:'space-between',
    flexDirection: "row",
    margin:7,
  },  

btn:{
  backgroundColor:'white',
  height:40,
  width:130,
  marginBottom:20,
  marginTop:10,
  marginLeft:10,
  borderRadius: 20,
  alignContent:'center',
  alignItems:'center',
  
},

infoCours:{
    justifyContent:'space-between',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    backgroundColor:Colors.white,
    height:'100%'
},

Ctitle:{
    margin:2,
    fontSize:23,
    textDecorationLine:"solid",
    fontWeight: "bold",
    textAlign: 'center',
    marginLeft:73,
    marginTop:12,
},

bd:{
    marginTop:18,

},

notif:{
    height:35,
    width:53,
    marginRight:345,
    marginTop:29,    
},
  
conct:{

  backgroundColor:'#84b9db',
  borderWidth:2,
  height:60,
  width:150,
  borderRadius:20,
  marginLeft:85,
  marginTop:15,

},
btntxt:{

  fontSize:20,
  fontWeight:'bold',   
  margin:12,
  fontStyle:'italic',
  textAlign: "center",
},


})