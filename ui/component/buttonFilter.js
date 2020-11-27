import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native';

import { Button } from 'native-base';
const ButtonF = (props) => {
    return (
      <Button style={styles.card}>
      <ImageBackground square large source={props.image}
      style={styles.gambar}/>
      <Text style={styles.bawah3}>{props.up}
      <Text style={styles.rat}>{"\n"}{props.down}</Text></Text>
      </Button>
        
    )
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 200,
    marginTop: 10,
    margin: 3,
    backgroundColor: '#fff'
  },
  gambar:{
    height: 100, 
    width: 100, 
    flex: 1,
    marginTop: -50,
    marginLeft: 40
  },
      rat:{
        fontSize: 12,
        color: '#bdbdbd'
      },
      bawah3:{
        fontSize: 20,
        marginRight: 50,
        color: '#000',
        marginTop: 100,
      },
})
export default ButtonF;