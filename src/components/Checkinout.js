import React from 'react' 
import { Text,TouchableOpacity, View,StyleSheet} from 'react-native'
class Checkinout extends React.Component{
    render(){
        return(
                <View style={styles.button}>
                <TouchableOpacity onPress={this.props.onclick} style={this.props.colorclick}>
                <Text style={this.props.styletextclick}>{this.props.textclick}</Text>
                </TouchableOpacity> 
                </View>
        )
    }
}
export default Checkinout;
const styles = StyleSheet.create({

    button:{
        justifyContent: 'center',
        alignItems: 'center',    
        paddingRight: 15,
        paddingTop:33,
        color :"#841584"
          },
  });

