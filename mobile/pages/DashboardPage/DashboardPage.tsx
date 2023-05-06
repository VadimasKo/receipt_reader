import { ScrollView, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import ReceiptList from "./components/ReceiptList";
import { Link, useRootNavigation, useRouter } from "expo-router";


export default function DashboardPage() {
  const router = useRouter()
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <CustomButton style={styles.scanButton} text='Scan Check' onClick={() => router.push('Scanner/')} />
      <ReceiptList />
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
  }
})