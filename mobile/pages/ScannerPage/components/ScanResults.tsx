import { useRouter } from 'expo-router';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { Receipt } from '../../../types';
import CustomText from '../../../components/CustomText';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';

interface Props {
  receipt: Receipt
  style?: ViewStyle
}

export default function ScanResult({ receipt, style }: Props) {
  const router = useRouter()

  return (
    <CustomCard style={[style, styles.container]}>
      <CustomText style={styles.title}>{receipt.meta.vendorName} {receipt.meta.date}</CustomText>
      <View style={styles.content}>
        {receipt.content.map(line => (
          <View style={styles.receiptLine}>
            <CustomText style={styles.product}>{line.product}</CustomText>
            <CustomText style={styles.cost}>${line.cost}</CustomText>
          </View>
        ))}
      </View>
      <CustomButton
        style={styles.upload}
        textStyle={styles.uploadText}
        onClick={() => router.push(`Receipt/1`)}
        text='Upload'
      />
    </CustomCard>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center'
  },

  container: {
    rowGap: 16,
  },

  content: {
    rowGap: 12,
  },

  receiptLine: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderColor: '#66666E',
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'dashed'
  },

  product: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  cost: {
    fontSize: 14,
    color: '#E36414',
  },

  upload: {
    alignSelf: 'center',
  },

  uploadText: {
    color: '#E36414'
  }
})
