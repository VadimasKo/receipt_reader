import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

interface Props {
  onClick: () => void,
  style?: StyleProp<ViewStyle>
}

const CircleButton = ({ onClick, style }: Props) => (
  <Pressable style={[styles.outer, style]} onPress={onClick} />
)

const styles = StyleSheet.create({
  outer: {
    padding: 12,
    borderRadius: 100,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor:'#E1EFE6',
    backgroundColor: '#D00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#E1EFE6',
  }
})

export default CircleButton
