import { useRouter } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';
import CustomCard from '../../../components/CustomCard';
import CustomText from '../../../components/CustomText';
import { ReceiptMeta } from '../../../types';
import { useEffect, useState } from 'react';
import storage from '../../../components/storage';

export default function ReceiptList() {
  const [receipts, setReceipts] = useState<ReceiptMeta[]>()
  const router = useRouter()

  useEffect(() => {
    storage.getMetaList().then(list => setReceipts(list))
  }, [])

  return (
    <CustomCard style={styles.receiptList}>
      <CustomText style={styles.title}>Recent Receipts</CustomText>
      {receipts?.map(({ id, cost, vendorName }) => (
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
