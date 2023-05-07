import { View, StyleSheet, ViewStyle } from "react-native";
import { StatLine, Stats } from "../types";
import CustomCard from "./CustomCard";
import CustomText from "./CustomText";

interface Props {
  stats: Stats
  style?: ViewStyle
}

export default function StatCard({ stats, style }: Props) {
  return (
    <CustomCard style={[styles.statCard, style]}>
      <CustomText style={styles.title}>Total spending ${stats.appliance + stats.food + stats.other}</CustomText>
      <View style={[styles.food, { width: `${stats.food}%` }]}>
        <CustomText>Food {stats.food}%</CustomText>
      </View>
      <View style={[styles.appliance, { width: `${stats.appliance}%` }]}>
        <CustomText>Appliences {stats.appliance}%</CustomText>
      </View>
      <View style={[styles.other, { width: `${stats.other}%` }]}>
        <CustomText>Other {stats.other}%</CustomText>
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