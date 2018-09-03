import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ListView, FlatList } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'




import Body from "./body"

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj6du27qn3opo0121ob9gpefk' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const allProfilesQuery = gql`
query {
  allProfiles(orderBy: createdAt_DESC) {
    id
    imgUrl
    name
    nickname
    phoneNumber
    address
    futureInstitution
    email
    birthday
    facebookID
    twitter
    instagramID
    snapchatID
    whatsapp
    
  }
}`


class Data extends React.Component {

  static navigationOptions = {
    header: null,
    };
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
          dataSource: ds.cloneWithRows([]),
          modalVisible: false,
          user: undefined,
        }
    
      }

      componentWillReceiveProps(nextProps) {
        if (!nextProps.allProfilesQuery.loading && !nextProps.allProfilesQuery.error) {
          const {dataSource} = this.state
          this.setState({
            dataSource: dataSource.cloneWithRows(nextProps.allProfilesQuery.allProfiles),
          })
        }
      }
    
      render () {
        if (this.props.allProfilesQuery.loading) {
          return (<ActivityIndicator size="large" color="#511D1D" />)
        }
    return (
      <ApolloProvider client={client}>
        
      <ListView 
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(Person) => (
          <Body name={Person.name} 
                image={Person.imgUrl}
                nickname={Person.nickname}
                phoneNumber={Person.phoneNumber}
                institution={Person.futureInstitution}
                email={Person.email}
                address={Person.address}
                birthday={Person.birthday}
                facebookID={Person.facebookID}
                twitter={Person.twitter}
                instagram={Person.instagramID}
                whatsapp={Person.whatsapp}
                snapchat={Person.snapchatID}
                
                
      />
          

        )}
      
      />

        
       
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  
})

export default graphql(allProfilesQuery, {name: 'allProfilesQuery'})(Data)
