import {Image ,ImageBackground,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";
import Splash from './Splash';
import SearchCategorie from './SearchCategorie';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Welcome = ({navigation}) => {
  

const courses=[
 
  ];



const course=({item})=>{

<Text>{item.name}</Text>

}



  return (
    <View  style={{backgroundColor:Colors.white, height:'100%'}}>
      <View style={styles.mid1}>
      <Text style={styles.nottxt}>Isimmmooc</Text>
      <Image source={require("../assets/icons/notification.png")} style={styles.notif}  resizeMode="contain" />
      </View>
    
    <View  style={styles.si}>
     
      <Text style={styles.bg_text}>Une infinite des cours avec </Text>

      <View  style={styles.mid}>
      <Text style={styles.bg_text1}>un seul click . </Text>
      <Image  source={require("../assets/images/portable.png")}   style={styles.icon}/> 
      </View>
      
      
      <TouchableOpacity  style={styles.btn}
      
        onPress={()=> navigation.navigate('Log')}
       ><Text  style={styles.btnText}   
      >Commencer ici</Text></TouchableOpacity>
         
    </View>
        
    <Text style={styles.pop} >Cours plus populaire </Text>

   <SafeAreaView>
    <FlatList
    horizontal={true} 

    showsHorizontalScrollIndicator={false} 
   
    data={courses}
    renderItem={ course} 
    ListEmptyComponent={<Text>Liste encore Vide</Text>}

  />

</SafeAreaView>

    </View>

  )
}

export default Welcome

const styles = StyleSheet.create({
scroll:{
  width:250,
  height:160,
  resizeMode:'contain',
  margin:8,
  marginBottom:42,
  borderRadius:20,
},

pop:{
margin:18,
fontSize:20,
textDecorationLine:"solid",
fontWeight: "bold",

},
nottxt:{
fontSize:22,
marginTop:9,
marginLeft:9,
textDecorationLine:"solid",

}
,
notif:{
height:35,
width:53,
marginRight:20,

  }
  ,

mid:{

  justifyContent:'space-between',
  flexDirection: "row",

},
mid1:{

  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:20,
  padding:5

}
,
bg:{
height:270,
width:349,
borderRadius:20,
marginVertical:20,
resizeMode:'contain',

}
,

star:{
  height:20,
  width:39,


}
,
st1:{
    justifyContent:'center',
    paddingBottom:92,
    paddingTop:20,
    fontSize:35,
    textDecorationLine:"solid",
    fontWeight: "bold",


},

foot:{
paddingBottom:10,

},

st:{
justifyContent:'center',
paddingTop:80,
fontSize:35,
textDecorationLine:"solid",
fontWeight: "bold",

},
sm:{
    height:320,
    width:370,
    marginTop:60,
    marginBottom:10,


}
,
si:{
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:34,
    backgroundColor:'#A9CCE3',
}
,
bg_text:{

  fontSize:25,
  marginTop:20,
  textDecorationLine:"solid",
  fontWeight: "bold",
  padding:10,
  
}

,
bg_text1:{

  fontSize:27,
 
  textDecorationLine:"solid",
  fontWeight: "bold",
  paddingLeft:10,
  marginTop:29,

}
,
btn:{
  
backgroundColor:Colors.white,
height:40,
width:130,
marginBottom:20,
marginTop:20,
marginLeft:0,
borderRadius: 20,
marginRight:170,

}
,
btnText:{

  fontSize:15,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:7,

}
,

icon:{
marginRight:15,
marginTop:15,

}
,



})