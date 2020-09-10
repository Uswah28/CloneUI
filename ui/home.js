import React, {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Text, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen ({ navigation }) {
  return (
        <ScrollView>
            <View>
                <Image source={require('../image/logo.jpg')} style={styles.logo}/>
                <Text style={styles.judul}>
                  Quick search
                </Text>
                <Text style={styles.bwhjudul}>
                  Set your location to start exploring restaurants around you
                </Text>
                <Button block light>
            <Text>Login</Text>
             </Button>
            <Button iconRight light style={styles.btn1}
            onPress={() => navigation.navigate('Next')}>
                <Text>Next</Text>
                <Icon name='arrow-forward' />
                </Button>
            </View>
        </ScrollView>
    );
  }

  function NextScreen({ navigation }) {
    return (
        <ScrollView>
        <View >
            <Image source={require('../image/logo.jpg')} style={styles.logo}/>
            <Text style={styles.judul}>
              Variety of food
            </Text>
            <Text style={styles.bwhjudul}>
              Set your location to start exploring restaurants around you
            </Text>
            <Button block light>
            <Text>Login</Text>
             </Button>
            <Button iconRight light style={styles.btn1}
            onPress={() => navigation.navigate('Two')}>
                <Text>Next</Text>
                <Icon name='arrow-forward' />
                </Button>
            <Button iconLeft light onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
                <Icon name='arrow-back' />
            </Button>
        </View>
    </ScrollView>
    );
  }

  function TwoScreen({ navigation }) {
    return (
        <ScrollView>
        <View >
            <Image source={require('../image/logo.jpg')} style={styles.logo}/>
            <Text style={styles.judul}>
              Search for a place
            </Text>
            <Text style={styles.bwhjudul}>
              Set your location to start exploring restaurants around you
            </Text>
            <Button block light>
            <Text>Login</Text>
             </Button>
            <Button iconRight light style={styles.btn1}
            onPress={() => navigation.navigate('End')}>
                <Text>Next</Text>
                <Icon name='arrow-forward' /></Button>
            <Button iconLeft light onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
                <Icon name='arrow-back' />
            </Button>
        </View>
    </ScrollView>
    );
  }
  function EndScreen({ navigation }) {
    return (
        <ScrollView>
        <View >
            <Image source={require('../image/logo.jpg')} style={styles.logo}/>
            <Text style={styles.judul}>
              Fast shipping
            </Text>
            <Text style={styles.bwhjudul}>
              Set your location to start exploring restaurants around you
            </Text>
            <Button block light
                        onPress={() => { this.props.navigation.navigate('Login') }} >
                        <Text style={styles.text}>Login</Text>
                    </Button>
            <Button iconLeft light onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
                <Icon name='arrow-back' />
            </Button>
        </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  background: {
      backgroundColor: "#ffb200"
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 80,
    alignSelf: "center"
  },
  judul: {
    fontWeight: 'bold',
    alignSelf: 'center', 
    fontSize: 50,
    fontFamily: 'mono',
    marginTop: 20
  },
  bwhjudul: {
    alignSelf: 'center', 
    fontSize: 15,
    fontFamily: 'serif',
    color: '#9e9e9e',
    marginTop: 10
  },
  btn1: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 300,
  },
});