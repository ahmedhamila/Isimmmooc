import {Text,View,FlatList,StyleSheet} from 'react-native';
import React from 'react';
import {
    Image,
    TextInput
} from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contact = () => {
   
    return (
        <View
        style={{
            flex:1,
            backgroundColor:'#A9CCE3',
        }}>

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
    borderTopLeftRadius:105,
    backgroundColor:'#fff',
    height:480,
    width:398,
    marginTop:45,
    marginLeft:7,
    marginRight:7,
    
    }
    ,

    txt:{
        fontSize:23,
        marginTop:5,
        marginLeft:66,
        fontWeight:'bold',  
        
    }
    ,

    socialM:{
        borderRadius:18,
        backgroundColor:'#fff',
        height:73,
        width:398,
        marginTop:17,
        marginBottom:17,
        marginLeft:7,
        marginRight:7,
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center',
        }
        ,

        img1:{

            margin:15,
            height:55,
            width:55,
            

        }
        ,si:{
            justifyContent:'space-between',
            flexDirection: "row",
            padding:26,
          
          }
          ,

          send:{
            width:90,
            borderRadius:130,
            backgroundColor:'#fff',

          }
          ,
          finish:{

            width:145,
            height:40,
            backgroundColor:'#A9CCE3',
            borderRadius:70,
            justifyContent: "center",
            marginHorizontal:9,
            marginTop:50,
        
            
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
          }
          ,
          in:{
            padding:19,
            borderBottomWidth:3,
            borderBottomColor:'#A9CCE3',
            width:280,
            marginLeft:50,
            marginTop:15,

          }
    })