import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import CountDown from 'react-native-countdown-component';
import Animation from 'lottie-react-native';

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
      autoPlay loop/>

<CountDown
size={0}
until={7}
onFinish={()=> navigation.navigate("Start")}
showSeparator
timeToShow={['S']}
timeLabels={{s:''}}
/>
 
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

})