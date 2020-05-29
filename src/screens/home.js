import React from 'react'
import { View,AsyncStorage,Alert,ImageBackground,TouchableOpacity,Imagem,Modal,Image,Text} from 'react-native'
import {styles} from '../assets/css.js';
import * as Location from 'expo-location';
import moment from 'moment';
import {Positionframe,Infoframe,Checkinout} from '../components/';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
const image = require('../assets/bg_checkin.png');
const image1 =require('../assets/bg_checkout.png');



export default class home extends React.Component {
    constructor(prop){
        super(prop)
        this.state ={
          username : '',
          checkState : '', 
          loaded: false,
          LoginAlert: false,
        }
        this.onLoad();
      }
        onLoad = async () => {
            try {
                const username = await AsyncStorage.getItem('Async_username')
                this.setState({username : username})
                console.log(this.state.username)
                console.log(this.state.checkState)
                const checkState  = await AsyncStorage.getItem('Async_checkState')                
                this.setState({checkState  : checkState })
            } catch (error) {
                //console.log("onLoad"+error)
            }
        }
        checkin = async () =>{
          Alert.alert(
            'Alert Title',
            'Do you want to Check in ?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: async () => {
                console.log('OK Pressed')
                console.log("click Checkin")
                console.log(this.state.checkState)
                let { status } = await Location.requestPermissionsAsync();
                console.log(status)
                let date = moment()
                    .utcOffset('+07:00')
                    .format('LT')
                console.log(date)
                if (status !== 'granted') {
                  setErrorMsg('Permission to access location was denied');
                }
                const location = await Location.getCurrentPositionAsync({})
                console.log(location)
                console.log(location.coords.latitude)
                console.log(location.coords.longitude)
                if(location.coords.latitude>16.44190&&location.coords.longitude>102.80
                  &&location.coords.latitude<16.4430&&location.coords.longitude<102.808947){
                  console.log("location complete")
                  Alert.alert(
                    'Alert',
                    'Check-in is completed at '+date,
                    [
                      { text: 'OK', onPress: async() => {console.log('OK Pressed')
                      this.setState({checkState : true}) 
                      try {
                        await AsyncStorage.setItem('Async_checkState', this.state.checkState)
                      } catch (e) {
                        console.log(e)
                      }
                     }}
                    ],
                    { cancelable: false }
                  );
                }
                else{
                  console.log(" Check-in is not successful you are not in the office!!")
                  Alert.alert(
                    'Alert',
                    'Check-in is not successful you are not in the office!! ' + date,
                    [
                      { text: 'OK', onPress: () => {
                        console.log('OK Pressed') 
                        }
                      }
                    ],
                    { cancelable: false }
                  );
                }
            }
          },
            
            ],
            { cancelable: false }
          );
        }

        checkout = async () =>{
          Alert.alert(
            "Alert Title",
            "Do you want to check out",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: async() => {
                console.log("OK Pressed") 
                let { status } = await Location.requestPermissionsAsync();
                console.log(status)
                let date = moment()
                    .utcOffset('+07:00')
                    .format('LT')
                console.log(date)
                if (status !== 'granted') {
                  setErrorMsg('Permission to access location was denied');
                }
                const location = await Location.getCurrentPositionAsync({})
                  Alert.alert(
                    'Alert',
                    'Check-out is completed at '+date,
                    [
                      { text: 'OK', onPress: async() => 
                      {console.log('OK Pressed') 
                      console.log(location)
                      console.log(location.coords.latitude)
                      console.log(location.coords.longitude)
                      this.setState({checkState : false})
                      try {
                        await AsyncStorage.setItem('Async_checkState', this.state.checkState)
                      } catch (e) {
                        console.log(e)
                      }
                    }}
                    ],
                    { cancelable: false }
                  );
                }
              }
            ],
            { cancelable: false }
          );
        }
        logout = async () =>{
          Alert.alert(
            "Alert",
            "Do you want to log out?",
            [
            {
              text: "NO",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
              ,
              { text: "YES", onPress: async () =>{
                //const username = await AsyncStorage.getItem('Async_username')
                //console.log('Before '+username)
                await AsyncStorage.removeItem('Async_username')
                console.log("OK Pressed")   
                Actions.loading()
                }
            }
            ],
            { cancelable: false }
          );
        }
        LoginAlert(visible) {
          this.setState({LoginAlert: visible});
        }
    render() {
      let button,background;
      if (this.state.checkState==false||this.state.checkState==null) {
        background = image;
        button = <Checkinout onclickcheckin={this.checkin} 
                             colorcheckin={styles.colorbuttonuse} 
                             colorcheckout={styles.colorbuttonuseunuse}
                             textcheckin={styles.Textuse}
                             textcheckout ={styles.Textunuse}/>
      } else {
        background = image1;
        button = <Checkinout onclickcheckout={this.checkout} 
                            colorcheckin={styles.colorbuttonuseunuse} 
                            colorcheckout={styles.colorbuttonuse}
                            textcheckin={styles.Textunuse}
                            textcheckout ={styles.Textuse}/>
      }
        return (
      <ImageBackground source={background} style={styles.bg}>
        <ScrollView>
          <View style={styles.container}>
              <View style={{position: 'absolute',right: -12,top: 0,paddingTop:12,}}>
                  <TouchableOpacity onPress={() => {this.LoginAlert(true)}} style={{ height: 52, 
                                                width:102,
                                                justifyContent: 'center',
                                                alignItems: 'center',}}>
                  <Image source={require('../assets/icon_logout.png')} style={{width:30,height:30}}/>
                  </TouchableOpacity>
              </View>
              <Infoframe name="Aekkarat Klomjit (Saam)" username="aekkarat_"/>
              
              <Positionframe positionname='Graphic Design'/>          
              {button}
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
                              <View style={{           justifyContent: 'center',
          alignItems: 'center',    
          paddingRight: 15,
          paddingTop:33,
          color :"#841584"}}>
                                <TouchableOpacity style={{          height: 36, 
          width:90, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0000BB',}}
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
            </View>
          </ScrollView>
        </ImageBackground>
        )
      }
} 