import React from "react";
import {Text, View, Button, TextInput, FlatList,ScrollView} from 'react-native';
import { StyleSheet } from "react-native";


type Book ={
    id:string,
    isbn:string,
    title:string,
    author:string
}

const profilePage =() => {
    return(
        <View
        style={{
            flexDirection:'row',
            flex:1
        }}
        >
            <View 
            style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
            }}>
                <View
                style={{
                    justifyContent:'center',
                    flex:0.5,
                    margin: 25,
                }}>

                <Text id="userWelcomeMessage">Welcome back, Username! </Text>
                <Text>{'\n'}{'\n'}{'\n'}</Text>
                
                <Text id="MOTD">Eventual message of the day goes here!</Text>
                <Text>{'\n'}{'\n'}{'\n'}</Text>

                <Text>Recent Activity:</Text>

                <ScrollView style={{
                    flex:1,
                    margin:15
                }}>
                    <Text>Wow this is a text{'\n'}{'\n'}</Text>

                    <Text>Wow this is also a text{'\n'}{'\n'}</Text>

                    <Text>Wow this is also a text{'\n'}{'\n'}</Text>

                    <Text>Wow this is also a text{'\n'}{'\n'}</Text>

                    <Text>Wow this is also a text{'\n'}{'\n'}</Text>

                    <Text>All of these will eventually be things like "X added Y to Z list"</Text>
                </ScrollView>
                </View>

    


            </View>
            <View
            style={{flex: 5,
                    justifyContent:'flex-start',
                    alignItems:'center',
                    backgroundColor:'#346da3a7',
                    flexDirection:'row',}}>
                <View
                style={{
                    rowGap:4,
                    backgroundColor:'#ff3affff',
                    flex:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Scrolling view with book covers goes here</Text>
                </View>
            </View>
        </View>

        
    )
}


export default profilePage;