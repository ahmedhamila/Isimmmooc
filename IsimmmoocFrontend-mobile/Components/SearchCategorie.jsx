
import React from 'react';

import {Image ,StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-paper';

const SearchCategorie = ({navigation}) => {
  return (
    <View style={{backgroundColor:Colors.white,height:'100%'}}>

     <Text  style={styles.txt1} >  Choisissez une Categorie </Text>
     
     <View style={styles.si}>
     <Card style={styles.cours} >
     <TouchableOpacity  onPress={()=> navigation.navigate("NivP")}>
     <Image  source={require("../assets/images/prep.png")} style={styles.icon}/>
     <Text  style={styles.txt} >Prepa</Text>
     </TouchableOpacity>
     </Card>
     <Card style={styles.cours} >
     <TouchableOpacity>
     <Image  source={require("../assets/images/lic.png")} style={styles.icon}/>
     <Text  style={styles.txt} >Licence</Text>
     </TouchableOpacity>
     </Card>
     </View>

     <View style={styles.si}>
     <Card style={styles.cours} >
     <TouchableOpacity>
     <Image  source={require("../assets/images/ing.png")} style={styles.icon}/>
     <Text  style={styles.txt} >Ingénierie</Text>
     </TouchableOpacity>
     </Card>
     <Card style={styles.cours} >
     <TouchableOpacity>
     <Image  source={require("../assets/images/mast.png")} style={styles.icon}/>
     <Text  style={styles.txt} >Master</Text>
     </TouchableOpacity>
     </Card>
     </View>

    </View>

  )
}

export default SearchCategorie

const styles = StyleSheet.create({

cours:{
  
  borderWidth:1,
  borderRadius:1,
  borderTopRightRadius:36,
  borderBottomLeftRadius:36,
  backgroundColor:'#fff',
  height:140,
  width:180,
  marginTop:15,
  marginLeft:7,
  marginRight:7,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: 24,
},


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
  alignContent:'center',
  alignItems:'center',
  
  }
,
txt1:{

  fontSize:26,
  marginTop:68,
  marginBottom:50,
  marginLeft:15,
  fontWeight:'bold',   
  margin:12,
  fontStyle:'italic',
  textAlign: "center",

}
,
txt:{

    fontSize:26,
    marginTop:18,
    marginLeft:15,
    fontWeight:'bold',   
    margin:12,
    fontStyle:'italic',
    textAlign: "center",

}
,
icon:{
marginTop:7,
marginLeft:51,
}
})