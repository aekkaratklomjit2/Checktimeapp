import React from 'react'
import { Text,View ,StyleSheet} from 'react-native'
class LoginTop extends React.Component{
  render(){      
    return (
        <View style={styles.midPicture}>
          <Text  style={styles.Font}>WELCOME TO </Text>
          <Text  style={styles.Boldtextnews}>FOREX CITY</Text>
        </View>
        )
      }      
    }
    export default LoginTop;
    const styles = StyleSheet.create({
        Boldtextnews: {
          color: 'black',
          fontSize: 27,                       
          textAlign: "center",
          margin: 6,
        },
        Font :{
          fontSize:15,
          color: 'black',
        },
        midPicture: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop : 62,
          paddingBottom:20
      },
      });

      