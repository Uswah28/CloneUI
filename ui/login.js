import React, { Component } from 'react';
import {
  StyleSheet, Text, Alert
} from 'react-native';
import { Container, Button, Content, Form, Item, View, Input, Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Login extends Component {

  componentDidMount = () => {
    AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
    AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      inputUsername: '',
      inputPassword: '',
    }
  }

  myValidate = () => {
    const { inputUsername, inputPassword } = this.state;
    const myUsername = this.state.username;
    const myPass = this.state.password;
    if (inputUsername == '' && inputPassword == '') {
      Alert.alert('Please fill the Username and Password');
    }
    else if (inputUsername != myUsername && inputPassword != myPass) {
      Alert.alert('Account not found');
    }
    else if (inputUsername == myUsername && inputPassword == '') {
      Alert.alert('Password Empty');
    }
    else if (inputUsername == '' && inputPassword == myPass) {
      Alert.alert('Username Empty');
    }
    else if (inputUsername == myUsername && inputPassword == myPass) {
      this.props.navigation.navigate('Tab', { screen: 'Food' })
    }
    else {
      Alert.alert('Data not found')
    }
  }

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
              <Label>Username</Label>
              <Input onChangeText={inputUsername => this.setState({ inputUsername })}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true}
              onChangeText={inputPassword => this.setState({ inputPassword })}/>
            </Item>
            <Text style={styles.text2} 
            onPress={() => this.props.navigation.navigate('Forgot')}>
              Forgot password?</Text>
          </Form>
          <Button block warning style={styles.btn1} onPress={this.myValidate}>
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 140,
  },
  item: {
    marginRight:10
  }
});