import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import AuthCheck from '@/components/registrationComponents/authCheck';

export const DATABASE_NAME = 'users';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Suspense>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthCheck>
        <Stack>
          <Stack.Screen
            name="login"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              headerShown: false
            }}
          />

            {/* Tab navigation */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
          </AuthCheck>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Suspense>
  );
}