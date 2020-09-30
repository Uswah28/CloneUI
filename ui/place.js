import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions, 
  Text
} from 'react-native';
import Card from './component/cardPl';
import {List, Content, ListItem, Header, CardItem, Button, Icon, Right, Left, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 1;
export default class Place extends Component {
  render() {
    return (
      <Container>
      <ScrollView>
        <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/2878741/pexels-photo-2878741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.gambar2}>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Food')}/>
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent>
              <Text style={styles.text}>Share</Text>
              </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.judul}>
            Asia{"\n"}Restaurant</Text>
        </Content>
        </ImageBackground>
          <List>
          <ListItem>
              <Left>
            <Text style={styles.txt3}>20 Restaurants</Text>
            </Left>
            <Right>
            <Text style={styles.txt2} onPress={() => this.props.navigation.navigate('Filter')}>Filter</Text>
            </Right>
            </ListItem>
          </List>
          <Card 
          good='Good Thai'
          no='4.8'/>
          <Card 
          good='Spice Alley'
          no='3.2'/>
          <Card 
          good='Canton House'
          no='3.6'/>
        </View>
      </ScrollView>
      
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon:{
    color: '#00ddbf',
    fontSize: 20,
    marginTop: 60,
    marginLeft: -20,
    fontFamily: 'mono'
  },
  btn2:{
    width: 40,
    height: 30,
    textAlign: "center",
    marginLeft: 165,
    borderRadius: 5
  },
  btn:{
    width: 40,
    height: 30,
    textAlign: "center",
    marginLeft: 175,
    borderRadius: 5
  },
  view: {
    marginTop:-5
  },
  rat:{
    fontSize: 12,
    color: '#bdbdbd',
  },
  txt3:{
    fontSize: 20,
    fontFamily: 'mono',
    color:'#000',
    fontWeight: 'bold'
  },
  txt2:{
    color: '#00ddbf',
    fontSize: 15,
    marginLeft: -100,
    fontFamily: 'mono'
  },
  text2:{
    color:'#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    fontFamily: 'mono'
  },
  text:{
    color:'white',
    fontSize: 20,
    marginLeft: 2
  },
  footer:{
    backgroundColor: 'white'
  },
  judul: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign:"center",
    fontFamily: 'mono',
  },
gambar2:{
  height, 
  width, 
  flex: 1
},
});