import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'
import call from 'react-native-phone-call'

import Data from './Data';

const args = {
  number: '07067307317', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}


class Body extends React.Component{
  static navigationOptions = {
    header: null,
    };
  
render() {
 
      return (
    <View>
        <Data />
          <ScrollView >
          
            <View style={styles.ImageContainer} >
            
              <Image source={{uri: this.props.image, cache: 'only-if-cached',}} style={{width:200, height:200, borderRadius: 200/2, margin: 10}}   />
                <View style={styles.Name_Icon}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile")} >
                    <Text style={styles.NameStyle}>{this.props.name}</Text>
                    <Text style={styles.NicknameStyle} >{this.props.nickname}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {call(args).catch(console.error)}} >
                  <View style={styles.CallIconStyle}>
                    <Feather name="phone-call" size={50} color="green" />
                  </View>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
           
            </View>

    );
	}
}




const styles = StyleSheet.create({
  
   ImageContainer:{
        flexDirection: 'row',
        height: 300,
        margin: 10,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: "center",
        borderColor: "black",
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 100,
    
    },
       
   
    Name_Icon:{
      flexDirection: 'column',
      justifyContent: 'center',    
    },

    CallIconStyle: {
      alignItems: 'center',
      margin: 10,  
    },

    NameStyle:{
      textAlign: 'center',
      color: '#511D1D',
      margin: 2,
      fontWeight: 'bold',
      fontSize: 12,          
  },

  NicknameStyle:{
    textAlign: 'center',
    color: '#511D1D',
    margin: 2,
    fontSize: 10,
  },
  
  BtnBack: {
    
  },
  BtnMenu: {
    
  },
  
    

});


export default Body;