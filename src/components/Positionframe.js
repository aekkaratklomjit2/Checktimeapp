import React from 'react'
import { Text, Image, View ,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';
class Positionframe extends React.Component{
        render(){
        return (
            <View style={styles.midPicture}>
              <View style={styles.controlframe}>
                <Image source={require('../assets/icon_work.png')} style={styles.Image}/>
                <View><Text style={styles.BasicFont}>Position</Text>
                <Text style={styles.Font}>{this.props.positionname}</Text></View>
              </View>
            </View>
        )     
      }
  }
  export default Positionframe;
  
    const styles = StyleSheet.create({
        controlframe: {
            paddingTop:15,
            width:300,
            height:52,
            backgroundColor:"white",
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
                paddingTop:15,
                justifyContent: 'center',
                alignItems: 'center',
            },
      });

      