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
import SignUi from './ui/sign';
import VerifyUi from './ui/verify';
import ForgotUi from './ui/forgot';
import CityUi from './ui/city';
import FoodUi from './ui/food';
import RestaurantUi from './ui/restaurant';
import MealUi from './ui/meal';
import MostUi from './ui/most';
import PlaceUi from './ui/place';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false}}>
        <Stack.Screen name="Home" component={HomeUi}/>
        <Stack.Screen name="Login" component={LoginUi} />
        <Stack.Screen name="SignUp" component={SignUi}/>
        <Stack.Screen name="Verify" component={VerifyUi}/>
        <Stack.Screen name="Forgot" component={ForgotUi}/>
        <Stack.Screen name="City" component={CityUi}/>
        <Stack.Screen name="Food" component={FoodUi}/>
        <Stack.Screen name="Restaurant" component={RestaurantUi}/>
        <Stack.Screen name="Meal" component={MealUi}/>
        <Stack.Screen name="Most" component={MostUi}/>
        <Stack.Screen name="Place" component={PlaceUi}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}