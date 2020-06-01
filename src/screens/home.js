import React from 'react'
import { View,AsyncStorage,Alert,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {styles} from '../assets/css.js';
import * as Location from 'expo-location';
import moment from 'moment';
import {Positionframe,Infoframe,Checkinout,ModalLogout} from '../components/';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { set } from 'react-native-reanimated';
const image = require('../assets/bg_checkin.png');
const image1 =require('../assets/bg_checkout.png');
export default class home extends React.Component {
    constructor(props){
        super(props)
        this.state ={
          username : '',
          checkState : '', 
          loaded: false,
          LoginAlert: false,
          display : false,
          opacitydisplay : false
        }
        this.onLoad();
      }
      triggerLogout(visible,opacity) {
        this.setState({display: visible,opacitydisplay:opacity})
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
                let setdate = moment().format('h');
                let setdate1 = moment().format('mm');
                let setdate2 = moment().format('a');
                setdate = parseInt(setdate,'10')
                setdate1 = parseInt(setdate1,'10')
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
                await AsyncStorage.removeItem('Async_username')
                console.log("OK Pressed")
                this.triggerLogout(false)   
                Actions.loading()
                }
    render() {
      let buttoncheckin,buttoncheckout,background;
      if (this.state.checkState==false||this.state.checkState==null) {
        background = image;
        buttoncheckin = <Checkinout onclick={this.checkin}
                              colorclick ={styles.colorbuttonuse}
                              styletextclick={styles.Textuse}
                              textclick="CHECK IN"/>
        buttoncheckout = <Checkinout onclick={null}
                              colorclick ={styles.colorbuttonuseunuse}
                              styletextclick={styles.Textunuse}
                              textclick="CHECK OUT"/>
      } else {
        background = image1;
        buttoncheckin = <Checkinout onclick={null}
                              colorclick ={styles.colorbuttonuseunuse}
                              styletextclick={styles.Textunuse}
                              textclick="CHECK IN"/>
        buttoncheckout = <Checkinout onclick={this.checkout}
                              colorclick ={styles.colorbuttonuse}
                              styletextclick={styles.Textuse}
                              textclick="CHECK OUT"/>
      }
        return (
      <ImageBackground source={background} style={{...styles.bg}}>
        <ScrollView>
          <View style={{...this.state.opacitydisplay
                            ? styles.opacity2
                            : styles.opacity1}}>
          <View style={styles.container}>
              <View style={{position: 'absolute',right: -54,top: -9,paddingTop:0,}}>
                  <TouchableOpacity onPress={() => {this.triggerLogout(true,true)}} style={{ height: 52, 
                                                width:102,
                                                justifyContent: 'center',
                                                alignItems: 'center',}}>
                  <Image source={require('../assets/icon_logout.png')} style={{width:30,height:30}}/>
                  </TouchableOpacity>
              </View>
              <Infoframe name="Aekkarat Klomjit (Saam)" username="aekkarat_"/>
              <Positionframe positionname='Graphic Design'/> 
              <View style={{flexDirection:"row",justifyContent: 'center',alignItems: 'center',paddingTop:30}}>        
              {buttoncheckin}
              {buttoncheckout} 
              </View>            
          <ModalLogout
            message = "Do you want to log-out?"
            display = {this.state.display}
            hide ={() => this.triggerLogout(false)}
            logout = {() => this.logout()}
          />
            </View>
            </View>
          </ScrollView>
        </ImageBackground>
        )
      }
} 