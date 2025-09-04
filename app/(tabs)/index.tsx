// Recources: https://reactnative.dev/docs/handling-touches


import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import{Alert, Button} from 'react-native';


// import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SearchBar } from 'react-native-screens';
// import { Button } from '@react-navigation/elements';



export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#bee8ffff', dark: '#437996ff' }}

      headerImage={
        <Image
          source={require('@/assets/images/otter.png')}
          style={styles.otterLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Discover countless titles</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Browse through our library</ThemedText>
        {/* <ThemedText> */}
          {/* Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '} */}
          {/* <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools. */}
          
        {/* </ThemedText> */}
        <SearchBar
          placeholder = "Search"
        // onChangeText={this.updateSearch}
        // value={search}
          />
          <Button
            onPress={() => {
              console.log('tapped')
            }}
            title="Enter"
          />
      </ThemedView>
      
      {/* _________________________________________________________ */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 2,
    marginBottom: 8,
  },
  otterLogo: {
    height: 400,
    width: 300,
    bottom: -130,
    left: -80,
    position: 'absolute',
  },
  buttonContainer:{
    margin:20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:'row'
  }
});
