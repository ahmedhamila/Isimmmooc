import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import Login from './Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Navigation = () => {
  const stk=createNativeStackNavigator();
  return (
   <NavigationContainer initialRouteName="Log">

    <stk.Navigator>
        <stk.Screen name='Log' component={Login}  />
    </stk.Navigator>

   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})