import React from 'react'
import { Text, Image, View ,StyleSheet} from 'react-native'
import BaseUrl from '../config/BaseUrl.json'
class InfoHisframe extends React.Component{
        render(){
        return (
        <View>
            <View style={styles.View}>
                <View >
                <Image source={{uri: BaseUrl.BaseUrl+'/'+this.props.image}}style={styles.circlepic}/>
                </View>
            <View>
            <View style={styles.rowcolumn}>
                <Text style={{...styles.BoldFont,paddingLeft:30,}}>{this.props.firstname}</Text>
                <Text style={styles.BoldFont}>  {this.props.lastname}</Text>
            </View>
                <Text style={styles.Font}>{this.props.username}</Text>
            </View>
            </View>
        </View>
            )
        }     
    }
    export default InfoHisframe;
    const styles = StyleSheet.create({
        View: {
            flexDirection:"row",
            alignItems: 'center',
            paddingTop:12,
            paddingBottom:21,
        },
        circlepic: {
            width: 72, 
            height: 72, 
            borderRadius: 200/3,
            borderColor: 'black',
            borderWidth:1
        },
        BoldFont :{
            paddingBottom:1,
            fontSize:18,
            fontWeight:'bold',
            color: 'black',
        },
        Font :{
            paddingBottom:1,
            paddingLeft:30,
            fontSize:15,
            color: 'black',
        },
        rowcolumn:{
            flexDirection: 'row'
          },
      });

      