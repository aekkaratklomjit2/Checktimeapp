import React from 'react';
import { createStackNavigator ,TransitionPresets} from '@react-navigation/stack';
import {  NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from'react-native-elements';
import login from './screens/login.js';
import home from './screens/home';
import report from './screens/report';
import loading from './screens/loading';
import {Actions, Router, Scene} from "react-native-router-flux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
    <Router>
    <Scene key='root'>
        <Scene
            name='loading'
            key="loading"
            hideNavBar
            component={loading}
        />
        <Scene
            name='login'
            key='login'
            hideNavBar
            component={login}
        />
        <Scene
            name='home'
            key='home'
            hideNavBar
            component={HomeTabs}
        />
        <Scene
            name='report'
            key='report'
            hideNavBar
            component={HomeTabs}
        />
    </Scene>
</Router>
</NavigationContainer>
  );

}
function HomeTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{showLabel: false,inactiveBackgroundColor:'#010F3E',
                                     inactiveTintColor:"white",
                                     activeBackgroundColor:"#010F3E",
                                     activeTintColor:"yellow"}}>
      <Tab.Screen name="home" component={home} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="report" component={report} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
          name='clock-o'
          type='font-awesome'
          color={color} size={size} />
        ),
      }}/>

    </Tab.Navigator>
  );
}


export default AppNavigator;





