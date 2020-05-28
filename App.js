import React from 'react';
import AppNavigator from './src/route';
import {Actions} from "react-native-router-flux";
import {BackHandler} from 'react-native';
import {  NavigationContainer} from '@react-navigation/native';
export default class App extends React.Component {
  componentDidMount() {
    console.log(Actions.currentScene)
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
}
handleBackButton(){
  if(Actions.currentScene==='home'||Actions.currentScene==='login'){
    BackHandler.exitApp();
  }
}
  render() {
    return (
      <AppNavigator/>
    );
  }
}