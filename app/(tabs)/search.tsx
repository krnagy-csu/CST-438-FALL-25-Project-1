import React, { useState } from 'react';
import {Text, View, Button, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Book {
  title?: string;
  author_name?: string[];
  cover_i?: number;
}

const searchPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  //added a searchQuery useState
  const [searchQuery, setSearchQuery] = useState('');

async function saveBookTitle(title){
  AsyncStorage.setItem("bookTitle", title);
  // AsyncStorage.setItem("bookAuthor", book.author_name);
  // AsyncStorage.setItem("bookImage", book.cover_i);
}

  const fetchAPI = async () => {
    try {
        // url now includes the user input query instead of manually inserting a book title
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchQuery)}&limit=5`;
      console.log('Search URL:', url);
    //   console.log('Search Query:', searchQuery);
      
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('API Response:', data);
      setBooks(data.docs || []);
    } catch (error) {
      console.error('Error:', error);
      setBooks([]);
    }
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}} contentContainerStyle={{padding: 20}}>
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

      {/* <Text style={{fontSize: 15, textAlign: 'center', padding: 10}}>Found {books.length} books:</Text> */}

      {books.map((book, index) => (
        <View key={index} style={styles.results}>
           {/* added some logic to use a default cover image if the api doesn't provide a cover */}
          <Image 
            source={
              book.cover_i 
                ? { uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }
                : require('../../assets/images/default_book_cover.png')
            }
            style={{width: 120, height: 200}}
          />
          <View>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={{textTransform: 'capitalize', paddingBottom:15}}>{book.author_name ? book.author_name[0] : 'Unknown Author'}</Text>
            <TouchableOpacity 
                style={styles.favoriteButton}
                // onPress={() => addToFavorites(book)}
            >
              <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
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
  results: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    gap: 10,
    padding: 15,
    borderWidth: 2.5,
    borderColor: "gray",
    width: 550,
  },
  stack: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bookTitle: {
    fontSize: 20,
    paddingBottom: 10,
    textTransform: 'capitalize',
    flexShrink: 1,
  },
  favoriteButton: {
    backgroundColor: 'rgb(11, 18, 69)',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: 150
  },
  favoriteButtonText: {
    color: 'white',
    fontSize: 16,
  }
});
export default searchPage;