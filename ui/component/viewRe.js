import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
} from 'react-native';

import { CardItem} from 'native-base';

const ViewRe = (props) => {
    return (
        <View style={styles.view}>
              <ScrollView horizontal>
              <CardItem cardBody style={styles.card}>
                    <Image source={props.images} 
                    style={styles.gambar}/>
                  </CardItem>
                  <CardItem cardBody style={styles.card}>
                    <Image source={props.images2} 
                    style={styles.gambar}/>
                  </CardItem>
                  <CardItem cardBody style={styles.card}>
                    <Image source={props.images3} 
                    style={styles.gambar}/>
                  </CardItem>
                  <CardItem cardBody style={styles.card}>
                    <Image source={props.images4} 
                    style={styles.gambar}/>
                  </CardItem>
              </ScrollView>
            </View> 
        
    )
}
const styles = StyleSheet.create({
  view: {
    marginLeft: 10,
    marginTop:-3
  },
    card: {
        flex: 3,
        margin: 3,
        borderRadius:10
      },
      gambar:{
        height: 80, 
        width: 80, 
        flex: 1,
        borderRadius: 10
      }
})

export default ViewRe;