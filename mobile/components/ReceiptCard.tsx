import { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Receipt } from '../types';
import CustomCard from './CustomCard';
import CustomText from './CustomText';

interface Props {
  receipt: Receipt
  style?: ViewStyle
  children?: ReactNode
}

export default function ReceiptCard({ receipt, style, children }: Props) {
  return (
    <CustomCard style={style}>
      <CustomText style={styles.title}>{receipt.meta.vendorName} {receipt.meta.date}</CustomText>
      <View style={styles.linesContainer}>
        {receipt.content.map(line => (
          <View style={styles.receiptLine} key={line.product}>
            <CustomText style={styles.product}>{line.product}</CustomText>
            <CustomText style={styles.cost}>${line.cost}</CustomText>
          </View>
        ))}
      </View>
      {children}
    </CustomCard>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center'
  },

  linesContainer: {
    rowGap: 12,
    marginTop: 20,
    marginBottom: 20,
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
})
