
import React from 'react';

import {Image ,ImageBackground,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-paper';

const Choose= ({navigation}) => {
  return (
    <View style={{alignItems:'center', backgroundColor:'#FFF',height:'100%'}}>
 
    <Card style={styles.body} >
    <View style={styles.bd}>
    <Card style={styles.cours} >
    <TouchableOpacity onPress={()=> navigation.navigate("SearchCategorie")} >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > Un Apprenant</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
    
    <Card style={styles.cours} >
    <TouchableOpacity onPress={()=> navigation.navigate("Mescours")} >
    <View style={styles.dbtn}>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > Un Formateur</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>
     </View>

     </Card>
     </View>
   

  )
}

export default Choose

const styles = StyleSheet.create({

body:{
        borderWidth:1,
        borderColor:'#000',
        borderRadius:55,
        backgroundColor:'#FFF',
        height:600,
        width:390,
        padding:7,
        marginTop:62,
        
},
cours:{
  
        borderWidth:1,
        borderRadius:13,
        backgroundColor:'#fff',
        height:90,
        width:330,
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
    marginLeft:73,
    marginTop:12,
  
  },
  bd:{
    marginTop:160,

  }

})