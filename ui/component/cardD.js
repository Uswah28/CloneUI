import React, { Component } from 'react';
import {
    StyleSheet,
  Image
} from 'react-native';

import { Card, CardItem} from 'native-base';

const CardD = (props) => {
    return (
        <Card style={styles.card2}>
                  <CardItem cardBody>
                    <Image source={props.imagee} 
                    style={styles.bodys1}/>
                  </CardItem>
                  </Card>
                  
    )
}
const styles = StyleSheet.create({
      card2: {
        borderRadius: 10
      },
      bodys1:{
        height: 150,
        width: 170,
        borderRadius: 10
      }
})
export default CardD;