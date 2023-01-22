import {Image,Text,View,FlatList,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const Teachers = () => {

    const [Teachers,setTeachers]=useState([

  {name:" Mss Ensg", image:require("../assets/images/3.png"),
   grade:"Grade : grade ",
   depa:"Departement : depart"
  },
  {name:" Mr Ensg", image:require("../assets/images/1.png"),
  grade:"Grade : grade ",
  depa:"Departement : depart"
 },
 {name:" Mr Ensg", image:require("../assets/images/2.png"),
 grade:"Grade : grade ",
 depa:"Departement : depart"
},
{name:" Mss Ensg", image:require("../assets/images/3.png"),
grade:"Grade : grade ",
depa:"Departement : depart"
},
{name:" Mr Ensg", image:require("../assets/images/1.png"),
grade:"Grade : grade ",
depa:"Departement : depart"
},
{name:" Mr Ensg", image:require("../assets/images/2.png"),
 grade:"Grade : grade ",
 depa:"Departement : depart"
},
    ]);


    {/*
    useEffect(()=>{

      fetch('http://127.0.0.1:8000/users/Comite/',{

      method:"GET"

      })
      .then(resp=>resp.json())
      .then(data=>{
          setData(data)
      })
      .catch(error=>console.log("error"))

    },[])

  */}


const dat=({item})=>(
<Card style={styles.cours} >
<View style={styles.infoCours}>
<Image  source={item.image} style={styles.img}/>

<Text style={styles.Ctitle} > {item.name}</Text>
<Text style={styles.Ctitle1} > {item.depa}</Text>
<Text style={styles.Ctitle2} > {item.grade}</Text>

</View>
</Card>
      
    );

  return (

    <View style={styles.mainView}>
      <Text  style={styles.txt} >  Nos Enseignants </Text>

      <FlatList
      data={Teachers}
      renderItem={dat} 
      ListEmptyComponent={<Text>Liste encore Vide ! </Text>}
    
      />
     
    </View>

  
  )
}

export default Teachers

const styles = StyleSheet.create({
  infoCours:{
    justifyContent:'space-between',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    margin:29,
  },
img:{
      margin:2,
      height:120,
      width:120,
      borderRadius:80,
      }
    ,
mainView:{
height:'100 %',
alignItems:'center',
backgroundColor:'#ebf4fa'

},
txt:{
    fontSize:26,
    marginTop:40,
    marginLeft:15,
    fontWeight:'bold',   
    margin:12,
    fontStyle:'italic',
}
,
cours:{
  borderWidth:1,
  borderRadius:35,
  backgroundColor:'#fff',
  height:260,
  width:380,
  marginTop:1,
  marginLeft:7,
  marginRight:7,
  marginBottom:17,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
},

Ctitle:{

  margin:8,
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',

}
,
Ctitle1:{

  margin:5,
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',
  marginRight:20,

}
,
Ctitle2:{

  margin:10,
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',
  marginRight:80,
  marginBottom:38

}
})