import { Text, TextProps, StyleSheet } from 'react-native';


const CustomText = ({ style, ...rest }: TextProps) => (
  <Text style={[styles.text, style]} {...rest}/>
)

const styles = StyleSheet.create({
  text: {
    color: '#E1EFE6',
    fontFamily: 'default'
  }
})

export default CustomText
