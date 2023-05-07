import { ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'expo-router';
import { Receipt, Stats } from '../../types';
import ReceiptCard from '../../components/ReceiptCard';
import CustomButton from '../../components/CustomButton';
import StatCard from '../../components/StatCard';


export default function() {
  const [receipt, setReceipt] = useState<Receipt>()
  const [stats, setStats] = useState<Stats>()
  const { id } = useSearchParams()

  useEffect(() => {
    // FETCH RECEIPT INFO
    setReceipt(receiptPlaceholder)
    setStats(StatsPlaceholder)
  }, [id])

  return (
    <ScrollView contentContainerStyle={styles.page}>
      {receipt && (
        <ReceiptCard receipt={receipt} style={styles.receiptCard}>
          <CustomButton style={styles.receiptButton} text='Edit' onClick={() => null} />
        </ReceiptCard>
      )}
      {stats && <StatCard stats={stats} style={styles.statsCard} />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    rowGap: 18,
    marginTop: 12,
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
    {
      product: 'Dantu pasta',
      cost: 5,
    },
  ]
}


const StatsPlaceholder: Stats = {
  total: 20,
  food: 25,
  appliance: 50,
  other: 25,
}