import React, { useState } from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface Book {
  title?: string;
  author_name?: string[];
  cover_i?: number;
}

const searchPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  //added a searchQuery useState
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAPI = async () => {
    try {
        // url now includes the user input query instead of manually inserting a book title
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchQuery)}&limit=10`;
    //   console.log('Search URL:', url);
    //   console.log('Search Query:', searchQuery);
      
      const response = await fetch(url);
      const data = await response.json();
      
    //   console.log('API Response:', data);
      setBooks(data.docs || []);
    } catch (error) {
      console.error('Error:', error);
      setBooks([]);
    }
  };
  return (
    <View style={{padding: 20, flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.title}>Search for a book</Text>
      <Text style={styles.subTitle}>Enter title, ISBN, or author</Text>
      
    {/* updated the api test button to be a functional search bar  */}
    <View style={styles.buttonContainer}>
        <View style={styles.search}>
            <TextInput 
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder=""
                style={styles.textInput}
            />
            <Button 
                title="Search"
                onPress={fetchAPI}
            />
        </View>
    </View>

      {/* <Text style={styles.subTitle}>Found {books.length} books:</Text> */}

      {books.map((book, index) => (
        <View key={index}>
          <Link href='/bookInfo'>
            {book.cover_i && (
            <Image 
              source={{ uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }}
              style={{width: 60, height: 90}}
            />
          )}
          </Link>
          <Link href='/bookInfo'>{book.title}</Link>
          <Text>{book.author_name ? book.author_name[0] : 'Unknown Author'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    gap: 10,
  },
  textInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
export default searchPage;