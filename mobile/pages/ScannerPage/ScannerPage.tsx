import { Image } from 'expo-image';
import { View, StyleSheet, ScrollView, Pressable, } from 'react-native';
import CustomText from '../../components/CustomText';
import useImagePicker from './components/useImagePicker';
import CircleButton from '../../components/CircleButton';
import ScanResult from './components/ScanResults';

export default function() {
  const [imageUri, receipt, pickImage, takePhoto] = useImagePicker()

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.topContainer}>
        <Pressable onPress={pickImage} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: imageUri }}
            transition={700}
          />
        </Pressable>
        {receipt && <ScanResult style={styles.result} receipt={receipt} />}
      </View>
      <View style={styles.captureView}>
        <CircleButton  onClick={takePhoto}/>
        <Pressable onPress={pickImage}>
          <CustomText style={styles.pickText}>Pick from gallery</CustomText>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 18,
    marginTop: 12,
  },

  scanButton: {
    marginRight: '10%',
    alignSelf: 'flex-end'
  },

  topContainer: {
    alignItems: 'center',
    rowGap: 20,
    width: '80%',
  },

  imageContainer: {
    width:'60%',
    borderRadius: 16,
    padding: 8,
    borderColor: '#66666E',
    borderWidth: 1,
    justifyContent: 'flex-start',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  captureView: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    rowGap: 10,
    marginBottom: 20,
  },

  result: {
    width: '100%',
  },

  pickText: {
    color: '#66666E',
  }
})
