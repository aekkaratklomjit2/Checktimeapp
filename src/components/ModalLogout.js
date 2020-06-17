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
            <View style={styles.containview}>
                <View style={styles.boxview}>
                 <View style={styles.FirstViewBox}>   
                    <Image style={{width:51,height:51}} source={require('../assets/icon_warnning.png')} />
                    <Text style={{...styles.Font,paddingTop:12}}>{this.props.message}</Text>
                    </View>
                <View style={styles.SecViewBox}>
                    <View style={styles.ThirdViewBox}>
                    <TouchableOpacity style={{...styles.ButtonTouch,backgroundColor: '#EAF1F7'}}
                        onPress={this.props.hide}>
                        <Text  style={{color:'black',fontWeight:'bold',fontSize:15}}>NO</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.ThirdViewBox}>
                    <TouchableOpacity style={{...styles.ButtonTouch,backgroundColor: '#0000BB'}}
                        onPress={this.props.logout}>
                        <Text  style={{color:'white',fontWeight:'bold',fontSize:15}}>YES</Text>
                    </TouchableOpacity>
                    </View>
                </View>    
                 </View>
                </View> 
            </Modal>
      )
    }
}
export default ButtonLogout;
const styles = StyleSheet.create({
    containview: {
        flex: 1,flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxview :{
        width:270,
        height:200,
        backgroundColor:"white",
        borderRadius: 3,
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:1,
        fontSize:18,
        color: 'black',
    },
    FirstViewBox:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:21,
        paddingBottom:0
    },
    SecViewBox:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:18
    },
    ThirdViewBox:{
        justifyContent: 'center',alignItems: 'center',padding:9
    },
    ButtonTouch:{
        height: 33, width:70, justifyContent: 'center',alignItems: 'center',
    }
  });

  
