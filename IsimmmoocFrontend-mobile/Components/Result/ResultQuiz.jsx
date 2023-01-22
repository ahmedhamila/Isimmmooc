import { Image,StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { TouchableOpacity} from 'react-native';

const ResultQuiz = () => {
  return (
    <View  style={styles.main}>

    <Text style={styles.txt}>Vous Avez Terminez Le Quiz </Text>

   {/* <Image source={require("../../assets/images/quiz.png")} style={styles.img} />  */}
    {/*<LottieView  source={require=("../../assets/hour.mp4")} style={styles.lot} /> */}
    
    <Lottie  source={ require("../../assets/hour.json")} autoPlay loop  styles={styles.lot} />
   
    <Text style={styles.rslt1} >Votre Score est :</Text>
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
rslt1:{
    
  fontSize:20,
  marginTop:210,
  fontWeight:'bold',

}
,
rslt:{
    
    fontSize:20,
    marginTop:40,
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
margin:3,
}
})