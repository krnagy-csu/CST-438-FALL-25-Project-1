import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#94d0f1ff', dark: '#117572ff' }}

      headerImage={
        <Image
          source={require('@/assets/images/otter.png')}
          style={styles.otterLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">  Browse through our library</ThemedText>

        {/* //New search bar. The intention is for the user to be able to search titles from an API. 
        //Factors to consider when searching should be case sensitivity, what they can use to search for a book
        // (title, author, maybe publisher or publication date (REVIEW API CONTENTS))
        //Search bar still in progress */}

          {/* //Search Bar 
          //DEBUGGING NEEDED; ADD SEARCH FUNCTIONALITY */}
          <TextInput
            style={styles.searchBox}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search"
            keyboardType="numeric"
            // autoCorrect;
          />

          {/* //Button still in progress (size modification and functionality needed (advanced)) */}
          <View style={styles.fitToText}>
            <Button
                // style = {{buttoncolor:'red'}}
                onPress={() => {
                  console.log('tapped')
                }}
                color="#346da3a7"
                title="Enter"
              />
          </View>
            
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
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
      </ThemedView>
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
});
