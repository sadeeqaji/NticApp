import React from 'react';
import { StyleSheet,  View, StatusBar } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import {createStackNavigator} from "react-navigation";


import Header from './src/components/header';
import Body from './src/components/body';
import Profile from './src/components/profile';



const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj6du27qn3opo0121ob9gpefk' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  
  static navigationOptions = {
header: null,
};

  render() {
    return (
    
      <ApolloProvider client={client} >
      <StatusBar hidden={true} />
        <View style={styles.container} >
               
        <AppStackNavigator navigation={this.props.navigation}/>
        </View>
       </ApolloProvider> 
      
    );
 
  }
}

const AppStackNavigator = createStackNavigator({
  Home : Body,
  Profile : Profile,
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
