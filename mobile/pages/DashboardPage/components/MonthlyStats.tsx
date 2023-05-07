import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import StatCard from '../../../components/StatCard';
import CustomText from '../../../components/CustomText';
import { Stats } from '../../../types';


export default function MonhtlyStats() {
  const [stats, setStats] = useState<Stats>()

  useEffect(() => {
    setStats(StatsPlaceholder)
  }, [])

  if (!stats) return <CustomText>Loading</CustomText>

  return (
    <StatCard style={styles.stats} stats={stats} />
  )
}

const styles = StyleSheet.create({
  stats: {
    width: '80%',
  },
})

const StatsPlaceholder: Stats = {
  total: 130,
  food: 30,
  appliance: 50,
  other: 20,
}