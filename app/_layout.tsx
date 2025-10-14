import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  Rubik_400Regular,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import "react-native-reanimated";
// import "../styles/global.css";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Rubik: Rubik_400Regular,
    RubikBold: Rubik_700Bold,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return <View onLayout={onLayoutRootView} style={{ flex: 1 }} />;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Add your real screens here */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
