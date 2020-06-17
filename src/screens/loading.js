import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet ,AsyncStorage} from 'react-native'
export default class loading extends React.Component {
    constructor(prop){
        super(prop)
        this.state ={
          access_Token : '',
        }
        this.onLoad()
      }
     componentDidUpdate(){
         this.onLoad()
       }
    onLoad = async () =>{
        const access_Token = await AsyncStorage.getItem('access_Token')
        this.setState({access_Token : access_Token})
         if(this.state.access_Token==null){
           this.props.navigation.navigate('login')
         }else{this.props.navigation.navigate('home')}
      }
    render() {

      return (
        <View style={styles.container}>
          <Text>Loading</Text>
          <ActivityIndicator size="large" />
        </View> 
        )
      }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
