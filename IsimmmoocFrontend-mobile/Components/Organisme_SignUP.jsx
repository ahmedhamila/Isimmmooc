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
import CustomInput from './field'
import DateField from 'react-native-datefield';
import { useState } from 'react'

const OrganismeSignUp = () => {
    const signUpValidationSchema = yup.object().shape({
      OrganismeName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .required('OrganismeName is required'),
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
        <View style={styles.signupContainer}>
        <Text>Sign Up Screen</Text>

<Formik
   validationSchema={signUpValidationSchema}
  initialValues={{
    OrganismeName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  }}
  onSubmit={values => console.log(values)}
>
  {({ handleSubmit, isValid }) => (
    <>
      <Field
        component={CustomInput}
        name="OrganismeName"
        placeholder="OrganismeName"
      />
   
      <Field
        component={CustomInput}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <Field
        component={CustomInput}
        name="phoneNumber"
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Field
        component={CustomInput}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Field
        component={CustomInput}
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry
      />
      <TextInput  onChange={(url)=>seturl(url)}></TextInput>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(url)}>
  Google
</Text>

      <Button
        onPress={handleSubmit}
        title="SIGN UP"
        disabled={!isValid}
      />
    </>
  )}
</Formik>

        </View>
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
export default OrganismeSignUp;