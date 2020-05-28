import React, { Component, useState }  from 'react'
import { View,ImageBackground,ScrollView,Alert,Modal,Text,TouchableHighlight} from 'react-native'
import {styles} from '../assets/css.js';
import { Historyframe,InfoHisframe } from '../components/';


export default class report extends React.Component {
    constructor(prop){
        super(prop)
        this.state ={
          email : '',
          password : '',
          errorMessage : null,
          Location : '',
          latitude : '',
          longitude :'',
          time : '',
          name : '',
          modalVisible: null
        }
      }
      setopacityParent = (modalVisible) => {
        this.setState({modalVisible: modalVisible});
    }

    render() {
        return (
        <ImageBackground source={require('../assets/bg_his.png')} style={styles.bg}>
          <ScrollView>
            <View style={{...this.state.modalVisible
                              ? styles.opacity2
                              : styles.opacity1}}>
                <InfoHisframe name="Aekkarat Klomjit" username="aekkarat_"/>
                <Historyframe date ="Th , 14/05/2563"
                              checkin="09 : 50 am"
                              checkout="06 : 10 pm"
                              status="personal leave"
                              note="Traveled to visit relatives in Bangkok."
                              opacityParent={this.setopacityParent}
                          />
                 <Historyframe date ="Fri , 15/05/2563"
                              checkin="09 : 45 am"
                              checkout="06 : 30 pm"
                              status="on time"
                              note=""
                              opacityParent={this.setopacityParent}
                          /> 
                 <Historyframe date ="Fri , 15/05/2563"
                              checkin="09 : 45 am"
                              checkout="06 : 30 pm"
                              status="on time"
                              note=""
                              opacityParent={this.setopacityParent}
                          /> 
                 <Historyframe date ="Fri , 15/05/2563"
                              checkin="09 : 45 am"
                              checkout="06 : 30 pm"
                              status="on time"
                              note=""
                              opacityParent={this.setopacityParent}
                          /> 
              </View>
            </ScrollView>
          </ImageBackground>
        )
      }
    }