import { View, StyleSheet, ViewStyle } from 'react-native';
import { Stats } from '../types';
import CustomCard from './CustomCard';
import CustomText from './CustomText';

interface Props {
  stats: Stats
  style?: ViewStyle
}

export default function StatCard({ stats,  style }: Props) {
  const foodProc = stats.food / stats.total * 100
  const applianceProc = stats.appliance / stats.total * 100
  const otherProc = stats.other / stats.total * 100

  return (
    <CustomCard style={[styles.statCard, style]}>
      <CustomText style={styles.title}>Total spending ${stats.total}</CustomText>
      <View style={[styles.food, { width: `${foodProc}%` }]}>
        <CustomText>Food ${stats.food}</CustomText>
      </View>
      <View style={[styles.appliance, { width: `${applianceProc}%` }]}>
        <CustomText>Appliences ${stats.appliance}</CustomText>
      </View>
      <View style={[styles.other, { width: `${otherProc}%` }]}>
        <CustomText>Other ${stats.other}</CustomText>
      </View>
    </CustomCard>
  )
}


const styles = StyleSheet.create({
  statCard: {
    rowGap: 10
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },

  food: {
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E36414',
    padding: 4,
  },

  appliance: {
    borderRadius: 8,
    height: 30,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006E90'
  },

  other: {
    borderRadius: 8,
    height: 30,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D00000'
  }
})