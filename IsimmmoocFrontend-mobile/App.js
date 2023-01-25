import * as React from 'react';
import { StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Nvo,Choose,Successorg,Ing1,Ing2,Ing3,Successform,Ajouter,Mescours,QuizTest,Ask,Course,P2,P1,Success,Start,Splash,FormateurSignUp,OrganismeSignUp,SignUp ,Login,Welcome,Contact,ResultTest,Quiz,SearchCategorie,Teachers,ResultQuiz,Notif,NivP} from './Components/index';


export default createAppContainer(

  createStackNavigator(
    {
    
    Splash: {
        screen: Splash, 
        navigationOptions: {
          headerShown: false,        },
    },
    Choose: {
      screen: Choose, 
      navigationOptions: {
        headerShown: false,        },
    },
    Nvo: {
      screen: Nvo, 
      navigationOptions: {
        headerShown: false,        },
    },
    Ajouter: {
      screen: Ajouter, 
      navigationOptions: {
        headerShown: false,        },
    },
    Successorg: {
      screen: Successorg, 
      navigationOptions: {
        headerShown: false,        },
    },

    Successform: {
      screen: Successform, 
      navigationOptions: {
        headerShown: false,        },
    },

    Mescours: {
      screen: Mescours, 
      navigationOptions: {
        headerShown: false,        },
    },
    Ajouter: {
      screen: Ajouter, 
      navigationOptions: {
      headerShown: false,        },
    },
    
    Ask: {
      screen: Ask, 
      navigationOptions: {
      headerShown: false,        },
    },

    QuizTest: {
      screen: QuizTest, 
      navigationOptions: {
      headerShown: false,        },
    },

    ResultTest: {
      screen: ResultTest, 
      navigationOptions: {
        headerShown: false,        },
    },
    ResultQuiz: {
      screen: ResultQuiz, 
      navigationOptions: {
        headerShown: false,        },
    },
    Course: {
      screen: Course, 
      navigationOptions: {
        headerShown: false,        },
    },
    NivP: {
      screen: NivP, 
      navigationOptions: {
        headerShown: false,        },
    },
    P1: {
      screen: P1, 
      navigationOptions: {
        headerShown: false,        },
    },
    P2: {
      screen: P2, 
      navigationOptions: {
        headerShown: false,        },
    },
    Ing2: {
      screen: Ing2, 
      navigationOptions: {
        headerShown: false,        },
    },
    Ing1: {
      screen: Ing1, 
      navigationOptions: {
        headerShown: false,        },
    },
    Ing3: {
      screen: Ing3, 
      navigationOptions: {
        headerShown: false,        },
    },
    SearchCategorie: {
      screen: SearchCategorie, 
      navigationOptions: {
        headerShown: false,        },
    },
    Success: {
      screen: Success, 
      navigationOptions: {
        headerShown: false,        },
    },
    Start: {
      screen: Start, 
      navigationOptions: {
        headerShown: false,      },
    },
       
    Notif: {
      screen: Notif, 
      navigationOptions: {
        headerShown: false,      },
    },
    
    Login : {
      screen: Login, 
      navigationOptions: {
        headerShown: false,      },
      },
   
    FormateurSignUp : {
      screen: FormateurSignUp, 
      navigationOptions: {
        headerShown: false,
      },
      },
    SignUp : {
        screen: SignUp, 
        navigationOptions: {
          headerShown: false,
        },
        },
    OrganismeSignUp : {
          screen: OrganismeSignUp, 
          navigationOptions: {
            headerShown: false,
          },
          },
    Welcome : {
            screen: Welcome, 
            navigationOptions: {
              headerShown: false,
            },
            },
    Teachers : {
          screen: Teachers, 
          navigationOptions: {
            headerShown: false,
          },
          },
    Quiz : {
          screen: Quiz, 
          navigationOptions: {
            headerShown: false,
          },
          },
    Contact : {
      screen: Contact, 
      navigationOptions: {
        headerShown: false,
      },
      },
    Login : {
      screen: Login, 
      navigationOptions: {
        headerShown: false,
      },
      },
    },
    {
      initialRouteName:"Splash"
    }
    ,
    
    
    )
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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