import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Linking,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from './Field'
import { useState } from 'react'
import { ScrollView } from 'react-native'

const OrganismeSignUp = ({navigation}) => {
    const signUpValidationSchema = yup.object().shape({
        fullName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .required('Full name is required'),
        Address: yup 
          .string()
          .matches(/(\w){8}.+/, 'Enter a valid Address')
          .required('Address is required'),
        WebSite: yup 
          .string()
          .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Enter correct url!' )
          .required('Website is required'),
        phoneNumber: yup
          .string()
          .matches(/(\d){8}\b/, 'Enter a valid phone number')
          .required('Phone number is required'),
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email is required'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
      })
      const [url,seturl]=useState("");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <ScrollView style={{width:"100%"}}>
        <View style={styles.signupContainer}>
        <Text>Sign Up Screen</Text>

<Formik
   validationSchema={signUpValidationSchema}
  initialValues={{
    fullName: '',
    email: '',
    Address:'',
    WebSite:'',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  }}
  onSubmit={values => {console.log(values);navigation.navigate("FHome",values)}}
>
  {({ handleSubmit, isValid }) => (
    <>
      <Field
        component={CustomInput}
        name="fullName"
        label="FullName"
        icon="business"
        placeholder="Full Name"
      />
   
      <Field
        component={CustomInput}
        name="email"
        placeholder="Email Address"
        label="Email"
        icon="mail"
        keyboardType="email-address"
      />
      <Field
        component={CustomInput}
        name="phoneNumber"
        placeholder="Phone Number"
        label="PhoneNumber"
        icon="call"
        keyboardType="numeric"
      />
      <Field
        component={CustomInput}
        name="Address"
        placeholder="Address"
        label="Address"
        icon="mailbox"
      
      />
       <Field
        component={CustomInput}
        name="WebSite"
        placeholder="Website"
        label="Website"
        icon="link"
      
      />
      <Field
        component={CustomInput}
        name="password"
        label="Password"
        icon="lock-closed"
        placeholder="Password"
        secureTextEntry
      />
      <Field
        component={CustomInput}
        name="confirmPassword"
        label="ConfirmPassword"
        icon="lock-closed"
        placeholder="Confirm Password"
        secureTextEntry
      />
      

      <Button
        onPress={handleSubmit}
        title="SIGN UP"
        disabled={!isValid}
      />
    </>
  )}
</Formik>

        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '100%',
    height:"100%",
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
})
export default OrganismeSignUp