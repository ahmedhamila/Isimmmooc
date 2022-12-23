import {Text,View,FlatList,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';

const Teachers = () => {

    const [Teachers,setTeachers]=useState([

      
    ]);



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

    const mydata=[


    ];


    const dat=({item})=>(
      <Card   style={styles.card}  >
      <Text>{item.name}</Text>
      </Card>
      
    );


  return (


    <View style={styles.mainView}>
      <Text  style={styles.txt} >Get To Know Your Teachers </Text>


      

      <FlatList

      data={mydata}
      renderItem={dat} 
      ListEmptyComponent={<Text>Liste encore Vide ! </Text>}
    
  
      />
     


    </View>
  
  
  
  
  )
}

export default Teachers

const styles = StyleSheet.create({

mainView:{

height:'100 %',
backgroundColor:'#fff',
alignItems:'center',

},
txt:{
    fontSize:26,
    marginTop:40,
    marginLeft:15,
    fontWeight:'bold',   

}
,
card:{
borderRadius:20,

height:150,
width:380,
margin:9,

}
,
})