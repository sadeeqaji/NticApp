import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';
import { Ionicons, } from '@expo/vector-icons';
import {createDrawerNavigator} from 'react-navigation';

import LoginScreen from './LoginScreen';
import AboutScreen from './AboutScreen';

class Header extends React.Component {
  static navigationOptions = {
    header:null
};
  render() {
    
    return (
        <View style={styles.HeaderContainer}>
        <View style={styles.header}>
      
      <TouchableOpacity >
      <View style={styles.BtnBack}>     
        <Ionicons name="ios-arrow-back" size={50} color="#511D1D" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.BtnMenu}>
        <Ionicons name="md-menu" size={50} color="#511D1D" />
        </View>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

AppNavigatorDrawer = createDrawerNavigator({
  Login: LoginScreen,
  About: AboutScreen
})


const styles = StyleSheet.create({
  HeaderContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#511D1D',
    shadowColor: '#511D1D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
  },
  
});

export default Header;