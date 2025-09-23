import { getDb } from '@/db/db';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, ToastAndroid } from 'react-native';
import { StyleSheet } from 'react-native';
import { router, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {insertFavorite, insertReview} from '@/components/dbComponents/insertFavorite';

export default function bookInfo(){
  const [reviewValue, setReviewValue] = useState('');
  const bookTitle = AsyncStorage.getItem("bookTitle");
  // const bookAuthor = AsyncStorage.getItem("bookAuthor");
  // const bookImage = AsyncStorage.getItem("bookImage");
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>

      <Text>
        {bookTitle}
      </Text>

      {/* <Image
      source={{bookImage}}></Image>

      <Text>
        {"by " + bookAuthor}
      </Text> */}

      <TextInput 
        style={styles.textinput}
        placeholder=''
        onChangeText={ setReviewValue }
      ></TextInput>

      <Button
      title='Submit Review'
      onPress={() => insertReview(reviewValue)}></Button>

      <Button 
      title='Add to Favorites'
      onPress={() => insertFavorite(bookTitle, bookAuthor, bookImage)}></Button>   
      {/* idea: upon inserting a favorite, create new book and insert into Book Table. 
      Then insert a new compound value of Book and User into favorites table
      This way both tables are only populated as needed.
      Book contains info from API call (needs to be passed into this tab!)
      */}
      </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    padding: 15,
  },
});






