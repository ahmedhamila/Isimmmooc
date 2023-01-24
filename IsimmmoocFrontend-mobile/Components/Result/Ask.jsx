
import React from 'react';

import {Image ,ImageBackground,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-paper';

const Ask= ({navigation}) => {
  return (
    <View style={{alignItems:'center', backgroundColor:'#FFF',height:'100%'}}>
 
    <Card style={styles.body} >
    <View style={styles.bd}>
    <Card style={styles.cours} >
    <TouchableOpacity onPress={()=> navigation.navigate("QuizTest")} >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > Passer Test Final</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
    
    <Card style={styles.cours} >
    <TouchableOpacity onPress={()=> navigation.navigate("P1")} >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > retour HomePage</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
     </View>

     </Card>
     </View>
   

  )
}

export default Ask

const styles = StyleSheet.create({

body:{
        borderWidth:1,
        borderColor:'#000',
        borderRadius:55,
        backgroundColor:'#FFF',
        height:630,
        width:400,
        padding:7,
        marginTop:42,
        
},
cours:{
  
        borderWidth:1,
        borderRadius:13,
        backgroundColor:'#fff',
        height:100,
        width:340,
        marginTop:15,
        marginLeft:22,
        marginRight:7,

},
dbtn:{

    justifyContent:'space-between',
    flexDirection: "row",
    margin:7,
  }
,  


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
  
  }
,

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
    marginLeft:50,
    marginTop:11,
  
  },
  bd:{
    marginTop:160,

  }

})