
import React from 'react';

import {Image ,ImageBackground,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-paper';

const Niv= ({navigation}) => {
  return (
    <View style={{alignItems:'center', backgroundColor:'#FFF',height:'100%'}}>
    <View style={styles.head}>
    <TouchableOpacity>
    <Image source={require("../../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
    </TouchableOpacity>
    </View>
    <View >
  

     <Text  style={styles.txt1} >  Choisissez Votre Niveau </Text>
     
    <Card style={styles.cours} >
    <TouchableOpacity>
    <View style={styles.dbtn}>
    <Image  source={require("../../assets/images/1a.png")} style={styles.img}/>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > 1 ere annee</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>

    <Card style={styles.cours} >
    <TouchableOpacity>
    <View style={styles.dbtn}>
    <Image  source={require("../../assets/images/2a.png")} style={styles.img}/>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > 2 ere annee</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>

    <Card style={styles.cours} >
    <TouchableOpacity>
    <View style={styles.dbtn}>
    <Image  source={require("../../assets/images/3a.png")} style={styles.img}/>
    <View style={styles.infoCours}>
    <Text style={styles.Ctitle} > 3 ere annee</Text>
    </View>
    </View>
    </TouchableOpacity>
    </Card>


     </View>
     </View>
   

  )
}

export default Niv

const styles = StyleSheet.create({

head:{
        justifyContent:'space-between',
        flexDirection: "row",
        marginTop:25,
        marginBottom:10,
      },
    
cours:{
  
        borderWidth:1,
        borderRadius:13,
        backgroundColor:'#fff',
        height:100,
        width:340,
        marginTop:15,
        marginLeft:7,
        marginRight:7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },  shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
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
txt1:{

  fontSize:26,
  marginBottom:40,
  fontWeight:'bold',   
  margin:12,
  fontStyle:'italic',
  textAlign: "center",
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
  notif:{
    height:39,
    marginRight:337,
    
  },
  Ctitle:{
    margin:2,
    fontSize:23,
    textDecorationLine:"solid",
    fontWeight: "bold",
    textAlign: 'center',
    marginRight:50,
  
  },

})