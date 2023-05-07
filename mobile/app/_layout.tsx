import { MaterialIcons } from '@expo/vector-icons';
import { SplashScreen, Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import { ThemeProvider } from '@react-navigation/native';

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
      <Tabs initialRouteName='Scanner/index'>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Dashboard',
            tabBarIcon:  () => <MaterialIcons name='list-alt' size={24} color='#E1EFE6' />,
          }}
        />
        <Tabs.Screen
          name='Scanner/index'
          options={{
            title: 'Scanner',
            tabBarIcon:  () => <MaterialIcons name='camera-alt' size={24} color='#E1EFE6' />,
          }}
        />
        <Tabs.Screen
          name='Receipt/[id]'
          options={{ title: 'Receipt', href: null}}
        />
        <Tabs.Screen
          name='Dashboard/index'
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