import React, { Component } from 'react';
import {
  StyleSheet, Text, 
} from 'react-native';
import { Container, Button, Content, Form, Item, View, Input, Label } from 'native-base';

export default class Login extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.item}>
            <Text style={styles.text}> 
              Log in
            </Text>
          <Form>
            <Item floatingLabel >
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Text style={styles.text2} 
            onPress={() => this.props.navigation.navigate('Forgot')}>
              Forgot password?</Text>
          </Form>
          <Button block light style={styles.btn1} onPress={() => this.props.navigation.navigate('Food')}>
            <Text style={styles.text3}>Login</Text>
             </Button>
             <Text style={styles.text4}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                    Sign up an account
                </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    alignSelf: 'center', 
    fontSize: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  text2: {
    color:'blue',
    fontSize: 13,
    marginRight:10,
    marginLeft: 244,
    marginTop: 20
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
    marginTop: 130
  },
  btn1: {
    backgroundColor:'#ffe44c',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 140,
  },
  item: {
    marginRight:10
  }
});