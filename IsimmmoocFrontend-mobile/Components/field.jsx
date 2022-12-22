import React from 'react'
import { Text, TextInput, StyleSheet, View  } from 'react-native'
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


const CustomInput = (props) => {
  const {
    field: { name, icon ,onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
    
      <FormInput
        style={[
          styles.textInput,
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        name="email"
          labelname={props.label}
          iconName={props.icon}
          iconColor="#2C384A"
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
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
export default CustomInput;