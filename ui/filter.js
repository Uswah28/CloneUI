import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions, 
  ImageBackground
} from 'react-native';

import {Footer, FooterTab, Button, Container, Header, 
  Icon, Left, Card, CardItem, Body, Title, Thumbnail } from 'native-base';
const {width} = Dimensions.get("window");
const height = width * 0.6;

export default class Filter extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon style={styles.icon}
              onPress={() => this.props.navigation.navigate('Food')} />
          </Left>
          <Body style={styles.body}>
            <Title style={styles.text5}>Discovery</Title>
          </Body>
        </Header>
        <ScrollView>
        <View style={styles.view}>
            <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground square large source={require('../image/mug.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah3}>Bar & Hotels
                  <Text style={styles.rat}>{"\n"}           12 Places</Text></Text>
                  </CardItem></Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground square large source={require('../image/dining.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah3}>Fine Dining
                  <Text style={styles.rat}>{"\n"}           15 Places</Text></Text>
                  </CardItem></Card>
                  </View>
                  <View style={styles.view}>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground square large source={require('../image/kopi.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah}>Cafes
                  <Text style={styles.rat}>{"\n"}28 Places</Text></Text>
                  </CardItem></Card>
                  <Card>
                  <CardItem cardBody style={styles.card2}>
                  <ImageBackground square large source={require('../image/nearby.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah}>Nearby
                  <Text style={styles.rat}>{"\n"}  34 Places</Text></Text>
                  </CardItem></Card>
                  </View>
                  <View style={styles.view}>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground square large source={require('../image/foods.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah3}>Fast Foods
                  <Text style={styles.rat}>{"\n"}           29 Places</Text></Text>
                  </CardItem></Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground square large source={require('../image/pizza.png')}
                  style={styles.gambar}/>
                  <Text style={styles.bawah3}>Featured Foods
                  <Text style={styles.rat}>{"\n"}           21 Places</Text></Text>
                  </CardItem></Card>
                  </View>
        </ScrollView>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button style={styles.footer}>
              <Icon name="home" onPress={() => this.props.navigation.navigate('Food')}/>
            </Button>
            <Button>
              <Icon type='MaterialIcons' name="place"/>
            </Button>
            <Button >
              <Icon name="heart" onPress={() => this.props.navigation.navigate('Favourite')}/>
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    rat:{
        fontSize: 12,
        color: '#bdbdbd'
      },
    gambar:{
        height: 100, 
        width: 100, 
        flex: 1,
        marginTop: -50,
        marginLeft: 40
      },
  footer:{
    backgroundColor: 'white'
  },
  view: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5
  },
  icon: {
    color: '#ffe44c',
    fontSize: 50,
    marginRight: -10
    
  },
  card2: {
    width: 170,
    height: 200,
    backgroundColor: '#ffe44c'
  },
  card: {
    width: 170,
    height: 200
  },
  header: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  text5: {
    fontSize: 25,
    fontFamily: 'mono',
    color: '#000',
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  body: {
    marginRight: 50,
    marginBottom: 20,
    marginTop: 10
  },
  bawah3:{
    fontSize: 20,
    marginRight: 50,
    color: '#000',
    marginTop: 100,
  },
  bawah:{
    fontSize: 20,
    marginRight: 60,
    color: '#000',
    marginTop: 100,
  },
});