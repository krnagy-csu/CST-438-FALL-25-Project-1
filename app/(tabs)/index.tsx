/*
  Worked on by Liliana Saavedra
  Recources: https://reactnative.dev/docs/handling-touches
*/


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
    //Banner at the top of the page. The parallax effect makes it so the banner on top hides the image in it as you scroll down. 
    <ParallaxScrollView
    //makes the page dynamic, color pallete changes depending on the user's system theme (light/dark mode)
      headerBackgroundColor={{ light: '#bee8ffff', dark: '#437996ff' }}
    //Image inside the banner, featuring the lovely Monte Ray
      
      headerImage={
        <Image
          source={require('@/assets/images/otter.png')}
          //formatted to the style described at the bottom of this file
          style={styles.otterLogo}
        />
        
      }>

      //New view, including a text box, formatted to the style described at the bottom of this file
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Discover countless titles</ThemedText>
        {/* //<HelloWave /> */}
      </ThemedView>

      //      //
      //New view which includes another text box, a search bar, and a button
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

        //New search bar. The intention is for the user to be able to search titles from an API. 
        //Factors to consider when searching should be case sensitivity, what they can use to search for a book
        // (title, author, maybe publisher or publication date (REVIEW API CONTENTS))
        //Search bar still in progress
        <SearchBar
          placeholder = "Search"
        // onChangeText={this.updateSearch}
        // value={search}
          />

        //Button still in progress (size modification and functionality needed (advanced))
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


//Styles for views, helps created a consistent theme
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
