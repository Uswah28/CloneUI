import React, { Component } from 'react';
import {
  StyleSheet, 
  Image,
  ScrollView,
  View, 
  ImageBackground,
  Dimensions
} from 'react-native';
import { Text } from 'native-base';
const {width, height} = Dimensions.get("window");
//const height = width * 1;
export default class Restaurant extends Component {

  render() {
    return (
      <ScrollView>
          <View>
              <ImageBackground source={require('../image/thai.jpg')} style={styles.backgroundImage}>
              <Text style={styles.text3}>
              Asia Restaurant
                </Text>
              </ImageBackground>
          </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        width,
        height
      },
  text: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'mono',
    textAlign: 'center'
  },
  text2: {
    color:'blue',
    fontSize: 13,
    marginRight:10,
    marginTop: 5,
    textAlign: 'center'
  },
  text3:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  text4:{
    color: 'blue', 
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 150
  },
  text5:{
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'notoserif',
    color: '#bdbdbd',
    textAlign: 'center'
  },
  btn1: {
    backgroundColor:'#ffe44c',
    marginLeft: 15,
    marginRight: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    marginRight:10
  }
});