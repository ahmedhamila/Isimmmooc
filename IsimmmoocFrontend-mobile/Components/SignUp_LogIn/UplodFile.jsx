import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const  File=() => {
  async function _pickDocument ()  {

    let result = await DocumentPicker.getDocumentAsync({});
    
    alert(result.uri);
    
    console.log(result);
    
    }


    return (
      <TouchableOpacity style={styles.btncv} onPress={() => _pickDocument()}>
      <Text style={styles.cvtxt}>Ajouter Un CV 📑</Text>
    </TouchableOpacity>

     
    );
  
}

export default File

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cvtxt:{
    textAlign:'center',
    fontSize:17,
    color:'black',
    textDecorationLine:"solid",
    fontWeight: "bold",
    alignItems:'center',
    textAlign: "center",
    padding:5
  
  },
  btncv:{
    backgroundColor:'#FFF',
    borderRadius:20,
    height:40,
    width:170,
    borderWidth:1,
    textAlign:'center',
    marginLeft:70,
    marginTop:25,
    
    },
});
