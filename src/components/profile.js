import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons, Feather, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons';
import EvilIcons from '../../node_modules/@expo/vector-icons/EvilIcons';
import Hr from 'react-native-hr-component';


class Profile extends React.Component {
    state={
        ModalVisible: false,
      };
      setModalVisible(visible){
        this.setState({modalVisible: visible});
      }
      static navigationOptions = {
          header:null
      }
      
  render() {
    const {navigation} = this.props;
    const name = navigation.getParam("name");
    const image = navigation.getParam("image");
    const nickname = navigation.getParam("nickname");
    const Address = navigation.getParam("address");
    const institution = navigation.getParam("institution");
    const birthday = navigation.getParam("birthday");
    const facebookID = navigation.getParam("facebookID");
    const twitter = navigation.getParam("twitter");
    const instagram = navigation.getParam("instagram");
    const whatsapp = navigation.getParam("whatsapp");
    const snapchat = navigation.getParam("snapchat");
    const email = navigation.getParam("email")
    let phoneNumber = navigation.getParam("phoneNumber");
    

    if(phoneNumber === null || phoneNumber === ""){
      phoneNumber = whatsapp;
    }else{
      phoneNumber = phoneNumber;
    }
    return (
      
      
      <View style={styles.ProfileContainer}> 
      <Modal 
        transparent={true} 
        visible={this.state.ModalVisible}
       onRequestClose={() => {this.setState({ModalVisible: false})}}
      >
        <View style={styles.ModalContainer}>
        <View style={styles.modalCloseBtn}>
          <TouchableOpacity  onPress={() => {this.setState({ModalVisible: false})}}>
            <EvilIcons name="close-o" size={50} color="red" /> 
            </TouchableOpacity>
            </View>
            <View style={styles.ModalSocialMedia}>
            
            <View style={styles.test}>
              <Text style={styles.modalText}> {nickname} </Text>
              <Text style={styles.modalText}> {birthday} </Text>                
                <View style={styles.socialMedia}>
                  <Entypo name="facebook-with-circle" size={50} color="#3b5998" />
                    <Text style={styles.ModalSocialMediaText}>{facebookID}</Text>
                </View>
                <View style={styles.socialMedia}>
                  <Entypo name="twitter-with-circle" size={50} color="#00aced" />
                    <Text style={styles.ModalSocialMediaText}>@{twitter} </Text>
                </View>
                <View style={styles.socialMedia}> 
                  <Feather name="instagram" size={50} color="#fb3958" />
                    <Text style={styles.ModalSocialMediaText}>{instagram} </Text>
                </View>
                <View style={styles.socialMedia}>
                  <Ionicons name="logo-whatsapp" size={50} color="#34AF23" />
                    <Text style={styles.ModalSocialMediaText}>{whatsapp}</Text>
                </View>
                <View style={styles.socialMedia}>
                  <FontAwesome name="snapchat" size={50} color="#fefc00" />
                    <Text style={styles.ModalSocialMediaText}>{snapchat} </Text>
                </View>
                </View>
              </View>
          </View>
        </Modal> 
        <View style={styles.Profile}>
          <TouchableOpacity>
            <View style={styles.BtnBack}>     
             <Ionicons name="ios-arrow-back" size={30} color="#511D1D" onPress={() => this.props.navigation.goBack()} />
            </View>
          </TouchableOpacity>

            <View>
              <Image source={{uri: image}} style={{width:'100%', height: 300, padding: 10}}  />
                <View style={styles.Name}>
                  <Hr text={nickname} linecolor="#511D1D" textStyle={{
                    textAlign: 'center',
                    color: '#511D1D', 
                    margin: 5,
                    fontSize: 18,
                  }}  
                  />
                  <Text style={styles.NameStyle}>{name}</Text>
               </View>
            </View>
        </View>

          <View style={styles.MoreInfo}>
              <View style={styles.Icon_Text}>
                <Feather name="phone-call" size={30} color="#511D1D" />
                  <Text style={styles.TextMoreInfo}>{phoneNumber} </Text>
                  <TouchableOpacity  onPress={() => {this.setState({ModalVisible: true})}}>
                    <FontAwesome name="user-circle" size={30} color="#511D1D" style={styles.MoreInfoBtn}/>
                  </TouchableOpacity>
              </View>  

            <View style={styles.Icon_Text}>
                <FontAwesome name="institution" size={30} color="#511D1D" />
                <Text style={styles.TextMoreInfo}>{institution}</Text>
            </View>

            <View style={styles.Icon_Text}>
                <Entypo name="email" size={30} color="#511D1D" />
                <Text style={styles.TextMoreInfo}>{email}</Text>
            </View>
            
            <View style={styles.Icon_Text}>
                <Text style={styles.TextMoreInfo}>ADREESS : {Address} </Text>
            </View>

            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ProfileContainer:{
        flex: 1,
        
    },
    ProfileImage: {
        width: '100%',
        height: 250,
        borderRadius: 200,
    },
    BtnBack:{
        margin: 10,
        padding: 4
    },
    Name:{
        margin: 15,
    },
    NameStyle:{
        textAlign: 'center',
        color: '#511D1D',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 15            
    },
    NicknameStyle:{
         
    },
    MoreInfo:{
        flex: 1,
    },
    Icon_Text:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20, 
        marginTop: 5  
    },
    TextMoreInfo:{
        flex: 1,
        marginTop: 10,
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: '#511D1D'  
    }, 
    MoreInfoBtn:{
        margin: 10
    },

    /** Modal  */
    
    ModalContainer:{
      backgroundColor: '#ffff',
      borderRadius: 20,
      margin: 2,   
    },
    modalCloseBtn:{
     marginTop: 20,
     alignItems: "flex-start"
    },
    modalText:{
      textAlign: 'center',
      color: '#511D1D',
      fontWeight: 'bold',
    },
    ModalSocialMedia:{
      alignItems: 'center'
    },
    socialMedia:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
      padding: 10,
    },
    ModalSocialMediaText:{
      textAlign: 'center',
      marginLeft: 20,
      color: "#511D1D",
      fontWeight: 'bold',
    },
});

export default Profile;