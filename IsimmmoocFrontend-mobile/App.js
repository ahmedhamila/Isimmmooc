
import {React,useState,useEffect} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{Login,SignUp,Splash,Welcome,SearchCategorie,Contact,Course, Quiz,Teachers, ResultQuiz, ResultTest, Notif,Ing1, Ing2,Ing3, Niv, NivP,P1, P2, M1, M2, M3, E1, E2, E3, Section, I1, I2, I3} from './Components/index';
import Ionicons from '@expo/vector-icons/MaterialIcons';
/*import ApprenantHome from './ProjectComponents/Apprenant_Home';
import FormateurHome from './ProjectComponents/Formateur_home';
import Login from './ProjectComponents/Login';
import Course from './ProjectComponents/Course';
import Profile from './ProjectComponents/Profile';
import Quiz from './ProjectComponents/Quiz';
import Settings from './ProjectComponents/Settings';
import FormateurSignUp from './ProjectComponents/Formateur_SignUp';
import SignUp from './ProjectComponents/SignUp';
import OrganismeSignUp from './ProjectComponents/Oraganisme_SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';*/



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
            component={Course}
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
/*const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(91, 33, 182)',
          },
          headerTintColor: '#fff',
        }}>
           <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FHome" component={ApprenantHome}   options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={FormateurHome}   options={{ headerShown: false,title:"Home" }}/>
        <Stack.Screen name="QQapp" component={Course} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="QQQapp" component={Quiz} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="FormateurSignUp" component={FormateurSignUp} options={{title:'SignUp'}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title:'SignUp'}} />
        <Stack.Screen name="OrganismeSignUp" component={OrganismeSignUp} options={{title:'SignUp'}} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}*/