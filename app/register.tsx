import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import insertUserUnique from '@/components/dbComponents/insertUserUnique';
import checkMatch from '@/components/registrationComponents/registrationComponents';
import { router } from 'expo-router';
var username = "";
var password = "";
var passwordConfirm = "";
const registerScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>

      <Text>Welcome to BookMark!</Text>
      <Text>Please enter your new account's details.</Text>

      <TextInput
        placeholder='Username'
        style={styles.textinput}
        onChangeText={updateUsername}
      />

      <TextInput
        placeholder='Password'
        style={styles.textinput}
        onChangeText={updatePassword}
        secureTextEntry={true}
      />

      <TextInput
        placeholder='Confirm Password'
        style={styles.textinput}
        onChangeText={updateConfirmPassword}
        secureTextEntry={true}
      />

      <Button
        title='Submit Registration'
        onPress={async () => { await sendRegistration(), router.push("/login") }}
      />
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

const sendRegistration = async () => {
  //check if passwords match; check if exists in DB; if both good, send it
  alert("Username: " + username + "; Password:" + password);
  if (!checkMatch(password, passwordConfirm)) {
    alert("Passwords do not match!");
    return;
  } else {
    insertUserUnique(username, password);
  }

}
function updateUsername(newText: string) {
  username = newText;
  return newText;
}
function updatePassword(newText: string) {
  password = newText;
  return newText;
}
function updateConfirmPassword(newText: string) {
  passwordConfirm = newText;
  return newText;
}

export default registerScreen;