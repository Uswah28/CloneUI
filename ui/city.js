import React, { Component } from 'react';
import {
    StyleSheet
  } from 'react-native';

import { Container, Content, List, Text, Right,
  Icon, Form, Input, Item, Header, Left, Body, Title} from 'native-base';

  import ListItem from './component/listItemCity';

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
          <ListItem
                  left='United State'/>
            <ListItem 
                  left='Australia'/>
            <ListItem 
                  left='France'/>
            <ListItem 
                  left='Korea'/>
            <ListItem 
                  left='Brazil'/>
            <ListItem 
                  left='Canada'/>
            <ListItem 
                  left='Japan'/>
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