import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './imagePickerStyles';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default ImagePickerComp = ({ image, setImage }) => {

  const selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [3, 3],
      allowsEditing: true,
    });
    if (!cancelled) setImage({ image: uri });
  };

  const takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [3, 3],
      allowsEditing: true,
    });
    if(cancelled) {
      return null;
    } else {
      setImage({ image: uri });
    }
  };

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image.image }} />
        <View style={styles.row}>
          <Button handlePress={selectPicture}>Gallery</Button>
          <Button handlePress={takePicture}>Camera</Button>
        </View>
      </View>
    );
  
}

const Button = ({ handlePress, children }) => (
  <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);
