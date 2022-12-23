import * as React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,} from 'react-native';
import Login from './Components/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FormateurSignUp from './Components/Formateur_SignUp';
import Ionicons from '@expo/vector-icons/MaterialIcons';
import OrganismeSignUp from './Components/Organisme_SignUP';
import SignUp from './Components/SignUp';
import {Welcome,Contact,ResultTest,Quiz,SearchCategorie,Teachers,ResultQuiz} from './Components/index';


export default createAppContainer(

  createStackNavigator(
    {
      Login,FormateurSignUp,SignUp,OrganismeSignUp,Welcome
    },
    {
      initialRouteName:"Welcome"
    }
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
