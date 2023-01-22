import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from './Field'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import File from './FilePicker'
import { HStack, NativeBaseProvider, Pressable } from 'native-base'
import { Icon } from '@rneui/themed'
const FormateurSignUp = ({navigation}) => {
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  const handleConfirm = (dates) => {
    console.warn("A date has been picked: ", dates);
    setDate(dates);
    hideDatePicker();
    console.warn("A date has been picked1: ", date);
    console.warn("A date has been picked2: ", date);
  };
    const signUpValidationSchema = yup.object().shape({
        Name: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 charcter')
        .required(' name is required'),
      LastName: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 character')
        .required('Last name is required'),
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
    Name:'',
    LastName: '',
    email: '',
    
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
        name="Name"
        placeholder="Name"
        label="Name"
        icon="person"
      />
      <Field
        component={CustomInput}
        name="LastName"
        placeholder="Last Name"
        label="LastName"
        icon="person"
      />
      <View style={{width:"95%"}}>
      
      <NativeBaseProvider>
         <Pressable p={0.7}  alignItems="flex-start" borderWidth={0} borderBottomWidth={1} borderBottomColor="rgb(134, 147, 158)" _light={{
     borderColor: "dark.200"
   }} _dark={{
     borderColor: "dark.600"
   }}
            onPress={showDatePicker}>
        <Text style={{alignSelf:"flex-start",marginBottom:10,fontWeight:"bold",fontSize:16,color:"#86939E"}}> Date</Text>
     <View style={{alignItems:"flex-start"}} >
             <HStack space={30} alignItems="flex-start" >    
             <Icon name="perm-contact-calendar"  size={30} /> 
             
               
               <Text>
              {getDate()}
            
           </Text>
           </HStack>
           </View>
          
     
     
     </Pressable>
     
     </NativeBaseProvider>
      
       <DateTimePickerModal
         
         isVisible={isDatePickerVisible}
         mode="date"
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
       />
       
    
  
 
 </View>
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
        name="password"
        placeholder="Password"
        label="Password"
        icon="lock-closed"
        secureTextEntry
      />
      <Field
        component={CustomInput}
        name="confirmPassword"
        placeholder="Confirm Password"
        label="ConfirmPassword"
        icon="lock-closed"
        secureTextEntry
      />
      <File />

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
export default FormateurSignUp;