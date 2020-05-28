import React from 'react' 
import { Text,TouchableOpacity, View,StyleSheet} from 'react-native'
class Checkinout extends React.Component{
    render(){
        return(
            <View style={{flexDirection:"row",justifyContent: 'center',alignItems: 'center',paddingTop:30}}>
                <View style={styles.button}>
                 <TouchableOpacity key='buttoncheckin' onPress={this.props.onclickcheckin} style={this.props.colorcheckin}>
                    <Text style={this.props.textcheckin}>CHECK IN</Text>
                  </TouchableOpacity> 
                </View>
                <View style={styles.button}>
                 <TouchableOpacity key='buttoncheckout' onPress={this.props.onclickcheckout} style={this.props.colorcheckout}>
                    <Text style={this.props.textcheckout}>CHECK OUT</Text>
                  </TouchableOpacity> 
                </View>
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

