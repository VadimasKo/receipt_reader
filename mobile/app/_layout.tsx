import { SplashScreen, Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font'
import { ThemeProvider } from "@react-navigation/native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'default': require('../assets/fonts/Inter-Black.ttf'),
    'bold': require('../assets/fonts/Inter-Bold.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null;
  return (
    <ThemeProvider value={CustomTheme}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboard",
            tabBarIcon:  () => <MaterialIcons name="dashboard" size={24} color="#E1EFE6" />,
          }}
        />
        <Tabs.Screen
          name="Scanner/index"
          options={{
            title: "Scanner",
            tabBarIcon:  () => <MaterialIcons name="camera-alt" size={24} color="#E1EFE6" />,
          }}
        />
        <Tabs.Screen
          name='Receipt/[receipt]'
          options={{href: null}}
        />
      </Tabs>
    </ThemeProvider>
  )
}


const CustomTheme = {
  dark: true,
  colors: {
    primary: '#FF8C42',
    background: '#000103 ',
    card: '#000103',
    text: '#E1EFE6',
    border: '#E1EFE6',
    notification: '#EF959D',
  },
};