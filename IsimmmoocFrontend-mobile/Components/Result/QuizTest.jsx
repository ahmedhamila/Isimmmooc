import { StyleSheet, Text, View ,Alert} from 'react-native'
import React from 'react';
import CountDown from 'react-native-countdown-component';

import { TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';

const QuizTest = ({navigation}) => {




  return (
    <View style={{backgroundColor:'#FFF'}}>

      <View style={styles.quiz}>

      <View styles={styles.Conttitle}>
      <Text style={styles.title}>Quiz</Text>
      </View>
      <Text  style={styles.quest}>  1.Question </Text>
    
    <View styles={styles.contquiz}>
        
<TouchableOpacity style={styles.option}><Text> option 1 </Text></TouchableOpacity>

<TouchableOpacity style={styles.option}><Text> option 2 </Text></TouchableOpacity>


<TouchableOpacity style={styles.option}><Text> option 3 </Text></TouchableOpacity>


<TouchableOpacity style={styles.option}><Text > option 4 </Text></TouchableOpacity>
</View>

<SafeAreaView>
<View>
  <Text style={styles.timer}>Temps Restant </Text>
  
<CountDown
size={20}
until={960}
onFinish={()=> navigation.navigate("ResultQuiz")}
showSeparator
timeToShow={['M','S']}
timeLabels={{m:'Minute',s:'Secondes'}}
digitStyle={{
  borderWidth:2,
  borderColor:'#73B2B3',
  backgroundColor:'#FFF',
}}
/>
</View>
</SafeAreaView>

<View style={styles.dbtn}>
<TouchableOpacity onPress={()=> navigation.navigate("ResultTest")}  style={styles.finish}><Text style={styles.textf}> Suivant </Text></TouchableOpacity>
</View>
       

    </View>
    </View>
  )
}

export default QuizTest

const styles = StyleSheet.create({

quiz:{
height:'100%',
alignContent:'center',
flexDirection: "column"
},

contquiz:{
  justifyContent: 'center',
  alignItems: 'center',
}
,
Conttitle:{
  
  justifyContent: 'center',
  alignItems: 'center',
}

,
option:{

adjustsFontSizeToFit:true,
marginTop:20,
backgroundColor:'#A9CCE3',
borderRadius:50,
alignContent:'center',
padding:12,
marginHorizontal:7,
},
title:
{
  fontSize:35,
  textDecorationLine:"solid",
  fontWeight: "bold",
  margin:27,
  color:'#73B2B3',
  textAlign: 'center',


},

timer:{
  fontSize:25,
  textDecorationLine:"solid",
  fontWeight: "bold",
  margin:17,
  color:'#73B2B3',
  textAlign: 'center',

},

quest:{
fontSize:20,
textDecorationLine:"solid",
fontWeight: "bold",

},

finish:{
  borderWidth:1,
  width:145,
  height:45,
  backgroundColor:'#73B2B3',
  borderRadius:70,
  justifyContent: "center",
  marginHorizontal:9,
  marginLeft:135,
  
},
textf:{
  fontSize:19,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',
 
},
dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:30,
},

}

)