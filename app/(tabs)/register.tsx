import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import {useForm, SubmitHandler} from "react-hook-form";
import insertUserUnique from '@/components/dbComponents/insertUserUnique';
var username = "";
var password = "";
var passwordConfirm = "";
const registerScreen = () => {
    type Inputs ={
        username: string
        password: string
        passwordConfirm: string
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
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
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
        placeholder='Username'
        style = {styles.textinput}
        onChangeText={updateUsername}
        ></TextInput>
        <br></br>
        <TextInput
        placeholder='Password'
        style = {styles.textinput}
        onChangeText={updatePassword}
        ></TextInput>
        <br></br>
        <TextInput
        placeholder='Confirm Password'
        style = {styles.textinput}
        onChangeText={updateConfirmPassword}
        ></TextInput>
        <br></br>
        
        <Button
        title = 'submit Registration'
        onPress={sendRegistration}></Button>
        
    </form>
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
const sendRegistration = async() =>{
  //check if passwords match; check if exists in DB; if both good, send it
  alert("Username: "+username+"; Password:"+password);
  if (password!= passwordConfirm){
    alert("Passwords do not match!");
    return;
  } else {
    insertUserUnique(username,password);
  }

}
function updateUsername(newText:string){
  username = newText;
}
function updatePassword(newText:string){
  password = newText;
}
function updateConfirmPassword(newText:string){
  passwordConfirm = newText;
}
export default registerScreen;