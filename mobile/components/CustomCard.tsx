import { View, ViewProps, StyleSheet } from "react-native";


export default function CustomCard({ style, ...rest }: ViewProps) {
  return (
    <View style={[styles.card, style]} {...rest}/>
  ) 
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#56666B',
    padding: 12,
    borderRadius: 16,
    borderColor: '#66666E',
    // borderStyle: 'dashed',
    borderWidth: 1
  }
})  