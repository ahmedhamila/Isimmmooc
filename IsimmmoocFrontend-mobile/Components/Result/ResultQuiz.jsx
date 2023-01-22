import { Image,StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { TouchableOpacity} from 'react-native-gesture-handler';

const ResultQuiz = () => {
  return (
    <View  style={styles.main}>

    <Text style={styles.txt}>Vous Avez Terminez Le Quiz </Text>

    <Image source={require("../../assets/images/quiz.png")} style={styles.img} />

      
    <Text style={styles.rslt} >Votre Score est :</Text>
    <Text style={styles.rslt} >Score</Text>
    
    <TouchableOpacity style={styles.finish}><Text style={styles.textf}> Quitter </Text></TouchableOpacity>

    
    </View>
  )
}

export default ResultQuiz

const styles = StyleSheet.create({

    main:{

        backgroundColor:'#fff',
        height:'100%',
        alignItems:'center',


    },

    img:{
        height:190,
        width:190,
        margin:10,
        marginTop:35,
        marginRight:43,

    }
,
txt:{
    fontSize:23,
    marginTop:75,
    fontWeight:'bold',
    marginBottom:15,

}
,
rslt:{
    
    fontSize:20,
    marginTop:30,
    fontWeight:'bold',

}
,

finish:{
    borderWidth:1,
    width:152,
    height:50,
    backgroundColor:'#A9CCE3',
    borderRadius:70,
    justifyContent: "center",
    marginHorizontal:9,
    marginTop:40,

    
  },

  textf:{
    fontSize:18,
    textDecorationLine:"solid",
    fontWeight: "bold",
    textAlign: 'center',
   
  },

})