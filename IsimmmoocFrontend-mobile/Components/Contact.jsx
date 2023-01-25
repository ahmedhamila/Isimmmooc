import {Text,View,FlatList,StyleSheet} from 'react-native';
import React from 'react';
import {
    Image,
    TextInput
} from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contact = ({navigation}) => {
   
    return (
        <View style={{flex:1,backgroundColor:'#A9CCE3',}}>
          
          <TouchableOpacity  onPress={()=> navigation.navigate("Welcome")}>
          <Image source={require("../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
          </TouchableOpacity>

        <Card style={styles.card}>

        <Card  style={styles.send}>
        <TouchableOpacity ><Image  source={require("../assets/images/send.png")} style={styles.img1}/></TouchableOpacity>  
        </Card>
            
            <Text  style={styles.txt}   >Nous Envoyer un message</Text>
            
            <TextInput  style={styles.in}  placeholder="Nom" />

            <TextInput  style={styles.in}  placeholder="Message" />

            <TextInput  style={styles.in}  placeholder="Email" />
            
        </Card>  

        <Card style={styles.socialM}>
        
        <View style={styles.si}>
        <TouchableOpacity ><Image  source={require("../assets/images/instagram.png")} style={styles.img1}/></TouchableOpacity>

        <TouchableOpacity ><Image  source={require("../assets/images/facebook.png")} style={styles.img1}/></TouchableOpacity>  

        <TouchableOpacity ><Image  source={require("../assets/images/youtube.png")} style={styles.img1}/></TouchableOpacity>  

        <TouchableOpacity ><Image  source={require("../assets/images/linkedin.png")} style={styles.img1}/></TouchableOpacity>  

        </View>
        </Card>  


        </View>
    )
}


export default Contact;


const styles = StyleSheet.create({


card:{
    borderWidth:1,
    borderTopLeftRadius:105,
    backgroundColor:'#fff',
    height:480,
    width:398,
    marginTop:22,
    marginLeft:7,
    marginRight:7,
},

txt:{
        fontSize:23,
        marginTop:5,
        marginLeft:66,
        fontWeight:'bold',          
},

socialM:{
      borderWidth:1,
        borderRadius:18,
        backgroundColor:'#fff',
        height:73,
        width:398,
        marginTop:25,
        marginBottom:17,
        marginLeft:7,
        marginRight:7,
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center',
},

img1:{
            margin:15,
            height:55,
            width:55, 
},
si:{
      justifyContent:'space-between',
            flexDirection: "row",
            padding:26,
},

send:{
            borderWidth:1,
            width:90,
            borderRadius:130,
            backgroundColor:'#fff',

},

        
textf:{
            fontSize:19,
            textDecorationLine:"solid",
            fontWeight: "bold",
            textAlign: 'center',
           
},

Vb:{

            justifyContent: "center",
            alignItems:'center',
},

in:{
  padding:19,
  borderBottomWidth:3,
  borderBottomColor:'#A9CCE3',
  width:280,
  marginLeft:50,
  marginTop:15,

},
          
bot:{
  borderWidth:1,
    borderRadius:18,
    backgroundColor:'#fff',
    height:64,
    width:398,
    marginTop:9,
    marginBottom:17,
    marginLeft:6,
    marginRight:2,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    }
    ,
sb:{
      justifyContent:'space-between',
      flexDirection: "row",
      padding:26,
    
    }
    ,

img2:{

      margin:36,
      height:43,
      width:43, 

},
notif:{
    height:35,
    width:53,
    marginRight:20,
    marginTop:40,
    
},
    
    })