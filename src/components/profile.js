import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons, Feather, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons';
import EvilIcons from '../../node_modules/@expo/vector-icons/EvilIcons';



class Profile extends React.Component {
    state={
        
        name: 'Sadiq Mustapha Aji',
        nickname: 'Sadiq Aji',
        ModalVisible: false,
      };
      setModalVisible(visible){
        this.setState({modalVisible: visible});
      }
      static navigationOptions = {
          header:null
      }
      
  render() {
    
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
              <Text style={styles.modalText}> Sadiq Aji</Text>
              <Text style={styles.modalText}> 23/Febuary </Text>                
                <View style={styles.socialMedia}>
                  <Entypo name="facebook-with-circle" size={50} color="#3b5998" />
                    <Text style={styles.ModalSocialMediaText}>Sadiq Aji Mustapha </Text>
                </View>
                <View style={styles.socialMedia}>
                  <Entypo name="twitter-with-circle" size={50} color="#00aced" />
                    <Text style={styles.ModalSocialMediaText}>@Sadeeq_Aji </Text>
                </View>
                <View style={styles.socialMedia}> 
                  <Feather name="instagram" size={50} color="#fb3958" />
                    <Text style={styles.ModalSocialMediaText}>Sadeeq_Aji </Text>
                </View>
                <View style={styles.socialMedia}>
                  <Ionicons name="logo-whatsapp" size={50} color="#34AF23" />
                    <Text style={styles.ModalSocialMediaText}>+2347067307317 </Text>
                </View>
                <View style={styles.socialMedia}>
                  <FontAwesome name="snapchat" size={50} color="#fefc00" />
                    <Text style={styles.ModalSocialMediaText}>Sadeeq_Aji </Text>
                </View>
                </View>
              </View>
          </View>
        </Modal> 
        <View style={styles.Profile}>
          <TouchableOpacity>
            <View style={styles.BtnBack}>     
             <Ionicons name="ios-arrow-back" size={50} color="#511D1D" onPress={() => this.props.navigation.goBack()} />
            </View>
          </TouchableOpacity>

            <View>
              <Image source={require('../asset/sadiq.jpg')} resizeMode="center" style={styles.ProfileImage} />
                <View style={styles.Name}>
                  <Text style={styles.NicknameStyle} >{this.props.nickname}</Text>
                  <Text style={styles.NameStyle}>{this.state.name}</Text>
               </View>
            </View>
        </View>

          <View style={styles.MoreInfo}>
              <View style={styles.Icon_Text}>
                <Feather name="phone-call" size={50} color="#511D1D" />
                  <Text style={styles.TextMoreInfo}>07067307317 </Text>
                  <TouchableOpacity  onPress={() => {this.setState({ModalVisible: true})}}>
                    <FontAwesome name="user-circle" size={50} color="#511D1D" style={styles.MoreInfoBtn}/>
                  </TouchableOpacity>
              </View>  

            <View style={styles.Icon_Text}>
                <FontAwesome name="institution" size={50} color="#511D1D" />
                <Text style={styles.TextMoreInfo}>Abubakar Tafawa Balewa University </Text>
            </View>

            <View style={styles.Icon_Text}>
                <Entypo name="email" size={50} color="#511D1D" />
                <Text style={styles.TextMoreInfo}>sadiqajimustapha@gmail.com </Text>
            </View>
            
            <View style={styles.Icon_Text}>
                <Text style={styles.TextMoreInfo}>ADREESS : Hausari Ward Yanrake Street, Nguru Local government, Yobe State Nigeria.  </Text>
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
        fontSize: 20            
    },
    NicknameStyle:{
         textAlign: 'center',
         color: '#511D1D',
         margin: 2,
    },
    MoreInfo:{
        flex: 1,
    },
    Icon_Text:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,   
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