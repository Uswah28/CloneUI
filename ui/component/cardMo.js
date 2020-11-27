import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import {Card, Thumbnail, Right, Button, Icon, CardItem } from 'native-base';

const CardMo = (props) => {
    return (
        <Card >
            <CardItem>
            <Thumbnail square large source={ props.thumb } 
            style={styles.gambar}/>
            <Text style={styles.txt3}>{props.good}
            <Text style={styles.rat}>{"\n"}{"\n"}11.30AM to 11PM{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text></Text>
            <Right style={styles.view}>
            <Button warning style={styles.btn}><Text style={styles.text}> {props.no} </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} /></Right>
            </CardItem>
          </Card>
    )
}
const styles = StyleSheet.create({
    view: {marginLeft: 100},
    gambar:{borderRadius: 10},
    txt3:{fontSize: 20,
        fontFamily: 'mono',
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 10},
    rat:{fontSize: 12,
        color: '#bdbdbd'},
    btn:{width: 40,
        height: 30,
        textAlign: "center",
        borderRadius: 5},
    text:{color:'white',
        fontSize: 20,
        marginLeft: 2,
        fontWeight: 'bold'},
    icon:{color: '#00ddbf',
        fontSize: 20,
        marginTop: 25,
        marginLeft: -20,
        fontFamily: 'mono'},
})
export default CardMo;