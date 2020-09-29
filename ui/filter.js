import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions, 
  ImageBackground
} from 'react-native';
import Button from './component/buttonFilter';
import { Container, Header, 
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
                    <Button 
                    image={require('../image/mug.png')}
                    up='Bar & Hotels'
                    down='12 Places'/>
                  <Button image={require('../image/dining.png')}
                    up='Fine Dinning'
                    down='15 Places'/>
                  </View>
                  <View style={styles.view}>
                  <Button image={require('../image/kopi.png')}
                    up='Cafes'
                    down='28 Places'/>
                  <Button image={require('../image/nearby.png')}
                    up='Naarby'
                    down='34 Places'/>
                  </View>
                  <View style={styles.view}>
                  <Button image={require('../image/foods.png')}
                    up='Fast Food'
                    down='29 Places'/>
                  <Button image={require('../image/pizza.png')}
                    up='Featured Food'
                    down='21 Places'/>
                  </View>
        </ScrollView>
        
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
    backgroundColor: '#ffe44c',
    marginTop: 10,
    margin: 3
  },
  card: {
    width: 170,
    height: 200,
    backgroundColor: '#fff',
    marginTop: 10,
    margin: 3
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
  bawah2:{
    fontSize: 17,
    marginRight: 60,
    marginLeft: -10,
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