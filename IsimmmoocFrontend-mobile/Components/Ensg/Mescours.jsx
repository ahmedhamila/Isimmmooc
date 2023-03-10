import {Image ,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';


const Mescours = ({navigation}) => {
  
const [courses,setCourses]=useState([
  {name:"Cours developement Web",image:require("../../assets/images/comp.jpg"),
  rate:require("../../assets/images/3s.png")},
  {name:"Cours Mathematique", image:require("../../assets/images/alg.jpg"),
  rate:require("../../assets/images/4.png")},
  {name:"Cours devp Mobile", image:require("../../assets/images/mob.jpg"),
  rate:require("../../assets/images/5.png")},
  {name:"Cours Anal Donnees", image:require("../../assets/images/stat.jpg"),
   rate:require("../../assets/images/4.png")
  },
]);

const dat=({item})=>(
<Card style={styles.cours} >
<View style={styles.dbtn}>
<Image  source={item.image} style={styles.img}/>
<View style={styles.infoCours}>
<Text style={styles.Ctitle} > {item.name}</Text>
<TouchableOpacity  style={styles.btnCours}
onPress={()=> navigation.navigate('Mescours')}>
<Text  style={styles.txtbtnCours}>Modifier</Text></TouchableOpacity>
</View>
</View>
</Card>
);


return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>



<Card style={styles.card} >
<View >

<Text style={styles.pop} >Mes cours</Text>

<FlatList
  data={courses}
  renderItem={dat} 
/>
</View>
</Card>

<TouchableOpacity  style={styles.body}
onPress={()=> navigation.navigate('Ajouter')}>
<Text  style={styles.txtbtnajout}>Ajouter un cours</Text></TouchableOpacity>

</View>

  )
}

export default Mescours

const styles = StyleSheet.create({


body:{
  borderWidth:1.5,
  borderColor:'#000',
  borderRadius:11,
  backgroundColor:'#e8f6ff',
  height:70,
  width:390,
  padding:3,
  margin:10,
  marginTop:5, 
  padding:7,   
},

  
infoCours:{
    justifyContent:'space-between',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    margin:29,
},
  
scroll:{
  width:250,
  height:160,
  resizeMode:'contain',
  margin:8,
  marginBottom:42,
  borderRadius:20,
  
},

pop:{
margin:12,
fontSize:28,
textDecorationLine:"solid",
fontWeight: "bold",
textAlign: 'center',

},

Ctitle:{
  margin:2,
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',

},

img:{
    margin:2,
    height:125,
    width:125,
    borderRadius:20,
    },

dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  margin:7,
},

btnajout:{
  borderWidth:2,
  backgroundColor:'#FFF',
  borderRadius:13,
  marginTop:0,
  height:55,
  width:180,
  marginLeft:120,
},

btnCours:{
  borderWidth:1,
  backgroundColor:'#A9CCE3',
  borderRadius:30,
  marginTop:8,
  height:50,
  width:120,
 
},

txtbtnajout:{

  fontSize:20,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:11,
  
},
txtbtnCours:{

  fontSize:17,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:11,
  
},

card:{
  borderWidth:1.5,
  borderTopLeftRadius:25,
  borderTopRightRadius:25,
  backgroundColor:'#e8f6ff',
  height:580,
  width:395,
  marginTop:35,
  marginRight:7,
  marginBottom:7,
  marginLeft:7,
  alignItems: 'center',

},

cours:{
  
  borderWidth:1,
  borderRadius:13,
  backgroundColor:'#fff',
  height:140,
  width:380,
  marginTop:10,
  marginLeft:7,
  marginRight:7,
  marginBottom:7,

},

})