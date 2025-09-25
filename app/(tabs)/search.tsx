import React, { useState } from 'react';
import {Text, View, Button, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Book {
  title?: string;
  author_name?: string[];
  cover_i?: number;
}

const searchPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  //added a searchQuery useState
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  
  // Get the theme color for text
  const textColor = useThemeColor({}, 'text');

  const fetchAPI = async () => {
    try {
        // Updated URL to use general search query 'q' which searches across title, author, ISBN, and other fields
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;
      console.log('Search URL:', url);
    //   console.log('Search Query:', searchQuery);
      
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('API Response:', data);
      setBooks(data.docs || []);
      setHasSearched(true);
    } catch (error) {
      console.error('Error:', error);
      setBooks([]);
      setHasSearched(true);
    }
  };
  return (
    <ThemedView style={{flex: 1}}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{padding: 20}}>
        <ThemedText type="title" style={styles.title}>Search for a book</ThemedText>
        <ThemedText type="subtitle" style={styles.subTitle}>Enter title, ISBN, or author</ThemedText>
      
    {/* updated the api test button to be a functional search bar  */}
    <View style={styles.buttonContainer}>
        <View style={styles.search}>
            <TextInput 
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder=""
                style={[styles.textInput, { color: textColor }]}
            />
            <Button 
                title="Search"
                onPress={fetchAPI}
                color="#346da3a7"
            />
        </View>
    </View>

      {/* No results message */}
      {hasSearched && books.length === 0 && (
        <ThemedView style={styles.noResultsContainer}>
          <ThemedText style={[styles.noResultsText, { color: textColor }]}>
            No results found for "{searchQuery}"
          </ThemedText>
          <ThemedText style={[styles.noResultsSubText, { color: textColor }]}>
            Try searching with different keywords, author names, or ISBN numbers.
          </ThemedText>
        </ThemedView>
      )}

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
            <Text style={[styles.bookTitle, { color: textColor }]}>{book.title}</Text>
            <Text style={[{textTransform: 'capitalize', paddingBottom:15}, { color: textColor }]}>{book.author_name ? book.author_name[0] : 'Unknown Author'}</Text>
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
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#41928d49",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
    backgroundColor: '#346da3a7',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: 150
  },
  favoriteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  noResultsContainer: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  noResultsSubText: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  }
});
export default searchPage;