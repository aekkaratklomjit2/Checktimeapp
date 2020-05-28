import React from 'react'
import { Text, Image, View ,StyleSheet} from 'react-native'
class Infoframe extends React.Component{
        render(){
        return (
        <View>
            <View style={styles.midPicture}>
                <Image source={require('../assets/person.png')} style={styles.circlepic}/>
            </View>
            <View style={styles.midPicture}>
              <Text style={styles.BoldFont}>{this.props.name}</Text>
              <Text style={styles.Font}>{this.props.username}</Text>
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
            paddingTop :15,
            paddingBottom:6
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
            paddingBottom:5,
            fontSize:21,
            color: 'black',
        },
        Font :{
            paddingBottom:5,
            color: 'black',
            fontSize:15
              
        }
      });

      