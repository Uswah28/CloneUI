import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';
import ViewMe from './component/viewMe';
import { Container, Header, 
  Icon, Left, Body, Title } from 'native-base';
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
        <ViewMe 
                  image={{uri:'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?cs=srgb&dl=pexels-lumn-604969.jpg&fm=jpg'}}
                  up='Greek Style'
                  images={{uri: 'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  ups='Sushi Style'/>
          <ViewMe 
                  image={{uri: 'https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?cs=srgb&dl=pexels-ponyo-sakana-3662189.jpg&fm=jpg'}} 
                  up='Meal Beef' 
                  images={{uri: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  ups='Drink Milk'/>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
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
  icon: {
    color: '#ffe44c'
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
  gambar:{
    height: 200, 
    width: null, 
    flex: 1,
    borderRadius: 10
  }
});