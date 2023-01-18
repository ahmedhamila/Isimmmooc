
import {React,useState,useEffect} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{Splash,Welcome,SearchCategorie,Contact,Course, Quiz,Teachers, ResultQuiz, ResultTest} from './Components/index';
import Ionicons from '@expo/vector-icons/MaterialIcons';
import SignUp from './Components/SignUp';
import FormateurSignUp from './Components/Formateur_SignUp';
import Login from './Components/Formateur_SignUp';
import field from './Components/Formateur_SignUp';
import OrganismeSignUp from './Components/Organisme_SignUP';



const Stack = createStackNavigator();


function NavStack(){
    return(
<Stack.Navigator>
<Stack.Screen
name="Splach" component={Splash}   options={{headerShown: false}}

></Stack.Screen>

</Stack.Navigator>

    );
}


const screenOptions = {
    tabBarStyle:{
        borderTopColor:'#000',
        borderTopWidth:1,
        margin:7,
        borderRadius:25,
        height:71,
        paddingBottom:13,
        borderWidth:1,
    },
   
  };

const Tab=createBottomTabNavigator();

function BottomTab(){
    return (
        <Tab.Navigator {...{ screenOptions }}>
          <Tab.Screen
            name="Home" 
            component={Welcome}
            options={{ 
              headerShown: false,
              headerTintColor: '#fff',
              tabBarIcon: ({}) => (
                <Ionicons name="home" color={'#A9CCE3'} size={29}   />
              )
            }}
          />
          <Tab.Screen 
            name="Search" 
            component={SearchCategorie}
            options={{ 
              headerShown: false,
              headerTintColor: '#fff',
              tabBarIcon: ({}) => (
                <Ionicons name="search" color={'#A9CCE3'} size={29} />
              )
            }} 
          />
          <Tab.Screen 
            name="Contact" 
            component={Contact}
            options={{ 
                headerShown: false,
              headerTintColor: '#fff',
              tabBarIcon: ({}) => (
                <Ionicons name="email" color={'#A9CCE3'} size={29} />
              )
            }}
          />
        </Tab.Navigator>
      );
}

const App = () => {

const [appIsReady,setAppIsReady]=useState(false);

useEffect(()=>{

async function init(){

try{
await new Promise((resolve)=>{setTimeout(resolve,5000)})


}catch(e){

    console.log(e);
}finally{
    setAppIsReady(true);

}

}
init();

});
    return (
<>
<NavigationContainer>
{
appIsReady?
<BottomTab/>
:
<NavStack/>
}
</NavigationContainer>
</>
    );
}

const styles = StyleSheet.create({

});



export default App