import React from 'react';
import {Text, View, Button} from 'react-native';
import { StyleSheet } from 'react-native';

const searchPage = () => {
  const testAPI = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?title=the cat in the hat&limit=5');
      const data = await response.json();
      
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OpenLibrary API Test</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Test API (The Cat in the Hat)"
          onPress={testAPI}
        />
      </View>

      <Text style={styles.resultsText}>
        Check console for results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  resultsText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default searchPage;