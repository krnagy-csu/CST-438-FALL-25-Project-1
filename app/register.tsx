import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert } from 'react-native'; // 👈 Alert is imported here
import { useRouter } from 'expo-router';
import insertUserUnique from '@/components/dbComponents/insertUserUnique';
import checkMatch from '@/components/registrationComponents/registrationComponents';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const router = useRouter();

  const handleRegistration = async () => {
    if (!username || !password || !passwordConfirm) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!checkMatch(password, passwordConfirm)) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      await insertUserUnique(username, password);

      Alert.alert('Success', 'Registration complete. Please log in.');
      router.replace('/login');
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Registration Failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BookMark!</Text>
      <Text style={styles.subtitle}>Please enter your new account's details.</Text>

      <TextInput
        placeholder='Username'
        style={styles.textinput}
        onChangeText={setUsername}
        value={username}
        autoCapitalize='none'
      />

      <TextInput
        placeholder='Password'
        style={styles.textinput}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <TextInput
        placeholder='Confirm Password'
        style={styles.textinput}
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
        secureTextEntry={true}
      />

      <Button
        title='Submit Registration'
        onPress={handleRegistration}
      />
    </View>
  );
};

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
});

export default RegisterScreen;