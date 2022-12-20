
import React from 'react';

import {Image ,ImageBackground,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SearchCategorie = () => {
  return (
    <View style={{backgroundColor:Colors.white,height:'100%'}}>
     
      
      <Text style={styles.Vtxt}>Choisir Categories</Text>

      
      <View style={styles.si}>
      <View style={styles.one}>
        <TouchableOpacity Style={styles.btn}><Text style={styles.txt}> Licence</Text></TouchableOpacity>
        <Image  source={require("../assets/images/school.png")} style={styles.img}/>
        </View>

        <View style={styles.one}>
        <TouchableOpacity  Style={styles.btn}><Text  style={styles.txt} > Prepa</Text></TouchableOpacity>
        
        <Image  source={require("../assets/images/education.png")} style={styles.img}/>
        </View>

      </View>

      <View  style={styles.si}>

      <View style={styles.one}>
          <TouchableOpacity Style={styles.btn} ><Text style={styles.txt}>Ingenieure</Text></TouchableOpacity>
          <Image  source={require("../assets/images/office.png")} style={styles.img}/>
      </View>
      
      <View style={styles.one}>
        <TouchableOpacity Style={styles.btn} ><Text  style={styles.txt} >Master</Text></TouchableOpacity>
        <Image  source={require("../assets/images/supp.png")} style={styles.img}/>
        </View>

      </View>

    </View>

  )
}

export default SearchCategorie

const styles = StyleSheet.create({

Vtxt:{

  margin:40,
  fontSize:23,
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",

}
,

one:{
width:183,
backgroundColor:'#A9CCE3',
borderRadius:30,
height:220,
alignItems:'center',

}

,
si:{
  justifyContent:'space-between',
  flexDirection: "row",
  padding:10,

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
  
  }
,
txt:{
  marginTop:20,
  fontSize:21,
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",

}
,
img:{
marginTop:50,
height:90,
width:90,
}
})