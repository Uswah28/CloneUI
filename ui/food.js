import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';

import {Footer, FooterTab, Button, Container, Form, Input, Item, Header, 
  Icon, List, ListItem, Left, Card, CardItem, Body, Title, Right } from 'native-base';
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
        <View style={styles.gambar}>
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
        <List>
            <ListItem>
              <Left>
              <Text style={styles.most}>Most Popular</Text>
              </Left>
              <Right>
              <Text style={styles.see} onPress={() => this.props.navigation.navigate('Most')}>See all</Text>
              </Right>
            </ListItem>
            </List>
          <View> 
            <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={require('../image/kfcbroadway.jpg')} style={styles.gambar}>
                    <Body style={styles.bodys}>
                      <Text style={styles.bawah} onPress={() => this.props.navigation.navigate('Most')}>KFC Broadway</Text>
                      <Text note style={styles.bawah1}>122 Queen Street</Text>
                      <Text note style={styles.bawah1}>Fried Chicken, American</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={require('../image/greek.jpg')} style={styles.gambar}>
                    <Body style={styles.bodys}>
                      <Text style={styles.bawah} onPress={() => this.props.navigation.navigate('Most')}>Greek House</Text>
                      <Text note style={styles.bawah1}>23 Queen Street</Text>
                      <Text note style={styles.bawah1}>Burritos, Greek</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={require('../image/kfcbroadway.jpg')} style={styles.gambar}>
                    <Body style={styles.bodys}>
                      <Text style={styles.bawah} onPress={() => this.props.navigation.navigate('Most')}>KFC Broadway</Text>
                      <Text note style={styles.bawah1}>122 Queen Street</Text>
                      <Text note style={styles.bawah1}>Fried Chicken, American</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={require('../image/greek.jpg')} style={styles.gambar}>
                    <Body style={styles.bodys}>
                      <Text style={styles.bawah} onPress={() => this.props.navigation.navigate('Most')}>Greek House</Text>
                      <Text note style={styles.bawah1}>23 Queen Street</Text>
                      <Text note style={styles.bawah1}>Burritos, Greek</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View>
          </View>
          <List>
            <ListItem>
              <Left>
              <Text style={styles.most}>Meal Deal</Text>
              </Left>
              <Right>
              <Text style={styles.see} onPress={() => this.props.navigation.navigate('Meal')}>See all</Text>
              </Right>
            </ListItem>
            </List>
          <View> 
            <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?cs=srgb&dl=pexels-lumn-604969.jpg&fm=jpg'}} 
                    style={styles.gambar} >
                    <Body style={styles.bodys1} >
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Greek Style</Text>
                      <Text note style={styles.bawah3}>34 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar} >
                    <Body style={styles.bodys1}>
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Sushi Style</Text>
                      <Text note style={styles.bawah3}>12 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/3662189/pexels-photo-3662189.jpeg?cs=srgb&dl=pexels-ponyo-sakana-3662189.jpg&fm=jpg'}} 
                    style={styles.gambar} >
                    <Body style={styles.bodys1}>
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Meal Beef</Text>
                      <Text note style={styles.bawah3}>12 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar} >
                    <Body style={styles.bodys1}>
                      <Text style={styles.bawah2} onPress={() => this.props.navigation.navigate('Meal')}>Drink Milk</Text>
                      <Text note style={styles.bawah3}>23 Place</Text>
                      </Body>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View>
          </View>
          <List>
            <ListItem>
              <Left>
              <Text style={styles.most}>Popular Restaurant</Text>
              </Left>
              <Right>
              <Text style={styles.see} onPress={() => this.props.navigation.navigate('Place')}>See all</Text>
              </Right>
            </ListItem>
            </List>
          <View> 
            <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg'}} 
                    style={styles.gambar2}> 
                    <Text onPress={() => this.props.navigation.navigate('Restaurant')} style={styles.btn}/>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg'}} 
                  style={styles.gambar2}>
                    <Text onPress={() => this.props.navigation.navigate('Restaurant')} style={styles.btn}/>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=pexels-life-of-pix-67468.jpg&fm=jpg'}} 
                    style={styles.gambar2}>
                      <Text onPress={() => this.props.navigation.navigate('Restaurant')} style={styles.btn}/>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?cs=srgb&dl=pexels-pixabay-262047.jpg&fm=jpg'}} 
                  style={styles.gambar2}>
                    <Text onPress={() => this.props.navigation.navigate('Restaurant')} style={styles.btn}/>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        {/*<Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button style={styles.footer}>
              <Icon style={styles.icon} name="home" onPress={() => this.props.navigation.navigate('Food')}/>
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
        </Footer>*/}
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  footer:{
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center'
  },
  background: {
    width,
    height,
    resizeMode: 'cover'
  },
  btn: {
    alignContent:'stretch', 
    marginTop:5, 
    fontSize: 100
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
  card: {
    flex: 3,
    margin : 5
  },
  button: {
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
    marginLeft: -28
  },
  text2: {
    color: '#00ddbf',
    fontSize: 13,
    marginRight: 10,
    marginLeft: 244,
    marginTop: 20
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
    marginTop: 145,
    backgroundColor: 'white'
  },
  bodys1:{
    marginTop: 145
  },
  gambar:{
    height: 200, 
    width: null, 
    flex: 1,
    borderRadius: 500
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
    marginRight: 50,
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 15,
  },
  bawah1:{
    fontSize: 13,
    marginLeft: 5,
    color: '#bdbdbd',
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
  atas: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
});