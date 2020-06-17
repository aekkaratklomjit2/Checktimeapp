import React from 'react'
import { View,AsyncStorage,Alert,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {styles} from '../assets/css.js';
import * as Location from 'expo-location';
import moment from 'moment';
import {Infoframe,Checkinout,ModalLogout} from '../components/';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import {get} from '../helper/request';
const imagecheckin = require('../assets/bg_checkin.png');
const imagecheckout =require('../assets/bg_checkout.png');
const imagecheckinlate =require('../assets/bg_late.png');
export default class home extends React.Component {
    constructor(props){
        super(props)
        this.state ={
          access_Token : '',
          loaded: false,
          LoginAlert: false,
          display : false,
          opacitydisplay : false,
          Data : [],
          checkState :null, 
          ontime : '',
        }
        this.onLoad();
      }
      deleteOntime = async()=>{
        await AsyncStorage.removeItem('ontime')
        }

      triggerLogout(visible,opacity) {
        this.setState({display: visible,opacitydisplay:opacity})
        }

      setOntime = async(status)=>{
          await AsyncStorage.setItem('ontime',status)
          //await AsyncStorage.setItem('Check',true)
        }

      onLoad = async () => {
                const access_Token = await AsyncStorage.getItem('access_Token')
                const ontime = await AsyncStorage.getItem('ontime')
                this.setState({access_Token : access_Token,ontime : ontime})
                get('/user/profile')
                 .then(res => {
                   //const Data = res.data;
                   this.setState({ Data : res.data }); 
                 })

                 get('/user/history/1')
                 .then(res => {
                  if(res.data[0]!=null){
                    if(res.data[0].created_at.substring(3,13)==moment().format().substring(0,10)){
                      if(res.data[0].checkout_at!=''&&res.data[0].checkout_at!=''){
                        this.setState({checkState : 'checkin-checkout'})
                        console.log('checkin-checkout')
                  }else{
                      if(res.data[0].checkout_at==''){
                            this.setState({checkState : 'checkout'})
                      }else{this.setState({checkState : 'checkin'})}
                    }
                  }
                }
              })
          }

      location = async() =>{
          let { status } = await Location.requestPermissionsAsync();
          let date = moment().format('HH:mm'); 
          if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                  }
          const location = await Location.getCurrentPositionAsync({})
          if(location.coords.latitude>16.44190&&location.coords.longitude>102.80&&location.coords.latitude<16.4430&&location.coords.longitude<102.808947){
              Alert.alert(
                "","Check-in completed at "+ date,
                [
                  { text: "YES", onPress: () => 
                    {   console.log("YES Pressed") 
                        get('/user/checkin')
                        .then(res => {
                        this.setState({ontime : res.data.status,checkState : 'checkout'})
                        this.setOntime(res.data.status)
                      })
                    }
                }
                ],
                { cancelable: false }
            );
          }else{
              Alert.alert(
                '','Check-in does not complete. You are not in the office!!' ,
                [
                  { text: 'YES', onPress: () => 
                    {}
                  }
                ],
                { cancelable: false }
              );
          }
        }

      checkin = async () =>{
          Alert.alert(
            "","Do you want to check-in?",
            [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "YES", onPress: () =>{
                this.location()}
              }
            ],
            { cancelable: false }
          );
       }

      checkout = async () =>{
          Alert.alert(
            "","Do you want to check-out?",
            [
              {
                text: "NO",
                onPress: () => console.log("NO Pressed"),
                style: "cancel"
              },
              { 
                text: "YES", onPress: async() => {
                let date = moment().format('HH:mm'); 
                  Alert.alert(
                    '','Check-out completed at '+date,
                    [
                      { text: 'YES', onPress: async() => 
                        {
                          console.log('YES Pressed') 
                          get('/user/checkout')
                          .then(res => {
                          this.deleteOntime()
                          this.setState({checkState : 'checkin-checkout'})
                        })
                        }
                    }
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
          get('/user/logout')
          .then(res => {
            console.log(res.data)
            })
          await AsyncStorage.removeItem('access_Token')
          console.log("YES Pressed")
          this.triggerLogout(false)
          Actions.loading()
       }

    render() {
      let buttoncheckin,buttoncheckout,background;
      if (this.state.checkState=='checkin'||this.state.checkState==null) {
        background = imagecheckin;
        buttoncheckin = <Checkinout onclick={this.checkin}
                              colorclick ={styles.colorbuttonuse}
                              styletextclick={styles.Textuse}
                              textclick="CHECK IN"/>
        buttoncheckout = <Checkinout onclick={null}
                              colorclick ={styles.colorbuttonuseunuse}
                              styletextclick={styles.Textunuse}
                              textclick="CHECK OUT"/>
      }else if(this.state.checkState=='checkout'){
        
      if(this.state.ontime=="LATE"){
        background = imagecheckinlate;
      }else{
          background = imagecheckout;
        }
        buttoncheckin = <Checkinout onclick={null}
                        colorclick ={styles.colorbuttonuseunuse}
                        styletextclick={styles.Textunuse}
                        textclick="CHECK IN"/>
        buttoncheckout = <Checkinout onclick={this.checkout}
                        colorclick ={styles.colorbuttonuse}
                        styletextclick={styles.Textuse}
                        textclick="CHECK OUT"/>

      }else if(this.state.checkState=='checkin-checkout'){
        background = imagecheckin;
        buttoncheckin = <Checkinout onclick={null}
                              colorclick ={styles.colorbuttonuseunuse}
                              styletextclick={styles.Textunuse}
                              textclick="CHECK IN"/>
        buttoncheckout = <Checkinout onclick={null}
                              colorclick ={styles.colorbuttonuseunuse}
                              styletextclick={styles.Textunuse}
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
              {this.state.Data.map((item)=>(
              <Infoframe key={item.nickname} firstname={item.firstname} lastname={item.lastname} nickname={item.nickname} username={item.username} positionname={item.position} image={item.image}/> ))}
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