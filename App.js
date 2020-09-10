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
//import UpdateCrud from './crud/update';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeUi} />
        <Stack.Screen name="Login" component={LoginUi} />
        <Stack.Screen name="Update" component={UpdateCrud} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}