import {Image ,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";

import { TouchableOpacity } from 'react-native';

const Notif = ({navigation}) => {
  

const [courses,setCourses]=useState([

  {date:"19-01-2023",image:require("../assets/images/1.png"),qui:"admin",des:"bonjour"},
  {date:"15-01-2023",image:require("../assets/images/3.png"),qui:"Ensg",des:"Hi"},
  {date:"08-01-2023",image:require("../assets/images/2.png"),qui:"Etud",des:"bienvenue"},
  {date:"07-01-2023",image:require("../assets/images/1.png"),qui:"Class",des:"Nouveau Cours"},
  {date:"06-01-2023",image:require("../assets/images/3.png"),qui:"admin",des:"bonjour"},
  {date:"05-01-2023",image:require("../assets/images/1.png"),qui:"Ensg 2",des:"Hello"},
  {date:"03-01-2023",image:require("../assets/images/3.png"),qui:"Etud 1",des:"hi"},
  {date:"24-12-2022",image:require("../assets/images/2.png"),qui:"admin",des:"mise a jour"},

]);

  const dat=({item})=>(
<View>
<View style={styles.dbtn}>
<Image  source={item.image} style={styles.img}/>
<View style={styles.infoCours}>
<View style={styles.dbtn}>
<Text style={styles.qui} > {item.qui}</Text>
<Text style={styles.date} > {item.date}</Text>
</View>
<Text style={styles.Ctitle} > {item.des}</Text>
</View>
</View>
<View style={styles.sep} ></View>
</View>

  );

  return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>

      <View style={styles.head}>
      <TouchableOpacity  onPress={()=> navigation.navigate("Welcome")}>
      <Image source={require("../assets/images/back.png")} style={styles.notif}  resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.headtxt}>Notification</Text>
      </View>


<FlatList
  data={courses}
  renderItem={dat} 
/>

    </View>

  )
}

export default Notif

const styles = StyleSheet.create({

  date:{

    fontSize:16,
    fontStyle:'italic',
    
  },
  qui:{

    fontSize:18,
    marginRight:33,
  },

  headtxt:{
    fontSize:28,
    marginRight:120,
    textDecorationLine:"solid",
    fontStyle:'italic',
    fontWeight: "bold",
    
    }
    ,
  head:{
    justifyContent:'space-between',
    flexDirection: "row",
    marginTop:33,
    marginBottom:15,
  },
  
  infoCours:{
    justifyContent:'space-between',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    margin:29,
  },
  

Ctitle:{
  margin:2,
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',

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
    borderRadius:60,
    }
  ,

dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  margin:7,
},

sep:{

  borderWidth:1,
  backgroundColor:'#000',
  width:400,
  margin:3,
},



})