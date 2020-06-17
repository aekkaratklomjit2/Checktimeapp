import React, { Children } from "react";
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
        let message,checkin,checkout,date,status,font;
        date = date = this.props.date.substring(0,3)+' '+this.props.date.substring(11,13) +"/"+this.props.date.substring(8,10)+"/"+this.props.date.substring(3,7)
        if(this.props.note==null){message='-'}else{message='เพิ่มเติม'}
        if(this.props.checkin!=''||this.props.checkout!=''){
          checkin = this.props.checkin.substring(11,16)
          checkout =this.props.checkout.substring(11,16)
          } else{
           checkin='-' 
           checkout='-'}
        if(this.props.status=="LEAVE"){
          status=styles.statusLEAVE
          font=styles.fontLEAVE
        }else if(this.props.status=="ATTEND"){
          status=styles.statusATTEND
          font=styles.fontATTEND
        }
        else if(this.props.status=="LATE"){
          status=styles.statusLATE
          font=styles.fontLATE
        }
        else if(this.props.status=="ABSENCE"){
          status=styles.statusABSENCE
          font=styles.fontABSENCE
        }
        return (
          <View style={{...styles.midPicture}}>
          <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
          <View style={{
                  flex: 1,flexDirection:'column',
                  justifyContent: 'center',
                  alignItems: 'center'}} >
            <View style={styles.modalbox}>
                  <Text style={styles.BoldFontModal}>{date}</Text>
                  <View style={styles.rowcolumn}>
                    <Text style={styles.SecBoldFontModal}>Check-in    :   </Text><Text style={styles.FontModal}>{checkin}</Text>
                  </View>
                  <View style={styles.rowcolumn}>
                    <Text style={styles.SecBoldFontModal}>Check-out  :   </Text><Text style={styles.FontModal}>{checkout}</Text>
                  </View>
                  <View style={styles.rowcolumn}>
                    <Text style={styles.SecBoldFontModal}>Status         :   </Text><Text style={styles.FontModal}>{this.props.status}</Text>
                  </View>
                  <View style={{...styles.rowcolumn,paddingTop:39}}>
                    <Text style={{...styles.SecBoldFontModal,fontWeight:'bold'}}>Note :   </Text><Text style={styles.FontModal}>{this.props.note}</Text></View>
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
                <Text style={styles.BoldFont}>{date}</Text>
                <View style={styles.rowcolumn}>
                <Text style={styles.Font}>Check-in     :   </Text><Text style={styles.FontModal}>{checkin}</Text></View>
                <View style={styles.rowcolumn}>
                <Text style={styles.Font}>Check-out  :    </Text><Text style={styles.FontModal}>{checkout}</Text></View>
                <View style={styles.rowcolumn}>
                <Text style={styles.Font}>Status          :   </Text>
                <View style={status}>
                <Text style={font}>{this.props.status}</Text></View></View>
                <View style={styles.rowcolumn}>
                <Text style={styles.Font}>Note             :    </Text><Text style={styles.FontModal}>{message}</Text></View>
                </View></View>
            </TouchableOpacity>
            </View>
        )
      }     
    }
    export default Historyframe;
    const styles = StyleSheet.create({
        Historyframe: {
            width:316,
            height:196,
            backgroundColor:"white",
            padding:2,
            borderRadius: 3,
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
        midPicture: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop :0,
          paddingBottom:6
      },
        modalbox:{
          width:330,
          height:294,
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
          paddingTop:30,
          color :"#841584"
        },
        BoldFontModal :{
          paddingLeft:3,
          paddingBottom:21,  
          fontSize:18,
          color: 'black',
          fontWeight:'bold'
        },
        SecBoldFontModal :{
          paddingLeft:3,
          paddingBottom:3,  
          fontSize:15,
          color: 'black',
          fontWeight:'bold'
        },
        FontModal :{
          fontSize:15,
          paddingLeft:3 ,
          paddingBottom:6,
          color: 'black',
        },
        BoldFont :{
          paddingLeft:3,
          paddingBottom:18  ,  
          fontSize:15,
          color: 'black',
          fontWeight:'bold'
        },
        Font :{
          fontSize:15,
          paddingLeft:27 ,
          paddingBottom:6,
          color: 'black',
          fontWeight:'bold'
        },
        rowcolumn:{
          flexDirection: 'row'
        },
        statusLEAVE:{width:60,height:21,borderWidth:1,alignItems: 'center',backgroundColor:'#E6F7FF',borderColor:"#91D5FF"},
        fontLEAVE:{fontSize:15,color:'#2C9CFF'},
        statusLATE:{width:60,height:21,borderWidth:1,alignItems: 'center',backgroundColor:'#FFD591',borderColor:"#FB9220"},
        fontLATE:{fontSize:15,color:'#FB9220'},
        statusATTEND:{width:60,height:21,borderWidth:1,alignItems: 'center',backgroundColor:'#D5F4BE',borderColor:"#6CCD3D"},
        fontATTEND:{fontSize:15,color:'#6CCD3D'},
        statusABSENCE:{width:72,height:21,borderWidth:1,alignItems: 'center',backgroundColor:'#FFF1F0',borderColor:"#FFBAB6"},
        fontABSENCE:{fontSize:15,color:'#F54851'},
      });

      

