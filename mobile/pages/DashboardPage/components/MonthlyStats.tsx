import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import storage from '../../../components/storage'
import StatCard from '../../../components/StatCard';
import CustomText from '../../../components/CustomText';
import { Stats } from '../../../types';


export default function MonhtlyStats() {
  const [stats, setStats] = useState<Stats>()

  useEffect(() => {
    storage.getStats().then(stats => setStats(stats))
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
