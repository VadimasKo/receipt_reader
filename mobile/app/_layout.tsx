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
      <Tabs
        initialRouteName='Scanner/index'
        screenOptions={{
          headerTitleStyle: { fontFamily: 'default' },
          header: () => null,
          tabBarIconStyle: { display: "none" },
          tabBarStyle: { height: 60 },
          tabBarLabelStyle: {
            fontFamily: 'default',
            fontSize: 16,
            paddingBottom: 20,
          }
        }}
      >
        <Tabs.Screen
          name='index'
          options={{ title: 'Dashboard',  unmountOnBlur: true }}
        />
        <Tabs.Screen
          name='Scanner/index'
          options={{ title: 'Scanner', unmountOnBlur: true }}
        />
        <Tabs.Screen
          name='Receipt/[id]'
          options={{ title: 'Receipt', href: null,  unmountOnBlur: true }}
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
    primary: '#E1EFE6',
    background: '#000103 ',
    card: '#000103',
    text: '#E1EFE6',
    border: '#E1EFE6',
    notification: '#EF959D',
  },
};
