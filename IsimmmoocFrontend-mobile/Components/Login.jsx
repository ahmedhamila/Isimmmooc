import { Field, Formik } from 'formik'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  
  Dialog,
  CheckBox,
  ListItem,
  Avatar,
  } from '@rneui/themed';
import * as yup from 'yup'
import CustomInput from './field';
import { useState } from 'react';
import FormateurSignUp from './Formateur_SignUp';
import SignUp from './SignUp';
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
       return( <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
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
        icon="home"
        keyboardType="email-address"
      />
       
       <Field
        component={CustomInput}
        name="password"
        placeholder="Password"
        secureTextEntry
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
            <Dialog
      isVisible={visible5}
      onBackdropPress={toggleDialog5}
    >
      <Dialog.Title title="Select Preference"/>
      {['apprenant','formateur','organisme'].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked }
          onPress={() => setChecked(l)}
        />
      ))}

<Dialog.Actions>
       
        <Button
          title="CONFIRM"
          onPress={()=>{
             console.log("ddddddd");
            if (
              checked==="apprenant") {
              console.log("ddddddd55");
          navigation.navigate("SignUp");
          }



          
          if (checked==="formateur") 
          navigation.navigate("FormateurSignUp");
          if (checked!=="organisme") 
          navigation.navigate("OrganismeSignUp");
          console.log("dddddddccc");
          console.log(`Option ${checked} was selected!`);
          toggleDialog5();}}
        />
        <Button title="CANCEL" onPress={toggleDialog5} />
      </Dialog.Actions>
      
    </Dialog>
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