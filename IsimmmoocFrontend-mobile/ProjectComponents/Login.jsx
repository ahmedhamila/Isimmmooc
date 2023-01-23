import { Field, Formik } from 'formik'
import { Button,Modal,StyleSheet, Text, TextInput, View } from 'react-native';
import {
  
  Dialog,
  CheckBox,
  ListItem,
  Avatar,
  } from '@rneui/themed';
import * as yup from 'yup'
import CustomInput from './Field';
import { useState } from 'react';

import { Actionsheet, Box, Center, NativeBaseProvider } from 'native-base';

export default function Login({navigation}){
    

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
const [visible5, setVisible5] = useState(false);
const [checked, setChecked] = useState("");
const toggleDialog5 = () => {
  setVisible5(!visible5);
};

const [modalVisible, setModalVisible] = useState(false);
       return(  
        
       <View style={styles.loginContainer}>
       
      
         
          <Text>Login Screen</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {console.log(values);navigation.navigate("Home")}}
          
          >
            {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     touched,
     isValid,
   }) => (
              <>
              
                 <Field
        component={CustomInput}
        name="email"
        placeholder="Email Address"
        icon="ios-mail"
        label="email"
        keyboardType="email-address"
      />
       
       <Field
        component={CustomInput}
        name="password"
        placeholder="Password"
        secureTextEntry
        label="password"
        icon="lock-closed"
      />
       <Button
         onPress={handleSubmit}
         title="LOGIN"
         
         disabled={!isValid}
       />
              
              </>
              
            )}
            
          </Formik>
          <Text
              style={styles.registerTextStyle}
              onPress={toggleDialog5}>
              New Here ?<Text style={{color:"blue",textDecorationLine:"underline"}}> Register</Text>
            </Text> 
            <NativeBaseProvider>                               
            <Center>
      <Actionsheet isOpen={visible5} onClose={!visible5}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              select registationtype
            </Text>
          </Box>
          <Actionsheet.Item onPress={()=>{toggleDialog5(!visible5)
                                    navigation.navigate("SignUp")}}>apprenant</Actionsheet.Item>
          <Actionsheet.Item onPress={()=>{toggleDialog5(!visible5);
                                         navigation.navigate("FormateurSignUp");}}>formateur</Actionsheet.Item>
          <Actionsheet.Item onPress={()=>{toggleDialog5(!visible5);
             navigation.navigate("OrganismeSignUp");}}>organisme</Actionsheet.Item>
          <Actionsheet.Item onPress={()=>{toggleDialog5(!visible5)}}>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
    
    </NativeBaseProvider>
        </View>
        
       );
}
const styles = StyleSheet.create({

    loginContainer: {
      width: '100%',
      height:"100%",
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
    
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    errorInput:{
        borderColor:'red',
    }
  })