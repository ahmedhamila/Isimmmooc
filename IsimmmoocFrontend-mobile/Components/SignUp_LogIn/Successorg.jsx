import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component';
import Animation from 'lottie-react-native';
import { Image,TouchableOpacity } from 'react-native';


const Successorg = ({navigation}) => {
  return (
    <View style={{height:'100%',backgroundColor:'#FFF'}}>
     <Text style={styles.st}> Creation Terminee avec </Text>
     <Text style={styles.st1}>    Success </Text>
     <Animation
      style={{
        height: 200,
        width: 200,
        padding: 0,
        marginLeft:50,
        marginTop:35,
      }}
      source={ require("../../assets/animation/celeb.json")}
      autoPlay loop
    />
    <TouchableOpacity onPress={()=> navigation.navigate("Welcome")}  style={styles.conct} >
    <Text  style={styles.btntxt} >Quitter</Text></TouchableOpacity>
  </View>
  )
}

export default Successorg

const styles = StyleSheet.create({

st:{
    justifyContent:'center',
    fontSize:30,
    fontStyle:'italic',
    fontWeight: "bold",
    marginTop:60,
    marginLeft:39,

},
st1:{
    justifyContent:'center',
    fontSize:30,
    fontStyle:'italic',
    fontWeight: "bold",
    marginTop:10,
    marginLeft:100,

},
conct:{

  backgroundColor:'#FFFF',
  borderWidth:1.5,
  height:55,
  width:150,
  borderRadius:10,
  marginLeft:140,
  marginTop:120,

},
btntxt:{

  fontSize:20,
  fontWeight:'bold',   
  margin:12,
  fontStyle:'italic',
  textAlign: "center",
},


})