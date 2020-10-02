import React, { Component } from 'react';
import {
    StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { Card, CardItem} from 'native-base';

const CardO = (props) => {
    return (
        <Card style={styles.card2}>
        <CardItem cardBody >
          <Image source={props.images} 
          style={styles.bodys}/>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.bawah2}>{props.ups}</Text>
            <Text note style={styles.bawah3}>{props.downs}</Text></View>
        </CardItem>
        </Card>
                  
    )
}
const styles = StyleSheet.create({
      card2: {
        borderRadius: 10
      },
      bodys:{
        height: 200, 
        width: 150,
        borderRadius: 10
      },
      bawah2:{
        fontWeight: 'bold',
        marginLeft:-140,
        fontSize: 15,
        color: 'white',
        marginTop: 130
      },
      bawah3:{
        fontSize: 13,
        marginLeft: -140,
        color: 'white',
      },
})
export default CardO;