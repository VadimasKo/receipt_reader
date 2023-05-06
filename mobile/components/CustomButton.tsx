import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface Props {
  text: string,
  onClick: () => void,
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}


const CustomButton = ({ text, onClick, style, textStyle }: Props) => (
  <Pressable style={[styles.button, style]} onPress={onClick}>
    <CustomText style={[styles.text, textStyle]} >{text}</CustomText>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor:'#66666E',
  },
  text: {
    fontSize: 14,
    color: '#E1EFE6',
  }
})

export default CustomButton
