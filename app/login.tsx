import { getDb } from '@/db/db';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, ToastAndroid} from 'react-native';
import { StyleSheet } from 'react-native';
import { router, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function loginScreen(){
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameValue, setuserNameValue] = useState('');
  // console.log(passwordValue);
  // console.log(usernameValue);
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
 
      <Text>Welcome to BookMark!</Text>
      <Text>Enter your details to log in.</Text>

      <TextInput 
        style={styles.textinput}
        placeholder='Username'
        onChangeText={ setuserNameValue }

      ></TextInput>

    <TextInput 
        style={styles.textinput}
        secureTextEntry={true}
        placeholder='Password'
        onChangeText={ setPasswordValue }
      ></TextInput> 

      <Button 
      title='Submit'
      onPress={() => handleLogin(usernameValue, passwordValue)}></Button>   

      <Text>Don't have an account?</Text>
      <Button
      title = 'Register'
      onPress={() => router.push('/register')}></Button>
      
      </View>
  );
};

async function handleLogin(username: string, password: string){
  try{
    // I know this has unknown type errors, it's because of the async stuff. please dont touch !
    const db = await getDb();
    console.log("authenticate rows: ", rows);
    const rows = await db.getAllAsync(`SELECT * FROM users`);
    let userFound = false;

    for (const row of rows){
        // console.log(row.password);
        // console.log(row.username);
        if(row.password == password && row.username == username){
          // Set session token in AsyncStorage
          await AsyncStorage.setItem('userToken', 'loggedIn');
          console.log("user authenticated");
          router.push('/');
          userFound = true;
        }
    }
    if(!userFound){
      alert("login credentials not found!");
    }
  }
  catch(err){
    console.log(err);
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    padding: 15,
  },
});


}



