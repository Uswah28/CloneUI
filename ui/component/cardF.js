import React, { Component } from 'react';
import {
    StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { Card, CardItem} from 'native-base';

const CardF = (props) => {
    return (
              <Card style={styles.card2}>
            <CardItem cardBody>
              <Image source={props.image}
                style={styles.gambar}
              />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: 'column' }}>
              <Text style={styles.bawah}>{props.up}</Text>
                      <Text note style={styles.bawah1}>{props.down}</Text>
                      <Text note style={styles.bawah1}>{props.body}</Text>
              </View>
            </CardItem>
          </Card>
                  
    )
}
const styles = StyleSheet.create({
      card2: {
        borderRadius: 10
      },
      gambar:{
        height: 100, 
        width: 150,
        borderRadius: 10
      },
      bawah:{
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: -10
      },
      bawah1:{
        fontSize: 12,
        marginLeft: -10,
        color: '#bdbdbd',
      },
})
export default CardF;