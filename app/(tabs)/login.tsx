
import { getDb } from '@/db/db';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {Text, View, Button, TextInput, ToastAndroid} from 'react-native';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function loginScreen(){
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameValue, setuserNameValue] = useState('');
  console.log(passwordValue);
  console.log(usernameValue);
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
      onPress={() => authenticate(usernameValue, passwordValue)}></Button>   

      <Text>Don't have an account?</Text>
      <Button
      title = 'Register'
      onPress={() => router.push('/register')}></Button>
      
      </View>
  );
};

async function authenticate(username: string, password: string){
  try{
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM users WHERE users.username=? && users.password=?`, username, password);
    console.log("authenticate rows: ", rows);
  }
  catch(err){
    console.log(err);
    alert("login credentials not found!");
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






