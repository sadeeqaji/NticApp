import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons, Feather, FontAwesome, MaterialIcons, Entypo} from '@expo/vector-icons';


class ModalScreen extends React.Component {
    state={

        ModalVisible: false,
      };

      setModalVisible(visible){
        this.setState({modalVisible: visible});
      }
    

      
  render() {
    
    return (
      
      <View style={styles.ProfileContainer}>
          <Modal animationType= "slide" 
        transparent={true}
        visible={this.setState.ModalVisible}
        onRequestClose={() => {alert('modal closed')}}
      >
      </Modal>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    
});

export default ModalScreen;