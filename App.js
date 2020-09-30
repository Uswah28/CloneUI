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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeUi from './ui/home';
import LoginUi from './ui/login';
import SignUi from './ui/sign';
import VerifyUi from './ui/verify';
import ForgotUi from './ui/forgot';
import CityUi from './ui/city';

//Screen Home
import FoodUi from './ui/food';
import MealUi from './ui/meal';
import MostUi from './ui/most';
import FilterUi from './ui/filter';

//Screen Maps
import PlaceUi from './ui/place';

//Screen Favorite
import FavouriteUi from './ui/favourite';

//Screen Profile
import RestaurantUi from './ui/restaurant';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomesStk = createStackNavigator();
const MapsStk = createStackNavigator();
const FavStk = createStackNavigator();
const ProfileStk = createStackNavigator();

function StackHomes() {
  return (
    <HomesStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomesStk.Screen name="Food" component={FoodUi} />
      <HomesStk.Screen name="Restaurant" component={RestaurantUi} />
      <HomesStk.Screen name="Meal" component={MealUi} />
      <HomesStk.Screen name="Most" component={MostUi} />
      <HomesStk.Screen name="Place" component={PlaceUi} />
      <HomesStk.Screen name="Filter" component={FilterUi} />
    </HomesStk.Navigator>

  )
}
function StackMaps() {
  return (
    <MapsStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <MapsStk.Screen name="Mapp" component={FilterUi} />
    </MapsStk.Navigator>

  )
}

function StackFav() {
  return (
    <FavStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <FavStk.Screen name="Favorite" component={FavouriteUi} />
    </FavStk.Navigator>

  )
}

function StackProfile() {
  return (
    <ProfileStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <ProfileStk.Screen name="Profile" component={RestaurantUi} />
    </ProfileStk.Navigator>

  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'md-home-outline';
          } else if (route.name === 'Maps') {
            iconName = focused ? 'location' : 'md-location-outline';
          } else if (route.name === 'Fav') {
            iconName = focused ? 'heart' : 'md-heart-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'md-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ffe44c',
        inactiveTintColor: '#888',
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={StackHomes} />
      <Tab.Screen name="Maps" component={StackMaps} />
      <Tab.Screen name="Fav" component={StackFav} />
      <Tab.Screen name="Profile" component={StackProfile} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen name="Food" component={MyTabs}/>
        <Stack.Screen name="Restaurant" component={RestaurantUi}/>
        <Stack.Screen name="Meal" component={MealUi}/>
        <Stack.Screen name="Most" component={MostUi}/>
        <Stack.Screen name="Place" component={PlaceUi}/>
        <Stack.Screen name="Favourite" component={FavouriteUi}/>
        <Stack.Screen name="Filter" component={FilterUi}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}