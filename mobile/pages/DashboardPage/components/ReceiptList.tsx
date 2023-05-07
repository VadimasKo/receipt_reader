import { useRouter } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';
import CustomCard from '../../../components/CustomCard';
import CustomText from '../../../components/CustomText';
import { ReceiptMeta } from '../../../types';

export default function ReceiptList() {
  const router = useRouter()

  return (
    <CustomCard style={styles.receiptList}>
      <CustomText style={styles.title}>Recent Receipts</CustomText>
      {placeholderReceipts.map(({ id, cost, vendorName }) => (
        <Pressable
          onPress={() => router.push(`Receipt/${id}`)}
          style={styles.receiptLine}
          key={id}
        >
          <CustomText style={styles.vendorName}>{vendorName}</CustomText>
          <CustomText style={styles.cost}>${cost}</CustomText>
        </Pressable>
      ))}
      <CustomText style={styles.loadMore}>Load more</CustomText>
    </CustomCard>
  )
}

const styles = StyleSheet.create({
  receiptList: {
    width: '80%',
    paddingBottom: 18,
    rowGap: 16,
  },
  
  title: {
    fontSize: 20,
    textAlign: 'center'
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

  vendorName: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  cost: {
    fontSize: 14,
    color: '#E36414',
  },

  loadMore: {
    color: '#006E90',
    textAlign: 'center'
  }
})

const placeholderReceipts: ReceiptMeta[] = [
  {
    id: '1',
    vendorName: 'Maxima',
    cost: 10,
    date: '2022-11-12'
  },
  {
    id: '2',
    vendorName: 'Norfa',
    cost: 20,
    date: '2022-10-12'
  },
  {
    id: '3',
    vendorName: 'Casino',
    cost: 100,
    date: '2022-9-12'
  },
]
