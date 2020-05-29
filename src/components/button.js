import React from "react";
import {Modal,StyleSheet,Text,TouchableOpacity,View} from "react-native";

class button extends React.Component{
  state = {
    modalVisible: false,
    Historyframeopacity : true
  };
  setModalVisible(visible,opacity) {
    this.setState({Historyframeopacity: opacity,modalVisible: visible});
    this.props.opacityParent(this.state.Historyframeopacity);
  }
  render(){
                <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.LoginAlert} onRequestClose={() => {alert('Modal has been closed.');}}>
            <View style={{
                flex: 1,flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center'}} >
            <View style={{          width:300,
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
                elevation: 11,}}>
                <Text style={styles.BoldFontModal}>Do you want to log-out?</Text>                             
            <View style={{           justifyContent: 'center',alignItems: 'center',paddingRight: 15,paddingTop:33,color :"#841584"}}>
                <TouchableOpacity style={{height: 36, width:90, justifyContent: 'center',alignItems: 'center',backgroundColor: '#0000BB',}}
                onPress={() => {
                    this.LoginAlert(!this.state.LoginAlert);
                }}>
                <Text  style={{color:'white',fontWeight:'bold'}}>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 36, width:90, justifyContent: 'center',alignItems: 'center',backgroundColor: '#0000BB',}}
                onPress={() => {
                    this.logout(), this.LoginAlert(!this.state.LoginAlert);}}>
                <Text  style={{color:'white',fontWeight:'bold'}}>YES</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
            </Modal>
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
          paddingTop:33,
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
