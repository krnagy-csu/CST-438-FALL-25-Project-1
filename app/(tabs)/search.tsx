import React, { useState } from 'react';
import {Text, View, Button, Image} from 'react-native';
import { StyleSheet } from 'react-native';

interface Book {
  title?: string;
  author_name?: string[];
  cover_i?: number;
}

const searchPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const testAPI = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?title=the cat in the hat&limit=5');
      const data = await response.json();
      
      console.log('API Response:', data);
      setBooks(data.docs || []);
    } catch (error) {
      console.error('Error:', error);
      setBooks([]);
    }
  };
  return (
    <View style={{padding: 20, flex: 1, backgroundColor: 'white'}}>
      <Text>OpenLibrary API Test</Text>
      
    <View style={styles.buttonContainer}>
        <Button 
          title="Click to see API Results for The Cat in the Hat"
          onPress={testAPI}
        />
    </View>

      <Text>Found {books.length} books:</Text>

      {books.map((book, index) => (
        <View key={index}>
          {book.cover_i && (
            <Image 
              source={{ uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }}
              style={{width: 60, height: 90}}
            />
          )}
          <Text>{book.title}</Text>
          <Text>{book.author_name ? book.author_name[0] : 'Unknown Author'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
export default searchPage;