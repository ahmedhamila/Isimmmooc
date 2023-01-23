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

export default function Add({inputValue2,setInputValue2}) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageArray, setImageArray] = useState([]);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();
    console.log('camera permission:', cameraPermission.status);

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log('permission:', imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result.uri);
    if (!result.cancelled) {
      setImageArray([...imageArray, result.uri]);
      setInputValue2(result.uri);
      setImageArray([result.uri]);
    }
  };

  return (
    <View style={styles.container}>
      {showCamera && (
        <Camera ref={(ref) => setCamera(ref)} style={{ flex: 1 }} type={type} />
      )}
      {showCamera && <Button title={'Click'} onPress={takePicture} />}
      {!showCamera && (
        <>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={'Camera'}
                onPress={() => {
                  setShowCamera(true);
                }}
              />
              <Button title={'Gallery'} onPress={pickImage} />
            </View>
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
      )}
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