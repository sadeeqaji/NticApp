import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'
import call from 'react-native-phone-call'
import { withNavigation } from 'react-navigation';

import Data from './Data';
import Profile from './profile';

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
      
            <View style={styles.ImageContainer} test = {console.log(this.props.name)} >
            
             
                <View style={styles.Name_Icon}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile", {name: this.props.name,
                  image: this.props.image,
                  nickname: this.props.nickname,
                  address: this.props.address,
                  institution: this.props.institution,
                  birthday: this.props.birthday,
                  facebookID: this.props.facebookID,
                  twitter: this.props.twitter,
                  instagram: this.props.instagram,
                  snapchat: this.props.snapchat,
                  whatsapp: this.props.whatsapp,
                  email: this.props.email,
                  phoneNumber: this.props.phoneNumber,
                  
                  })} >
                   <Image source={{uri: this.props.image, cache: 'only-if-cached',}} style={{width:150, height:150, borderRadius: 200/2, margin: 10}}   />
                    
                    <Text style={styles.NicknameStyle} >{this.props.nickname}</Text>
                </TouchableOpacity>
                <Text style={styles.NameStyle}>{this.props.name}</Text>

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
        flexDirection: 'column',
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


export default withNavigation(Body);