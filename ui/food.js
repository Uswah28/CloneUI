import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import ListF from './component/listF';
import CardF from './component/cardF';
import CardO from './component/cardO';
import CardD from './component/cardD';
import { Container, Form, Input, Item, Header, 
  Icon, Left, Card, CardItem, Body, Title } from 'native-base';
const {width} = Dimensions.get("window");
const height = width * 0.6;
const image = [
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]
export default class Food extends Component {
  state = {
    active : 0
  }
  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({active:slide});
    }
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon name='arrow-back' style={styles.icon}
              onPress={() => this.props.navigation.navigate('Login')} />
          </Left>
          <Body style={styles.body}>
            <Title style={styles.text5}>Sydney CBD</Title>
          </Body>
        </Header>
        <ScrollView style={{ backgroundColor: 'white' }}>
        <Form>
          <Item regular style={styles.item}>
            <Left>
              <Icon name='search' style={styles.search} />
            </Left>
            <Input placeholder='Search for restaurant...' style={styles.text3} />
          </Item>
        </Form>
        <View>
          <ScrollView style={{width, height}}
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}>
            {
              image.map((image, index) => (
                <ImageBackground
                  key={index}
                  source={{ uri: image }}
                  style={styles.background}>
                  <Text style={styles.judul}>Thai Style</Text>
                  <Text style={styles.txt}>12 Places</Text>
                </ImageBackground>
              ))
            }
          </ScrollView>
          <View style={styles.font}>
            {
              image.map((i, k) => (
            <Text key={k} style={k==this.state.active ? styles.fonton : styles.fonto}>•</Text>
            ))
          }
          </View>
        </View>
        <ListF
        up='Most Popular' 
        onPress={() => this.props.navigation.navigate('Most')}/>
            <View style={styles.view}>
              <ScrollView horizontal>
              <CardF 
              image={require('../image/kfcbroadway.jpg')}
              up='KFC Broadway'
              down='122 Queen Street'
              body='Fried Chicken, American'/>
                  <CardF
                  image={require('../image/greek.jpg')} style={styles.gambar}
                    up='Greek House'
                    down='23 Queen Street'
                    body='Burritos, Greek'/>
                  <CardF 
                  image={require('../image/kfcbroadway.jpg')} style={styles.gambar}
                  up='KFC Broadway'
                  down='122 Queen Street'
                  body='Fried Chicken, American'/>
                  <CardF 
                  image={require('../image/greek.jpg')} 
                  up='Greek House'
                  down='23 Queen Street'
                  body='Burritos, Greek'/>
              </ScrollView>
            </View>
            <ListF
        up='Meal Deal' 
        onPress={() => this.props.navigation.navigate('Meal')}/>
          <View> 
            <View style={styles.view}>
              <ScrollView horizontal>
                <CardO 
                images={{uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?cs=srgb&dl=pexels-lumn-604969.jpg&fm=jpg'}} 
                    ups='Greek Style'
                    downs='34 Place'/>
                  <CardO
                  images={{uri: 'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  ups='Sushi Style'
                  downs='12 Place'/>
                  <CardO 
                  images={{uri: 'https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?cs=srgb&dl=pexels-ponyo-sakana-3662189.jpg&fm=jpg'}} 
                    ups='Meal Beef'
                    downs='12 Place'/>
                  <CardO 
                  images={{uri: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  ups='Drink Milk'
                  downs='23 Place'/>
              </ScrollView>
            </View>
          </View>
          <ListF
        up='Popular Restaurant' 
        onPress={() => this.props.navigation.navigate('Place')}/>
          <View> 
            <View style={styles.view}>
              <ScrollView horizontal>
                <CardD 
                imagee={{uri: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg'}} 
                    />
                  <CardD
                  imagee={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg'}} 
                    />
                  <CardD
                  imagee={{uri: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=pexels-life-of-pix-67468.jpg&fm=jpg'}} 
                    />
                  <CardD
                  imagee={{uri: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?cs=srgb&dl=pexels-pixabay-262047.jpg&fm=jpg'}} 
                   />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    width,
    height,
    resizeMode: 'cover'
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
  text3: {
    marginRight: 89,
    marginLeft: -150,
    fontSize: 20
  },
  search: {
    marginLeft: 10,
    fontSize: 25
  },
  font:{
    fontSize: 40,
    fontWeight: 'bold',
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    alignSelf: 'flex-end'
  },
  fonto:{
    fontSize: 40,
    fontWeight: 'bold',
    color:'#888',
    margin: 3
  },
  fonton:{
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
    margin: 3
  },
  item: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15
  },
  view: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop:-5
  },
  icon: {
    color: '#ffe44c'
  },
  card2: {
    borderRadius: 10
  },
  header: {
    backgroundColor: '#fff'
  },
  text5: {
    fontSize: 30,
    fontFamily: 'mono',
    color: '#000',
    marginLeft: 23,
    fontWeight: 'bold'
  },
  body: {
    marginRight: 50
  },
  bodys:{
    height: 200, 
    width: 150,
    borderRadius: 10
  },
  bodys1:{
    height: 150,
    width: 170,
    borderRadius: 10
  },
  gambar:{
    height: 100, 
    width: 150,
    borderRadius: 10
  },
  gambar2:{
    height: 150, 
    width: 200, 
    flex: 1,
    borderRadius: 500
  },
  most:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  see:{
    color: '#00ddbf',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bawah:{
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: -10
  },
  bawah1:{
    fontSize: 12,
    marginLeft: -10,
    color: '#bdbdbd',
  },
  bawah2:{
    fontWeight: 'bold',
    marginLeft:-140,
    fontSize: 15,
    color: 'white',
    marginTop: 130
  },
  bawah3:{
    fontSize: 13,
    marginLeft: -140,
    color: 'white',
  },
});