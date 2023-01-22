import {Image ,StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Splash = () => {
  return (
    <View style={{height:'100%',backgroundColor:'#FFF'}}>
  
      <Lottie  source={ require("../assets/edu.json")} autoPlay loop  styles={styles.lot} />
      <Text style={styles.st}>    Bienvenue sur</Text>
      <Text style={styles.st1}  >                        Isimmmooc </Text>
     
        
    </View>
  )
}


const styles = StyleSheet.create({

st1:{
    justifyContent:'center',
    paddingBottom:92,
    paddingTop:20,
    fontSize:35,
    textDecorationLine:"solid",
    fontWeight: "bold",
  

},

st:{
justifyContent:'center',
paddingTop:80,
fontSize:35,
textDecorationLine:"solid",
fontWeight: "bold",


},
sm:{

    justifyContent:'center',
    height:100,
    width:100,
    paddingLeft:460,
    paddingTop:160,
    paddingBottom:160,
    

}
,
si:{
    justifyContent:'center',

}
,
lot:{
  height:50,
  width:50,
  margin:3,
  }

})

export default Splash;