import { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Receipt } from '../../../types';


export default function useImagePicker() {
  const [imageUri, setImageUri] = useState<string>()
  const [receipt, setReceipt] = useState<Receipt>()

  useEffect(() => {
    // UPLOAD IMAGE AND GET SCANNED INFO
    if (imageUri) setReceipt(receiptPlaceholder) 
  }, [imageUri])

  const pickImage = async () => {
    const grantResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!grantResult.granted) {
      Alert.alert('Access not granted', 'You refused to allow this app to access your photos!')
      return
    } 

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
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

  return [imageUri, receipt, pickImage, takeImage] as const
}


const receiptPlaceholder: Receipt = {
  meta: {
    id: '1',
    vendorName: 'Maxima',
    cost: 12,
    date: '2022-11-23'
  },
  content: [
    {
      product: 'bandele',
      cost: 5,
    },
    {
      product: 'Virdulys',
      cost: 10,
    },
  ]
}
