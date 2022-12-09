import { useCallback } from "react";
import { useState } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import DocumentPicker from 'react-native-document-picker';
const File = () => {
    const [fileResponse, setFileResponse] = useState([]);
  
    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick({
          presentationStyle: 'fullScreen',
        });
        setFileResponse(response);
      } catch (err) {
        console.warn(err);
      }
    }, []);
  
    return (
      <SafeAreaView style={styles.container} >
        <StatusBar barStyle={'dark-content'} />
     
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button title="Select 📑" onPress={handleDocumentSelection} />
      </SafeAreaView>
    );
  };



  
  export default File;
  const styles = StyleSheet.create({
    container: {
      margin:20,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
    }
  });