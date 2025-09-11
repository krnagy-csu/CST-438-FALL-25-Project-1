import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
const loginScreen = () => {
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
      ></TextInput>
    <TextInput 
        style={styles.textinput}
        placeholder='Password'
      ></TextInput> 

    <Button 
    title='Submit'></Button>   

    <Text>Don't have an account?</Text>
    <Button
    title = 'Register'></Button>
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

export default loginScreen;