import {Image ,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import Animation from 'lottie-react-native';
const Welcome = ({navigation}) => {
  

const [courses,setCourses]=useState([

  {name:"Cours developement Web",image:require("../assets/images/comp.jpg"),
  rate:require("../assets/images/5.png")},
  {name:"Cours Electronique", image:require("../assets/images/e.jpg"),
  rate:require("../assets/images/4.png")},
  {name:"Cours Designe", image:require("../assets/images/d.jpg"),
  rate:require("../assets/images/5.png")},
  {name:"Cours Mathematique", image:require("../assets/images/m.jpg"),
   rate:require("../assets/images/4.png")
  },
]);

const dat=({item})=>(

<Card style={styles.cours} >
<View style={styles.dbtn}>
<Image  source={item.image} style={styles.img}/>

<View style={styles.infoCours}>
<Text style={styles.Ctitle} > {item.name}</Text>
<TouchableOpacity  style={styles.btnCours} onPress={()=> navigation.navigate("Start")}>
<Text  style={styles.txtbtnCours}>Commencer</Text></TouchableOpacity>

<View style={styles.dbtn}>
<Animation
      style={{
        height: 45,
        width: 35,
        padding: 0,
        marginTop: 7,
        marginRight:19,
        marginBottom:15,
      }}
      source={ require("../assets/animation/heart.json")}
      autoPlay loop
    />

<Image  source={item.rate} style={styles.rate}/>
</View>

</View>
</View>
</Card>
  );

  return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>

<View style={styles.head}>
      <Text style={styles.headtxt}>Isimmmooc</Text>
      <TouchableOpacity  onPress={()=> navigation.navigate("Notif")}>
      <Image source={require("../assets/images/notification.png")} style={styles.notif}  resizeMode="contain" />
      </TouchableOpacity>
</View>
<Card style={styles.body} >
<Text style={styles.welc1}>     Une   infinite  des  cours  avec </Text>
<Text style={styles.welc}>                   un  seul    click ! </Text>
<View style={styles.centerbtn}>
<TouchableOpacity  
onPress={()=> navigation.navigate("Start")} style={styles.btn}  >
<Text  style={styles.btnText}>Commencer ici</Text>
</TouchableOpacity>
</View>

<Card style={styles.card} >
<View styles={styles.Conttitle}>
<Text style={styles.pop} >Cours plus populaire </Text>

<FlatList
  data={courses}
  renderItem={dat} 
/>
</View>
</Card>
        <Card style={styles.bot}>
        <View style={styles.sb}>
        <TouchableOpacity onPress={()=> navigation.navigate("Welcome")} ><Image  source={require("../assets/images/home.png")} style={styles.img2}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Teachers")}><Image  source={require("../assets/images/teacher.png")} style={styles.img2}/></TouchableOpacity>  
        <TouchableOpacity onPress={()=> navigation.navigate("Contact")}><Image  source={require("../assets/images/email.png")} style={styles.img2}/></TouchableOpacity>  
        </View>
        </Card> 
</Card>
    </View>

  )
}

export default Welcome

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
    marginBottom:0,
    fontStyle:'italic',
    fontWeight: "bold",
    
  },
  notif:{
    marginTop:9,
    
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
    marginTop:18,
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
  
  scroll:{
  width:250,
  height:160,
  resizeMode:'contain',
  margin:8,
  marginBottom:42,
  borderRadius:20,
  
},

pop:{
margin:16,
fontSize:20,
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
  paddingBottom:12,
  paddingTop:4,
  paddingLeft:5,
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

  
},

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
card:{
  borderWidth:1,
  borderTopRightRadius:55,
  borderTopLeftRadius:55,
  backgroundColor:'#e8f6ff',
  height:380,
  width:400,
  marginTop:2,
  marginLeft:7,
  marginRight:7,
  marginBottom:3,
  alignItems: 'center',
  },

cours:{
  
  borderWidth:1,
  borderRadius:13,
  backgroundColor:'#fff',
  height:140,
  width:380,
  marginBottom:6,
  marginTop:12,
  marginLeft:7,
  marginRight:7,
 
},

Conttitle:{
      justifyContent: 'center',
      alignItems: 'center',
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
    },

sb:{
      justifyContent:'space-between',
      flexDirection: "row",
      padding:26,
    
    },

img2:{
      margin:36,
      height:43,
      width:43, 
}

})