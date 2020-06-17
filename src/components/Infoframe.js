import React from 'react'
import { Text, Image, View ,StyleSheet} from 'react-native'
import BaseUrl from '../config/BaseUrl.json'
    
class Infoframe extends React.Component{
        render(){
        let picturepossition;
        if(this.props.positionname=='Web Dev'){
            picturepossition = require('../assets/icon_work.png')
        }else if(this.props.positionname=='C level (CEO)'){
            picturepossition = require('../assets/Position/icon_work_ceo.png')
        }else if(this.props.positionname=='C-Level Corporate'){
            picturepossition = require('../assets/Position/icon_work_C-Level_Corporate.png')
        }else if(this.props.positionname=='Software Quality Assurance'){
            picturepossition = require('../assets/Position/icon_work_Software_Quality_Assurance.png')
        }else if(this.props.positionname=='Graphic Design'){
            picturepossition = require('../assets/Position/icon_work_Graphic_Design.png')
        }else if(this.props.positionname=='Mobile Developer'){
            picturepossition = require('../assets/Position/icon_work_Mobile_Developer.png')
        }else if(this.props.positionname=='Frontend Developer'){
            picturepossition = require('../assets/Position/icon_work_Frontend_Developer.png')
        }else if(this.props.positionname=='Backend Devloper'){
            picturepossition = require('../assets/Position/icon_work_Backend_Devloper.png')
        }else if(this.props.positionname=='Manager'){
            picturepossition = require('../assets/Position/icon_work_Manager.png')
        }else if(this.props.positionname=='Admin'){
            picturepossition = require('../assets/Position/icon_work_admin.png')
        }else if(this.props.positionname=='Marketing'){
            picturepossition = require('../assets/Position/icon_work_Marketing.png')
        }
        return (
        <View>
            <View style={styles.midPicture}>
            <Image source={{uri: BaseUrl.BaseUrl+'/'+this.props.image}}style={styles.circlepic}/>
            </View>
            <View style={styles.midPicture}>
            <View style={styles.rowcolumn}>
              <Text style={styles.BoldFont}>{this.props.firstname} </Text>
              <Text style={styles.BoldFont}>{this.props.lastname} </Text>
              <Text style={styles.BoldFont}>({this.props.nickname})</Text>
              </View>
              <Text style={styles.Font}>#{this.props.username}</Text>
              <View style={styles.controlframe}>
                <Image source={picturepossition} style={styles.Image}/>
                <View><Text style={styles.BasicFont}>Position</Text>
                <Text style={styles.Font}>{this.props.positionname}</Text></View>
              </View>
            </View> 
        </View>
        )
        }
    }
    export default Infoframe;
    const styles = StyleSheet.create({
        midPicture: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom:21,
        },
        circlepic: {
            width: 120, 
            height: 120, 
            borderRadius: 200/3,
            resizeMode: "cover",
            borderColor: 'black',
            borderWidth:2
        },
        BoldFont :{
            paddingTop:21,
            paddingBottom:5,
            fontSize:21,
            color: 'black',
        },
        Font :{
            paddingBottom:5,
            color: 'black',
            fontSize:15
              
        },
        rowcolumn:{
            flexDirection: 'row'
          },
          controlframe: {
            paddingTop:15,
            width:300,
            height:52,
            flexDirection:"row",
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom : 21,
            paddingTop: 30
            },
        Image: {
            width: 36, 
            height: 36,
            },
        Font :{
            paddingLeft:20,
            fontSize:15,
            color:'black',
            fontWeight:'bold'
            },
        BasicFont :{
              paddingLeft:20,
              fontSize:12,
              color:'black'
              },
        midPicture: {
                paddingTop:21,
                justifyContent: 'center',
                alignItems: 'center',
            },
      });

      