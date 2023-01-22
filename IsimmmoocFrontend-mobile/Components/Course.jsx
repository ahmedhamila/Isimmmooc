import React, { useState } from 'react';

import {Text,View,FlatList,StyleSheet,ScrollView,} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity} from 'react-native';

const Course = () => {
  const [status, setStatus] = React.useState({});
  return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>
   <Text style={styles.Ctitle} > Cours 1 : Chapitre 3 </Text>
       <Video
       style={styles.video}
        source={require( '../assets/video/video.mp4')}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.dbtn}>
      <TouchableOpacity style={styles.finish}><Text style={styles.textf}> Precedent </Text></TouchableOpacity>
      <TouchableOpacity style={styles.finish}><Text style={styles.textf}> Suivant </Text></TouchableOpacity>
      </View>
      <Text style={styles.Ct} > Description Cours :</Text>
      <Text style={styles.Cdes}>Rain is liquid precipitation: water falling from the sky. Raindrops fall to Earth when clouds become saturated, or filled, with water droplets.</Text>

      <View style={styles.tel}>
      <TouchableOpacity style={styles.telch}><Text style={styles.textf}> Telecharger Pdf  📑</Text></TouchableOpacity>
      </View>
    </View>
  )


}

export default Course

const styles = StyleSheet.create({

video:{
height:280,
width:415,
}
,
finish:{
  borderWidth:1,
  width:145,
  height:45,
  backgroundColor:'#A9CCE3',
  borderRadius:70,
  justifyContent: "center",
  marginHorizontal:9,
},

telch:{
  borderWidth:1,
  width:175,
  height:50,
  backgroundColor:'#A9CCE3',
  borderRadius:70,
  justifyContent: "center",
  marginBottom:20,
  
},
textf:{
  fontSize:19,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',
 
},

Ctitle:{
  margin:8,
  marginTop:41,
  fontSize:19,
  textDecorationLine:"solid",
  fontWeight: "bold",
},

Ct:{
  margin:8,
  marginTop:15,
  marginBottom:6,
  fontSize:19,
  textDecorationLine:"solid",
  fontWeight: "bold",
},
Cdes:{
  margin:10,
  marginTop:7,
  fontSize:17,
  textDecorationLine:"solid",
 
},

dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:20,
  
},

tel:{

  justifyContent:"center",
  marginTop:23,
  alignItems:"center",
  alignContent:"center",
  
},
})