import React from 'react'
import { Text, Image, View ,StyleSheet} from 'react-native'
class InfoHisframe extends React.Component{
        render(){
        return (
        <View>
            <View style={styles.View}>
                <View >
                <Image source={require('../assets/person.png')} style={styles.circlepic}/>
                </View>
            <View>
                <Text style={styles.BoldFont}>{this.props.name}</Text>
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
            paddingTop:15,
            paddingBottom:50,
            
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
            paddingLeft:30,
            fontSize:18,
            color: 'black',
        },
        Font :{
            paddingBottom:1,
            paddingLeft:30,
            fontSize:15,
            color: 'black',
        }
      });

      