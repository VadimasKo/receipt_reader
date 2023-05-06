import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Text, TextProps, StyleSheet } from "react-native";

interface Props {
  text: string,
  onClick: () => void,
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}


const CustomButton = ({ text, onClick, style, textStyle }: Props) => (
  <Pressable style={[styles.button, style]}>
    <Text style={[styles.text, textStyle]} >{text}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000103',
    borderColor: '#E1EFE6'
  },
  text: {
    color: '#E1EFE6',
  }
})

export default CustomButton
