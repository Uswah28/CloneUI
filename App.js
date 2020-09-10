/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeUi from './ui/home';
import LoginUi from './ui/login';
import Hal1Ui from './ui/hal1';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeUi} />
        <Stack.Screen name="Login" component={LoginUi} />
        <Stack.Screen name="Hal1" component={Hal1Ui} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}