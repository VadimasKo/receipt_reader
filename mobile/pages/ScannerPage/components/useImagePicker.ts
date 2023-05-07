import { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";


export default function useImagePicker() {
  const [imageUri, setImageUri] = useState<string>()

  const pickImage = async () => {
    const grantResult = await ImagePicker.requestMediaLibraryPermissionsAsync()


    if (!grantResult.granted) {
      Alert.alert('Access not granted', 'You refused to allow this app to access your photos!')
      return
    } 

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    })

    if (result.assets) setImageUri(result.assets[0].uri)
  }

  const takeImage = async () => {
    const grantResult = await ImagePicker.requestCameraPermissionsAsync()
    console.log(grantResult)

    if (!grantResult.granted) {
      Alert.alert('Access not granted', 'You have denied access to the camera!')
      return
    }
    
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (result.assets) setImageUri(result.assets[0].uri)
  }

  return [imageUri, pickImage, takeImage] as const
}
