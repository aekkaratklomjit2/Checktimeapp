import React from 'react'
import { AsyncStorage,Text, TextInput, View, TouchableOpacity,ImageBackground} from 'react-native'
import {styles} from '../assets/css.js';
import { ScrollView } from 'react-native-gesture-handler';
import {LoginTop} from '../components/';
import {Icon} from'react-native-elements';
import {post} from '../helper/request';
export default class login extends React.Component {
  constructor(prop){
    super(prop)
    this.state ={
      username : '',
      password : '',
      errorMessage : null,
      coloruser:'',
      colorpass:'',
      icon:"eye-slash",
      hidepassword : true,
    }
  }
  Login = async () =>{
    if(this.state.username=="" && this.state.password==""){
        this.setState({errorMessage : "Please enter username and password.",coloruser:'red',colorpass:'red'})
      }
      else if(this.state.username==""){
        this.setState({errorMessage : "Please enter username.",coloruser:'red',colorpass:'black'})
      }
      else if (this.state.password==""){
        this.setState({errorMessage : "Please enter password.",coloruser:'black',colorpass:'red'})
      }
      else{ 
        console.log(this.state.username)
        console.log(this.state.password)
        post('/login',{"username" : this.state.username,"password" : this.state.password})
        .then((response) => {
          if (response.data.message=='Incorrect username or password'){
            console.log(response.data.message)
          this.setState({errorMessage : response.data.message+'.'})
          }if(response.data.message=='login sucessfull'){
            this.setState({username:null,password:null,coloruser:null,colorpass:null,errorMessage:null})
            this.setStringValue(response.data.Token)
            console.log(response.data.Token)
            this.props.navigation.navigate('loading') }})
      }
    }
    setStringValue = async (value) => {
      await AsyncStorage.setItem('access_Token',value)
    }
    _ChangeIconTohidePassword(){
      this.setState(prevState => ({
        icon : prevState.icon ==='eye' ? 'eye-slash' : 'eye',
        hidepassword: !prevState.hidepassword
      }
      ))
    }
  render() {
    return (
    <ImageBackground source={require('../assets/bg_login.png')} style={styles.bg}>
      <ScrollView>
      <View style={styles.container}>
        <LoginTop />
        <View style={styles.midPicture}>
          <View style={{...styles.boxlogin,borderColor:this.state.coloruser}} >
              <Icon style={{ padding: 20,}} name='user' type='font-awesome' size={20} color="#000"/>
                <TextInput
			              borderColor={this.state.coloruser}
                    style={styles.input}
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username : username })}
                    underlineColorAndroid="transparent" />
          </View>
          <View style={{...styles.boxlogin,borderColor:this.state.colorpass}}>
            <Icon style={{ padding: 20,}} name='lock' type='font-awesome' size={20} color="#000"/>
              <TextInput
                secureTextEntry={this.state.hidepassword}
		            borderColor={this.state.colorpassword}
                style={styles.input}
                value={this.state.password}
                placeholder="Password"
                onChangeText={password => this.setState({ password: password})}
                underlineColorAndroid="transparent" />
                <Icon style={{ paddingRight : 100}} name={this.state.icon} type='font-awesome' size={20} color="#000" onPress={()=>this._ChangeIconTohidePassword()}/>
            </View>
          {this.state.errorMessage &&<Text style={{ color: 'red' , fontSize: 15}}>{this.state.errorMessage}</Text>}
          <View style={styles.button}>
                  <TouchableOpacity onPress={this.Login} style={styles.loginbutton}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>LOG IN</Text>
                  </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>  
    )
  }
}
