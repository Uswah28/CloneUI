import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native';

import { CardItem, Body } from 'native-base';

const CardItemMe = (props) => {
    return (
        <CardItem cardBody style={styles.card}>
          <ImageBackground source={props.image} 
          style={styles.gambar} >
          <Body style={styles.bodys1} >
            <Text style={styles.bawah2}>{props.up}</Text>
            <Text note style={styles.bawah3}>{props.down}</Text>
            </Body>
          </ImageBackground>
        </CardItem>
    )
}
const styles = StyleSheet.create({
      card: {
        margin: 10,
        width: 150,
        height: 200
      },
      gambar:{
        height: 200, 
        width: null, 
        flex: 1,
        borderRadius: 10
      },
      bodys1:{
        marginTop: 145
      },
      bawah2:{
        marginRight: 50,
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 15,
        color: 'white'
      },
      bawah3:{
        fontSize: 13,
        marginLeft: 5,
        color: 'white',
      },
})
export default CardItemMe;