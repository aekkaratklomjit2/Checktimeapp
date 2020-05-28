import React from 'react'
import { Text,View, Button,AsyncStorage,Alert,ImageBackground,TouchableOpacity,Image,ScrollView,Linking,Item,Label,Input} from 'react-native'
import {Icon} from'react-native-elements';
import {styles} from '../assets/css.js';
import axios from 'axios';
export default class testapi extends React.Component {
  state = {
    icon: "eye-off",
    password: true
};
  _changeIcon() {
    this.setState(prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
        password: !prevState.password
    }));
}
  //componentDidMount() {
    // axios.get('/src/screen/testapi')
    //   .then(res => {
    //     const persons = res.json();
    //     console.log(persons)
    //   })}
    render() {
      const { label, icon, onChange } = this.props;
        return (
      <ImageBackground source={require('../assets/bg_home.png')} style={styles.bg}>
        <ScrollView>
          <View style={styles.container}>
             <Text>Hello world</Text>
             <Button title="Click me" onPress={ ()=>{ Linking.openURL('https://github.com/login/oauth/authorize/?client_id=56490b2552c6c467f739')}} />
             <Item floatingLabel>
                <Icon active name={icon} />
                <Label>{label}</Label>
                <Input secureTextEntry={this.state.password} onChangeText={(e) => onChange(e)} />
                <Icon name={this.state.icon} onPress={() => this._changeIcon()} />
            </Item>
          </View>
          </ScrollView>
        </ImageBackground>
        )
      }
    }