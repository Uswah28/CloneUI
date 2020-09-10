import React, {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Text, Button} from 'native-base';

export default class Home extends Component {

  render() {
    return (
        <ScrollView>
            <View >
                <Image source={require('../image/logo.jpg')} style={styles.logo}/>
                <Text style={styles.judul}>
                  Quick search
                </Text>
                <Text style={styles.bwhjudul}>
                  Set your location to start exploring restaurants around you
                </Text>
                <Button block light style={styles.btn1}>
                  <Text>Login</Text>
                </Button>
                <Button iconRight light>
            <Text>Next</Text>
            <Icon name='arrow-forward' />
          </Button>
            </View>
        </ScrollView>
    );
  }
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
    marginTop: 200,
  },
  login: {
    marginTop: 30,
    marginBottom: 100,
    marginEnd: 20,
    alignSelf: 'center', 
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fafafa'
  },
});