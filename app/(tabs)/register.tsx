import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import {useForm, SubmitHandler} from "react-hook-form";
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
        <input 
        defaultValue='Username'
        {...register("username")}
        ></input>
        <br></br>
        <input 
        defaultValue='Password'
        {...register("password")}
        ></input>
        <br></br>
        <input 
        defaultValue='Confirm Password'
        {...register("passwordConfirm")}
        ></input>
        <br></br>
        
        <button type="submit">Submit</button>   
        
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

export default registerScreen;