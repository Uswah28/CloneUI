import React, { Component } from 'react';
import {
    StyleSheet
  } from 'react-native';

import { Container, Content, List, Icon, ListItem, Text, Right, 
    Form, Input, Item, Header, Left, Body, Title} from 'native-base';

export default class City extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
        <Left>
              <Icon name='arrow-back' style={styles.icon}
              onPress={() => this.props.navigation.navigate('Verify')}/>
            </Left>
          <Body style={styles.body}>
            <Title style={styles.text}>User current location</Title>
          </Body>
        </Header>
        <Form>
          <Item floatingLabel style={styles.atas}>
              <Input placeholder='Search the city...' 
              style={styles.text5} />
              <Icon name='close-circle' />
            </Item>
            <Item floatingLabel style={styles.atas}>
              <Input placeholder='Recently visited countries' 
              style={styles.text5} />
            </Item>
            </Form>
            <Content>
          <List>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
                <Text>United State</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
             <Icon name="arrow-forward" />
                <Text>Australia</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
              <Text>France</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
                <Text>Korea</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
                <Text>Brazil</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
                <Text>Canada</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
              <Icon name="arrow-forward" />
                <Text>Japan</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    icon:{
    color:'#ffe44c'
    },
    button:{
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor:'#fff'
    },
    text:{
        color:'#000',
        marginLeft: -28
    },
    text5:{
        fontSize: 25,
        fontFamily: 'mono',
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
      },
    body:{
        marginRight: 100
    },
    atas : {
        backgroundColor : "#fff",
        marginTop : 10, 
        marginLeft: 10, 
        marginRight: 10,
      },
});