import { getDb, initDatabase } from '@/db/db';
import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  initDatabase();
  
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const router = useRouter();

  async function handleLogin() {
    try {
      const db = await getDb();
      const username = usernameValue.trim();
      const password = passwordValue.trim();

      if (!username || !password) {
        Alert.alert("Error", "Please enter both a username and password.");
        return;
      }

      const result = await db.getFirstAsync(
        `SELECT userId FROM users WHERE LOWER(username) = LOWER(?) AND password = ?;`,
        [username, password]
      );

      if (result) {
        await AsyncStorage.setItem('userToken', 'loggedIn');
        await AsyncStorage.setItem('username', username);
        console.log("User authenticated");
        router.replace('/'); 
      } else {
        Alert.alert("Login Failed", "Invalid username or password.");
        console.log(result);
        const allUsers = await db.getAllAsync(`SELECT * FROM users`);
        console.log("Registered Users:", allUsers);
      }
    } catch (err) {
      console.error("Error during login:", err);
      Alert.alert("Database Error");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BookMark!</Text>
      <Text style={styles.subtitle}>Enter your details to log in.</Text>

      <TextInput 
        style={styles.textinput}
        placeholder='Username'
        onChangeText={setUsernameValue}
        autoCapitalize='none'
      />

      <TextInput 
        style={styles.textinput}
        secureTextEntry={true}
        placeholder='Password'
        onChangeText={setPasswordValue}
      /> 

      <Button 
        title='Log In'
        onPress={handleLogin}
      />   

      <View style={styles.registerContainer}>
        <Text>Don't have an account?</Text>
        <Button
          title='Register'
          onPress={() => {
            router.replace('/register');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  textinput: {
    width: '80%',
    height: 45,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  }
});