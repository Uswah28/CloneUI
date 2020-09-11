import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Container, Button, Content, Form, Item, View, Input, Label } from 'native-base';

export default class Verify extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.item}>
            <Text style={styles.text}> 
              Verify your Mobile
            </Text>
            <Text style={styles.text5}>Enter your code here</Text>
          <Form>
          
          <Button block light style={styles.btn1}
          onPress={() => this.props.navigation.navigate('City')}>
            <Text style={styles.text3}>Verify Now</Text>
             </Button>
          </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'mono',
    textAlign: 'center'
  },
  text2: {
    color:'blue',
    fontSize: 13,
    marginRight:10,
    marginTop: 5,
    textAlign: 'center'
  },
  text3:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  text4:{
    color: 'blue', 
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 150
  },
  text5:{
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'notoserif',
    color: '#bdbdbd',
    textAlign: 'center'
  },
  btn1: {
    backgroundColor:'#ffe44c',
    marginLeft: 15,
    marginRight: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    marginRight:10
  }
});