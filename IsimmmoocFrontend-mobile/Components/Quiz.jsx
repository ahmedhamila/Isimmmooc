import { StyleSheet, Text, View ,PreviewLayout} from 'react-native'
import React from 'react'

import { TouchableOpacity} from 'react-native-gesture-handler'

const Quiz = () => {
  return (
    <View>

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

<View style={styles.dbtn}>
<TouchableOpacity style={styles.finish}><Text style={styles.textf}> Precedent </Text></TouchableOpacity>
<TouchableOpacity style={styles.finish}><Text style={styles.textf}> Suivant </Text></TouchableOpacity>
</View>
       

    </View>
    </View>
  )
}

export default Quiz

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
quest:{
fontSize:20,
textDecorationLine:"solid",
fontWeight: "bold",

}
,
finish:{

  width:145,
  height:40,
  backgroundColor:'#73B2B3',
  borderRadius:70,
  justifyContent: "center",
  marginHorizontal:9,
  
},
textf:{
  fontSize:17,
  textDecorationLine:"solid",
  fontWeight: "bold",
  textAlign: 'center',
 
},
dbtn:{

  justifyContent:'space-between',
  flexDirection: "row",
  marginTop:148,
},

}

)