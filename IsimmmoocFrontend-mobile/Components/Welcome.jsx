import {Image ,ImageBackground,StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useState } from "react";
import SearchCategorie from './SearchCategorie';
import { Card } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OrganismeSignUp from './Organisme_SignUP';
import SignUp from './SignUp';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FormateurSignUp from './Formateur_SignUp';




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
<TouchableOpacity  style={styles.btnCours}
onPress={()=> navigation.navigate("Login")}>
<Text  style={styles.txtbtnCours}>Commencer</Text></TouchableOpacity>
<Image  source={item.rate} style={styles.rate}/>
</View>
</View>
</Card>

  );


  return (
    <View  style={{height:'100%',backgroundColor:'#FFF'}}>


<View style={styles.head}>
      <Text style={styles.headtxt}>Isimmmooc</Text>
      <Image source={require("../assets/images/notification.png")} style={styles.notif}  resizeMode="contain" />
</View>
<Card style={styles.body} >
<Text style={styles.welc1}>       Une   infinite  des  cours  avec </Text>
<Text style={styles.welc}>                   un  seul    click ! </Text>
<View style={styles.centerbtn}>
<TouchableOpacity  style={styles.btn}
onPress={()=> navigation.navigate("Login")}>
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
  }
,scroll:{
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

}
,
nottxt:{
fontSize:22,
marginTop:29,
marginLeft:9,
textDecorationLine:"solid",

}
,
notif:{
height:35,
width:53,
marginRight:20,

  }
  ,
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
  borderTopRightRadius:65,
  borderTopLeftRadius:65,
  backgroundColor:'#ebf4fa',
},
card:{
  borderTopRightRadius:55,
  borderTopLeftRadius:55,
  backgroundColor:'#e8f6ff',
  height:400,
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