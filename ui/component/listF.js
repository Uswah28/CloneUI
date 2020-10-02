import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import {List, Right, ListItem, Left} from 'native-base';

const ListF = (props) => {
    return (
        <List>
            <ListItem>
              <Left>
              <Text style={styles.most}>{props.up}</Text>
              </Left>
              <Right>
              <Text style={styles.see} onPress={props.onPress}>See all</Text>
              </Right>
            </ListItem>
            </List>
    )
}
const styles = StyleSheet.create({
    most:{
        fontWeight: 'bold',
        fontSize: 20,
      },
      see:{
        color: '#00ddbf',
        fontWeight: 'bold',
        fontSize: 18,
      }
})
export default ListF;