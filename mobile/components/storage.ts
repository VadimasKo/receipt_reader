import AsyncStorage from '@react-native-async-storage/async-storage'
import { Receipt, ReceiptContent, Stats } from '../types'

const defaultStats: Stats = {
  total: 0,
  food: 0,
  appliance: 0,
  other: 0,
}

const getStats = async () => {
  const statString = await AsyncStorage.getItem('stats')
  return statString ? JSON.parse(statString) as Stats : defaultStats
}

const storeStats = async (stats: Stats) => {
  await AsyncStorage.setItem('stats', JSON.stringify(stats))
}

const getReceipt = async (id: string) => {
  const receiptString = await AsyncStorage.getItem(id)
  return receiptString ? JSON.parse(receiptString) : undefined
}

const getMetaList = async () => {
  let keys = await AsyncStorage.getAllKeys()
  keys = keys.filter(key => key !== 'stats')

  const resultPairs = await AsyncStorage.multiGet(keys)
  return resultPairs.map(([_, receiptString]) => (JSON.parse(receiptString || '') as Receipt).meta)
}

const storeReceipt = async (receipt: Receipt) => {
  await AsyncStorage.setItem(receipt.meta.id, JSON.stringify(receipt))
}

const deleteReceipt = async (id: string) => {
  const receipt = await getReceipt(id);
  let stats = await getStats()

  stats.food -= receipt.stats.food
  stats.appliance -= receipt.stats.appliance
  stats.other -= receipt.stats.other
  stats.total -= receipt.stats.total

  await Promise.all([
    storeStats(stats),
    AsyncStorage.removeItem(id),
  ])
}

const storage = {
  deleteReceipt,
  getStats,
  storeStats,
  getReceipt,
  getMetaList,
  storeReceipt, 
}

export default storage