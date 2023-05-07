import { ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import ReceiptList from './components/ReceiptList';
import MonhtlyStats from './components/MonthlyStats';
import PageTitle from '../../components/PageTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DashboardPage() {
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <PageTitle title='Dashboard'>
      <CustomButton style={styles.scanButton} text='Scan Check' onClick={() => router.push('Scanner/')} />
      </PageTitle>
      <ReceiptList />
      <MonhtlyStats />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    rowGap: 25,
    marginTop: 12,
  },

  scanButton: {
    marginRight: '10%',
    alignSelf: 'flex-end'
  }
})