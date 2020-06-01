import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet ,AsyncStorage} from 'react-native'
export default class loading extends React.Component {
    constructor(prop){
        super(prop)
        this.state ={
          username : '',
        }
      }
    componentDidMount(){
        this.onLoad()
      }
    onLoad = async () =>{
        const currentUser = await AsyncStorage.getItem('Async_username')
        this.setState({username : currentUser})
        console.log(this.state.username)
        if(this.state.username==null){
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
