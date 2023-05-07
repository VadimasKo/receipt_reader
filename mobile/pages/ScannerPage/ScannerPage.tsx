import { View, StyleSheet, ScrollView, } from "react-native";
import { Image } from 'expo-image';
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import useImagePicker from "./components/useImagePicker";
import React from "react";

export default function() {
  const [imageUri, pickImage, takePhoto] = useImagePicker()
  const tempUri = 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmobile-8c805263-fac2-4bf4-8176-de15614075d0/ImagePicker/c2ae414b-ff2c-40c2-b336-7f7c64d78f90.png'

  console.log(imageUri)

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: tempUri }}
          transition={700}
        />
      </View>
      <CustomButton style={undefined} text='Take a photo' onClick={takePhoto} />
      <CustomButton style={undefined} text='Pick from gallery' onClick={pickImage} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    rowGap: 18,
    marginTop: 12,
  },

  scanButton: {
    marginRight: '10%',
    alignSelf: 'flex-end'
  },

  container: {
    width:'80%',
    borderRadius: 16,
    padding: 8,
    borderColor: 'white',
    borderWidth: 1,

  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },

})