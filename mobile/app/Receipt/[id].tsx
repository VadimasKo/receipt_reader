import { Text } from "react-native";
import { useSearchParams } from "expo-router";
import CustomText from "../../components/CustomText";


export default function Receipt({ ...params }: any) {
  const { id } = useSearchParams()
  console.log(id)
  // const route: any = useRoute();
  return <CustomText>Receiptable</CustomText>;
}