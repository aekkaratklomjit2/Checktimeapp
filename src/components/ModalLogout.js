import React from "react";
import {Modal,Text,View,TouchableOpacity,StyleSheet,Image} from "react-native";

class ButtonLogout extends React.Component{

  render(){
      return(
            <Modal 
            transparent={true}
            visible={this.props.display} 
            animationType = "slide" 
            onRequestClose={ () => console.log('closed') }> 
            <View style={styles.view1}>
                <View style={styles.boxview}>
                 <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:9,paddingBottom:9}}>   
                    <Image source={require('../assets/icon_warnning.png')} />
                </View>
                    <Text style={styles.Font}>{this.props.message}</Text>
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center',paddingTop:33}}>
                    <TouchableOpacity style={{height: 36, width:90, justifyContent: 'center',alignItems: 'center',backgroundColor: '#EAF1F7',paddingRight: 15,padding:10}}
                        onPress={this.props.hide}>
                        <Text  style={{color:'black',fontWeight:'bold'}}>NO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 36, width:90, justifyContent: 'center',alignItems: 'center',backgroundColor: '#0000BB',padding:10}}
                        onPress={this.props.logout}>
                        <Text  style={{color:'white',fontWeight:'bold'}}>YES</Text>
                    </TouchableOpacity>
                </View>    
                 </View>
                </View> 
            </Modal>
      )
    }
}
export default ButtonLogout;
const styles = StyleSheet.create({
    view1: {
        flex: 1,flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxview :{
        width:300,
        height:206,
        backgroundColor:"white",
        padding:2,
        borderRadius: 3,
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
        elevation: 11
    },
    Font :{
        paddingBottom:1,
        paddingLeft:30,
        fontSize:18,
        color: 'black',
    }
  });

  
