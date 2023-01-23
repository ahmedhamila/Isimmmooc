import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Input } from '@rneui/themed'
import { FormControl, NativeBaseProvider } from 'native-base'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  labelname,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      value={value}
      label={labelname}
      placeholder={placeholder}
      style={styles.input}
    />
   </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
    alignItems:"center",
    width:"100%",
    
  },
  iconStyle: {
    marginRight: 10
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius:20,
    borderWidth:0,
    width:"100%",
    borderEndWidth:0,
    borderColor:'red',
    outlineStyle: 'none',
    height:5,
  },
})

export default FormInput;