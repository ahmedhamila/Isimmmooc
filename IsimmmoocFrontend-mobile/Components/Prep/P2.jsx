import {Image ,ImageBackground,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";

import { Card } from 'react-native-paper';

import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Teachers from '../Teachers';

const P2 = ({navigation}) => {
  

const [courses,setCourses]=useState([
    {name:"Cours Algebre", image:require("../../assets/images/alg.jpg"),
    rate:require("../../assets/images/4.png")
   },
  {name:"Cours programmation c",image:require("../../assets/images/prc.jpg"),
  rate:require("../../assets/images/5.png")},
  {name:"Cours python", image:require("../../assets/images/net.jpg"),
  rate:require("../../assets/images/4.png")},
  {name:"Cours Analyse", image:require("../../assets/images/mt.jpg"),
  rate:require("../../assets/images/0.png")},
 
]);

  const dat=({item})=>(

<Card style={styles.cours} >
<View style={styles.dbtn}>
<Image  source={item.image} style={styles.img}/>
<View style={styles.infoCours}>
<Text style={styles.Ctitle} > {item.name}</Text>
<TouchableOpacity  style={styles.btnCours}
onPress={()=> navigation.navigate('Teachers')}>
<Text  style={styles.txtbtnCours}>Commencer</Text></TouchableOpacity>
<Image  source={item.rate} style={styles.rate}/>
</View>
</View>
</Card>

  );



  return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>


<View style={styles.head}>
    <TouchableOpacity>
      <Image source={require("../../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
    </TouchableOpacity>
</View>

<View style={styles.centerbtn}>

</View>

<Card style={styles.card} >
<View styles={styles.Conttitle}>

<Text style={styles.pop} >Cours Prepa 2 </Text>

<FlatList
  data={courses}
  renderItem={dat} 
/>

</View>
</Card>


    </View>

  )
}

export default P2

const styles = StyleSheet.create({
  centerbtn:{
    alignItems:'center', 
  },
  welc1:{

    fontSize:25,
    textDecorationLine:"solid",
    fontWeight: '400',
    marginTop:6,
    fontStyle:'italic',
    fontWeight: "bold",

    
  },
  welc:{

    fontSize:25,
    textDecorationLine:"solid",
    fontWeight: '400',
    margin:7,
    fontStyle:'italic',
    fontWeight: "bold",
    
  },
  notif:{
    marginTop:19,
    
  },

  headtxt:{
    fontSize:27,
    marginTop:9,
    marginLeft:9,
    textDecorationLine:"solid",
    
    }
    ,
  head:{
    justifyContent:'space-between',
    flexDirection: "row",
    marginTop:25,
    marginBottom:10,
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

nottxt:{
fontSize:22,
marginTop:29,
marginLeft:9,
textDecorationLine:"solid",

},

notif:{
height:35,
width:53,
marginRight:20,

  },

img:{
    margin:2,
    height:125,
    width:125,
    borderRadius:20,
    }
  ,
rate:{

  width:92,
  marginBottom:43,

},

dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  margin:7,
}

,
btn:{
  borderWidth:1,
  backgroundColor:'#84b9db',
  borderRadius:30,
  height:50,
  width:180,
  marginBottom:12,
  marginTop:17,
  borderRadius: 26,

}
,
btnCours:{
  borderWidth:1,
  backgroundColor:'#A9CCE3',
  borderRadius:30,
  marginTop:8,
}
,
btnText:{

  fontSize:19,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:9,
 
},
txtbtnCours:{

  fontSize:17,
  color:'black',
  textDecorationLine:"solid",
  fontWeight: "bold",
  alignItems:'center',
  textAlign: "center",
  padding:11,

  
}
,

icon:{
marginRight:15,
marginTop:15,

}
,
body:{
  borderWidth:1,
  borderTopRightRadius:65,
  borderTopLeftRadius:65,
  backgroundColor:'#FFF',
},
title:{
    borderWidth:1,
    height:70,
    width:170,
    alignItems:'center',
    backgroundColor:'#FFFF',
    borderRadius:27,
},
card:{
  borderWidth:1,
  borderTopRightRadius:55,
  borderTopLeftRadius:55,
  backgroundColor:'#e8f6ff',
  height:550,
  width:400,
  marginTop:2,
  marginLeft:7,
  marginRight:7,
  marginBottom:37,
  alignItems: 'center',
  
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,

  }
  ,
cours:{
  
  borderWidth:1,
  borderRadius:13,
  backgroundColor:'#fff',
  height:140,
  width:380,
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

    Conttitle:{
  
      justifyContent: 'center',
      alignItems: 'center',
    }

})