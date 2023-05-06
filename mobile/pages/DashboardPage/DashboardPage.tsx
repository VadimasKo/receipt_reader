import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import CustomButton from "../../components/CustomButton";
import ReceiptList from "./components/ReceiptList";


export default function DashboardPage() {

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <CustomButton text='Scan check' onClick={() => null} />
      <ReceiptList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center'
  } as ViewStyle,
})