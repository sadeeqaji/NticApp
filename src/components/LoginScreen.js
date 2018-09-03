
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import {createDrawerNavigator} from 'react-navigation';
import Profile from "./profile";
import Body from "./body";

class LoginScreen extends React.Component{
    static navigationOptions = {
        header: null,
        };
    render(){
        return(
            <View>
                <Text> Logout </Text>
                </View>
        );
    }
}


export default LoginScreen;