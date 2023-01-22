import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import { Camera } from 'expo-camera';

import * as ImagePicker from 'expo-image-picker';

export default function AddV(inputVideo,setInputVideo) {

  const [showCamera, setShowCamera] = useState(false);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageArray, setImageArray] = useState([]);

  
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
      setImageArray([...imageArray, data.uri]);
      setShowCamera(false);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    console.log(result.uri);
    console.log(result.type);
    if (!result.cancelled) {
      setImageArray([...imageArray, result.uri]);
      setInputVideo({name:result.name,uri:result.uri});
    }
    else{ console.log(result.type);}
  };

  return (
    <View style={styles.container}>
     
        <>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
           
              <Button title={'Gallery'} onPress={pickImage} />
           
          </View>
          {imageArray.length > 0 && (
            <View style={{ height: 110 }}>
              <FlatList
                horizontal
                data={imageArray}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      margin: 5,
                    }}
                  />
                )}
              />
            </View>
          )}
        </>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },

  fixedRatio: {
    flex: 1,
  },
});