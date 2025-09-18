import React from "react";
import {Text, View, Button, TextInput, FlatList,ScrollView} from 'react-native';
import { StyleSheet } from "react-native";


type Book ={
    id:string,
    isbn:string,
    title:string,
    author:string
    imglink:string
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
                    flex:1,
                    margin: 25,
                }}>
                <View style={{flex:2}}>
                <Text id="userWelcomeMessage">Welcome back, Username! </Text>
                <Text>{'\n'}</Text>
                <Text>Profile picture goes here eventually</Text>
                <Text>{'\n'}{'\n'}</Text>
                
                <Text id="MOTD">Eventual message of the day goes here!</Text>
                <Text>{'\n'}{'\n'}{'\n'}</Text>

                <Text> About me: </Text>
                <ScrollView
                >
                <Text id="profileBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </ScrollView>
                </View>
                <View style={{flex:0.05, backgroundColor:'black'}}></View>
                <View style={{flex:1}}>
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
    


            </View>
            
            <View
            style={{flex: 5,
                    justifyContent:'flex-start',
                    alignItems:'center',
                    backgroundColor:'#346da3a7',
                    flexDirection:'column',}}>
                <View
                    style={{
                        flex:1
                    }}
                ></View>
                <View
                style={{
                    rowGap:4,
                    backgroundColor:'darkgray',
                    flex:2,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Finished books:</Text>
                    <ScrollView style={{
                        flex:8,
                        margin:12,
                    }}
                    horizontal={true}
                    >
                        <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                                                <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex:1
                    }}
                ></View>
                <View
                style={{
                    rowGap:4,
                    backgroundColor:'darkgray',
                    flex:2,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Want to read:</Text>
                    <ScrollView style={{
                        flex:8,
                        margin:12,
                    }}
                    horizontal={true}
                    >
                        <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                                                <View>
                            <Text>This is a placeholder!</Text>
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>

                        <View>
                            <Text>This is a placeholder!</Text>                            
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex:1
                    }}
                ></View>
            </View>
        </View>

        
    )
}


export default profilePage;