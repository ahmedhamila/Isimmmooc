import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity} from 'react-native';
import Animation from 'lottie-react-native';

const ResultQuiz = ({navigation}) => {
  return (
    <View  style={styles.main}>

    <Text style={styles.txt}>Vous Avez Terminez Le Quiz </Text>

    <Animation
      style={{
        height: 200,
        width: 200,
        padding: 0,
        marginTop: 3,
      }}
      source={ require("../../assets/animation/h.json")}
      autoPlay loop
    />


    <Text style={styles.rslt1} >Votre Score est :</Text>
    <Text style={styles.rslt} >3/4</Text>
    
    <TouchableOpacity style={styles.finish}
    onPress={()=> navigation.navigate('Ask')}
    
    ><Text style={styles.textf}> Quitter </Text></TouchableOpacity>

    
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


txt:{
    fontSize:23,
    marginTop:75,
    fontWeight:'bold',
    marginBottom:1,

}
,
rslt1:{
    
  fontSize:20,
  marginTop:45,
  fontWeight:'bold',
}
,
rslt:{
    
    fontSize:20,
    marginTop:33,
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

lot:{
height:50,
width:50,
marginBottom:13,
}
})