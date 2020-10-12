import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Container, Button, Content, Form, Item, View, Input, Label } from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class SignUp extends Component {

  singUp = () => {
    AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
    AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
    AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
}

setFname = (value) => {
    AsyncStorage.setItem('username', value);
    this.setState({ 'username': value });
}
setEmail = (value) => {
    AsyncStorage.setItem('email', value);
    this.setState({ 'email': value });
}
setPass = (value) => {
    AsyncStorage.setItem('password', value);
    this.setState({ 'password': value });
}

  constructor(props) {
    super(props);

    this.state = {
        username: '',
        email: '',
        password: '',
    }
}

onSubmit = () => {
    const exercises = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
    }

    console.log('EXERCISES', exercises);

    axios.post('http://192.168.1.8:5000/exercises/add', exercises)
        .then(res => console.log(res.data))
}
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
              <Input onChangeText={this.setFname}
                            value={this.state.username}/>
            </Item>
            <Item floatingLabel >
              <Label>Email</Label>
              <Input onChangeText={this.setEmail}
                            value={this.state.email}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={this.setPass}
                            value={this.state.password}/>
            </Item>
          <Button block warning style={styles.btn1}
          onPress={() => {
            this.singUp;
            this.onSubmit();
          this.props.navigation.navigate('Login')}}>
            <Text style={styles.text3}>Sign up</Text>
             </Button>
             <Text style={styles.text2} onPress={() => this.props.navigation.navigate('Action')}>
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