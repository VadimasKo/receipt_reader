import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { ReactNode } from "react";

interface Props {
  title: string,
  children?: ReactNode
}


export default function PageTitle({ title, children }: Props) {
  return (
    <View style={styles.header}>
      <CustomText style={styles.title}>{title}</CustomText>
      <View>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: '10%',
    marginBottom: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 28,
  },
})
