import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';

import {Footer, FooterTab, Button, Container, Header, 
  Icon, Left, Card, CardItem, Body, Title } from 'native-base';
const {width} = Dimensions.get("window");
const height = width * 0.6;

export default class Meal extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon name='arrow-back' style={styles.icon}
              onPress={() => this.props.navigation.navigate('Food')} />
          </Left>
          <Body style={styles.body}>
            <Title style={styles.text5}>Collections</Title>
          </Body>
        </Header>
        <ScrollView>
        <View>
                <ImageBackground
                  source={{ uri: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                  style={styles.gambar}>
                  <Text style={styles.judul}>Healt</Text>
                  <Text style={styles.txt}>12 Places</Text>
                </ImageBackground>
        </View>
        <View style={styles.view}>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?cs=srgb&dl=pexels-lumn-604969.jpg&fm=jpg'}} 
                    style={styles.gambar} >
                    <Body style={styles.bodys1} >
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Greek Style</Text>
                      <Text note style={styles.bawah3}>34 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar} >
                    <Body style={styles.bodys1}>
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Sushi Style</Text>
                      <Text note style={styles.bawah3}>12 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </View>
                  <View style={styles.view}>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?cs=srgb&dl=pexels-ponyo-sakana-3662189.jpg&fm=jpg'}} 
                    style={styles.gambar} >
                    <Body style={styles.bodys1} >
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Meal Beef</Text>
                      <Text note style={styles.bawah3}>34 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar} >
                    <Body style={styles.bodys1}>
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Drink Milk</Text>
                      <Text note style={styles.bawah3}>12 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
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
  footer:{
    backgroundColor: 'white'
  },
  judul: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft: 10,
    fontFamily: 'mono',
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    alignSelf: 'flex-start'
  },
  txt: {
    color: 'white',
    fontSize: 14,
    marginBottom: 25,
    marginLeft: 10,
    fontFamily: 'mono',
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    alignSelf: 'flex-start'
  },
  view: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop:10
  },
  icon: {
    color: '#ffe44c'
  },
  card: {
    margin: 10,
    width: 150,
    height: 200
  },
  header: {
    backgroundColor: '#fff'
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
  bodys1:{
    marginTop: 145
  },
  gambar:{
    height: 200, 
    width: null, 
    flex: 1,
    borderRadius: 10
  },
  bawah2:{
    marginRight: 50,
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 15,
    color: 'white'
  },
  bawah3:{
    fontSize: 13,
    marginLeft: 5,
    color: 'white',
  },
});