import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

import { ListItem, Right, Left} from 'native-base';

const ListItemRe = (props) => {
    return (
        <ListItem>
              <Left>
            <Text style={styles.txt}>{props.up}</Text>
            </Left>
            <Right>
            <Text style={styles.txt2}>{props.down}</Text>
            </Right>
            </ListItem>
    )
}
const styles = StyleSheet.create({
    txt2:{
        color: '#00ddbf',
        fontSize: 15,
        marginLeft: -100,
        fontFamily: 'mono'
      },
      txt: {
        color: '#888',
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'mono',
        alignSelf: 'flex-start'
      },
})

export default ListItemRe;