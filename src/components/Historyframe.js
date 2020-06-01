import React from "react";
import {Modal,StyleSheet,Text,TouchableOpacity,View} from "react-native";

class Historyframe extends React.Component{
  state = {
    modalVisible: false,
    Historyframeopacity : true
  };
  setModalVisible(visible,opacity) {
    this.setState({Historyframeopacity: opacity,modalVisible: visible});
    this.props.opacityParent(this.state.Historyframeopacity);
  }
      render(){
        let message;
        if(this.props.note==''){message='-'}else{message='เพิ่มเติม'}
        return (
          <View style={styles.midPicture}>
          <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
          <View style={{
                  flex: 1,flexDirection:'column',
                  justifyContent: 'center',
                  alignItems: 'center'}} >
            <View style={styles.modalbox}>
                <Text style={styles.BoldFontModal}>{this.props.date}</Text>
                <Text style={styles.FontModal}>Check-in    :   {this.props.checkin}</Text>
                <Text style={styles.FontModal}>Check-out  :   {this.props.checkout}</Text>
                <Text style={styles.FontModal}>status         :   {this.props.status}</Text>
                <View style={{paddingTop:15}}>
                <Text style={{...styles.FontModal,fontWeight:'bold'}}>NOTE :   </Text><Text style={styles.FontModal}>{this.props.note}</Text></View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.loginbutton}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible,!this.state.Historyframeopacity);
                }}>
                <Text  style={{color:'white',fontWeight:'bold'}}>CLOSE</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>




          
        </Modal>
            <TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
                <View style={styles.midPicture}>
                <View style={styles.Historyframe}>
                <Text style={styles.BoldFont}>{this.props.date}</Text>
                <Text style={styles.Font}>Check-in    :   {this.props.checkin}</Text>
                <Text style={styles.Font}>Check-out  :   {this.props.checkout}</Text>
                <Text style={styles.Font}>status         :   {this.props.status}</Text>
                <Text style={styles.Font}>note             :   {message}</Text>
                </View></View>
            </TouchableOpacity>
          </View>
            
        )
      }     
    }
    export default Historyframe;
    const styles = StyleSheet.create({
        Historyframe: {
            width:240,
            height:150,
            backgroundColor:"white",
            padding:2,
            borderRadius: 10,
            borderWidth : 2,
            paddingTop:15,
            paddingLeft:15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
        },
        Historyframeafter:{
          width:300,
          height:165,
          backgroundColor:"white",
          padding:2,
          borderRadius: 10,
          borderWidth : 2,
          paddingTop:15,
          paddingLeft:15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          opacity:0.1
        },
        BoldFont :{
          paddingLeft:3,
          paddingBottom:9,  
          fontSize:15,
          color: 'black',
          fontWeight:'bold'
        },
        Font :{
          fontSize:12,
          paddingLeft:27 ,
          paddingBottom:6,
          color: 'black',
        },
        midPicture: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop :0,
          paddingBottom:6
      },
        modalbox:{
          width:300,
          height:273,
          backgroundColor:"white",
          padding:2,
          borderRadius: 10,
          borderWidth : 2,
          paddingTop:15,
          paddingLeft:15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        },
        loginbutton:{
          height: 36, 
          width:90, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0000BB',
        },
        button:{
          justifyContent: 'center',
          alignItems: 'center',    
          paddingRight: 15,
          paddingTop:12,
          color :"#841584"
        },
        BoldFontModal :{
          paddingLeft:3,
          paddingBottom:9,  
          fontSize:18,
          color: 'black',
          fontWeight:'bold'
        },
        FontModal :{
          fontSize:15,
          paddingLeft:3 ,
          paddingBottom:6,
          color: 'black',
        },
 
      });

      