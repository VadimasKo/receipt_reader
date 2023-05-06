import { useRouter } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import CustomCard from "../../../components/CustomCard";
import CustomText from "../../../components/CustomText";
import { Receipt } from "../../../types";

export default function ReceiptList() {
  const router = useRouter()

  return (
    <CustomCard style={styles.receiptList}>
      <CustomText style={styles.title}>Recent Receipts</CustomText>
      {placeholderReceipts.map(receipt => (
        <Pressable
          onPress={() => router.push(`Receipt/${receipt.id}`)}
          style={styles.receiptLine}
          key={receipt.id}
        >
          <CustomText style={styles.vendorName}>{receipt.vendorName}</CustomText>
          <CustomText style={styles.amount}>${receipt.amount}</CustomText>
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
    borderStyle: "dashed"
  },

  vendorName: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  amount: {
    fontSize: 14,
    color: '#E36414',
  },

  loadMore: {
    color: '#006E90',
    textAlign: 'center'
  }
})

const placeholderReceipts: Receipt[] = [
  {
    id: '1',
    vendorName: 'Maxima',
    amount: 10,
    date: '2022-11-12'
  },
  {
    id: '2',
    vendorName: 'Norfa',
    amount: 20,
    date: '2022-10-12'
  },
  {
    id: '3',
    vendorName: 'Casino',
    amount: 100,
    date: '2022-9-12'
  },
]