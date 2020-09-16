import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Container, Button, Content, Form, Item, View, Input, Label } from 'native-base';

export default class SignUp extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.item}>
            <Text style={styles.text}> 
              Welcome to Foodiez
            </Text>
            <Text style={styles.text5}>Create your account</Text>
          <Form>
          <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          <Button block warning style={styles.btn1}
          onPress={() => this.props.navigation.navigate('Verify')}>
            <Text style={styles.text3}>Sign up</Text>
             </Button>
             <Text style={styles.text2} >
              Term & Conditions</Text>
          </Form>
             <Text style={styles.text4}
                onPress={() => this.props.navigation.navigate('Login')}>
                    Log in an account
                </Text>
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
    fontSize: 50,
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
    fontSize: 20,
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
    marginLeft: 15,
    marginRight: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    marginRight:10
  }
});