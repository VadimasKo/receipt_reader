import { ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { Receipt, Stats } from '../../types';
import ReceiptCard from '../../components/ReceiptCard';
import CustomButton from '../../components/CustomButton';
import StatCard from '../../components/StatCard';
import storage from '../../components/storage';
import PageTitle from '../../components/PageTitle';


export default function() {
  const [receipt, setReceipt] = useState<Receipt>()
  const { id } = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    // FETCH RECEIPT INFO
    if (typeof id !== 'string') return
    storage.getReceipt(id).then(item => setReceipt(item))
  }, [id])

  const onDelete = async () => {
    if (typeof id !== 'string') return
    await storage.deleteReceipt(id)
    router.push('/')
  }

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <PageTitle title='Receipt'>
        <CustomButton style={styles.deleteButton} text='Delete' onClick={onDelete} />
      </PageTitle>
      {receipt && (
        <ReceiptCard receipt={receipt} style={styles.receiptCard}>
          <CustomButton style={styles.receiptButton} text='Edit' onClick={() => null} />
        </ReceiptCard>
      )}
      {receipt && <StatCard stats={receipt?.stats} style={styles.statsCard} />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    rowGap: 25,
    marginTop: 12,
  },

  deleteButton: {
    alignSelf: 'flex-end',
    marginRight: '10%'
  },

  receiptCard: {
    width: '80%',
  },

  receiptButton: {
    alignSelf: 'flex-end',
  },

  statsCard: {
    width: '80%'
  }
})
