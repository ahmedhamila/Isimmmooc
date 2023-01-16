import {Image ,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View >
      <Text style={styles.st}>    Bienvenue sur</Text>
      <Text style={styles.st1}  >                        Isimmmoc </Text>
     
      <Image   source={require('../assets/images/work.png')}
        style={styles.sm}
        resizeMode="contain"
        ></Image>
        
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



})

export default Splash;