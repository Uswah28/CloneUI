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

import {Text, Button} from 'native-base';
export default class Home extends Component {

  render() {
  return (
        <ScrollView>
            <View style={styles.background}>
            <Image source={require('../image/logo.png')} style={styles.logo}/>
              <Text style={styles.judul}>
                  Quick search
                </Text>
                <Text style={styles.bwhjudul}>
                  Set your location to start exploring 
                  {"\n"}        restaurants around you
                </Text>
                <Button block light style={styles.btn1}
                onPress={() => 
                  this.props.navigation.navigate('Login')}>
            <Text style={styles.text}>Login</Text>
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
    width: 200,
    height: 200,
    marginTop: 70,
    alignSelf: "center"
  },
  judul: {
    fontWeight: 'bold',
    alignSelf: 'center', 
    fontSize: 40,
    fontFamily: 'mono',
    marginTop: 50
  },
  bwhjudul: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: 'mono',
    marginTop: 40,
    marginLeft: 50,
    marginRight: 30,
  },
  text: {
    fontFamily: 'mono',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 17,
  },
  btn1: {
    backgroundColor:'#fff',
    marginLeft: 15,
    marginRight: 10,
    marginTop: 100,
    marginBottom:167
  },
});