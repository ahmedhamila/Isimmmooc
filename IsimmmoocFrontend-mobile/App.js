import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button,TextInput,} from 'react-native';
import Login from './Components/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from './Components/SignUp';
import FormateurSignUp from './Components/Formateur_SignUp';
import OrganismeSignUp from './Components/Organisme_SignUP';

export default createAppContainer(
  createStackNavigator(
    {
      Login,FormateurSignUp,SignUp,OrganismeSignUp
    },
    {
      initialRouteName:"Loginn"
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
