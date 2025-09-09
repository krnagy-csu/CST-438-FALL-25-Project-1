import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { SQLiteProvider, openDatabaseSync } from 'expo-sqlite';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { drizzle } from 'drizzle-orm/singlestore/driver';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';

export const DATABASE_NAME = 'users';

export default function RootLayout() {
  // const expoDb = openDatabaseSync(DATABASE_NAME);

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
      <SQLiteProvider
        databaseName={ DATABASE_NAME }
        options={{ enableChangeListener: true }}
        useSuspense>

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

      </SQLiteProvider>
    </Suspense>
  );
}
