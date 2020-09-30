import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import {Card, Button, Icon, CardItem } from 'native-base';

const CardMo = (props) => {
    return (
        <Card>
            <CardItem>
            <Text style={styles.rat}>11.30AM to 11PM{"\n"}{"\n"}
            <Text style={styles.txt3}>{props.good}</Text>{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text>
            <Button danger style={styles.btn}><Text style={styles.text}> {props.no} </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} />
            </CardItem>
          </Card>
    )
}
const styles = StyleSheet.create({
    rat:{
        fontSize: 12,
        color: '#bdbdbd',
      },
      txt3:{
        fontSize: 20,
        fontFamily: 'mono',
        color:'#000',
        fontWeight: 'bold'
      },
      btn:{
        width: 40,
        height: 30,
        textAlign: "center",
        marginLeft: 175,
        borderRadius: 5
      },
      text:{
        color:'white',
        fontSize: 20,
        marginLeft: 2
      },
      icon:{
        color: '#00ddbf',
        fontSize: 20,
        marginTop: 60,
        marginLeft: -20,
        fontFamily: 'mono'
      },
})
export default CardMo;