import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions, 
  Text,
  Image
} from 'react-native';
import {List, ListItem, Thumbnail, Header, Content, Card, Footer, FooterTab, 
  CardItem, Button, Icon, Right, Left, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.7;
export default class Restaurant extends Component {
  render() {
    return (
      <Container>
      <ScrollView>
        <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg'}} 
                    style={styles.gambar2}>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Food')}/>
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content>
          <Text style={styles.judul}>
            Blacksmith {"\n"}Cafe
          </Text>
        </Content>
        </ImageBackground>
        <Button full warning
          onPress={() => this.props.navigation.navigate('Food')}>
            <Text style={styles.text3}>Order Food Online</Text>
             </Button>
             <List>
            <ListItem>
                <Icon type='SimpleLineIcons' name="share-alt" style={styles.icon}>
                {"\n"}<Text style={styles.text}> Share </Text></Icon>
              <Icon type='AntDesign' name="staro" style={styles.icon2}>{"\n"} 
              <Text style={styles.text}>Review</Text></Icon>
              <Icon type='Feather' name="camera" style={styles.icon2}>{"\n"}
              <Text style={styles.text}>Photo</Text></Icon>
            </ListItem>
            <ListItem>
              <Left>
            <Text style={styles.txt}>123 Queen Street, Sydney
            {"\n"}Australia Cafe{"\n"}11.30AM to 11PM</Text>
            </Left>
            <Right>
            <Icon type='MaterialIcons' name="place" style={styles.icon3}/>
            </Right>
            </ListItem>
            <ListItem>
              <Left>
            <Text style={styles.txt}>Call</Text>
            </Left>
            <Right>
            <Text style={styles.txt2}>(+61) 2 3872 8392</Text>
            </Right>
            </ListItem>
            <ListItem>
              <Left>
            <Text style={styles.txt}>Cuisines</Text>
            </Left>
            <Right>
            <Text style={styles.txt2}>Australia, Cafe</Text>
            </Right>
            </ListItem>
            <ListItem>
              <Left>
            <Text style={styles.txt}>Average Cost</Text>
            </Left>
            <Right>
            <Text style={styles.txt2}>$20 - $50</Text>
            </Right>
            </ListItem>
            <ListItem>
              <Left>
            <Text style={styles.txt3}>Photos</Text>
            </Left>
            <Right>
            <Text style={styles.txt2}>+ Add</Text>
            </Right>
            </ListItem>
            </List>
      </View>
      <View>
            <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3662130/pexels-photo-3662130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3785709/pexels-photo-3785709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View> 
            <ListItem>
              <Text style={styles.text2}>Food{"\n"} (80)</Text> 
              <Text style={styles.text2}>Specials{"\n"}   (122)</Text>
              <Text style={styles.text2}>  Menu{"\n"}   (10)</Text>
              <Text style={styles.text2}>All Photos{"\n"}    (115)</Text>
            </ListItem>
            <List style={styles.view2}>
              <Text style={styles.txt3}>Reviews{"\n"}</Text>
              </List>
            <View style={styles.view2}>
            <View>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/3439818/pexels-photo-3439818.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-3439818.jpg&fm=jpg'}} 
                style={styles.gambar4} />
                        </View>
                        <View>
                            <Text style={styles.txt3}>Kelly West</Text>
                            <Text style={styles.bawah1}>45 Reviews, 210 Followers</Text>
                        </View>
                        <View>
                        <Button bordered style={styles.btn}>
            <Text style={styles.txt4}>Follow</Text>
          </Button>
                        </View>
                    </View>
                    <View>
                    <View style={styles.rating}>
                      <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star-o' style={styles.star} />
                          <Text style={styles.rat}>4.0</Text>
                    <Icon type='AntDesign' name='like2' style={styles.star2} />
                          <Icon type='FontAwesome' name='comment-o' />
                    </View>
                    </View>
                    <List>
                      <ListItem style={styles.rating}>
                      <Text style={styles.txt}>I enjoyed the food of the restaurant. The dishes are
                        attractive and very beautiful. Good food, luxurious space
                        and enthusiastic service. I will be back in the...
                        <Text style={styles.rat3}>Read More</Text></Text>
                        </ListItem>
                    </List>
                    <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1893556.jpg&fm=jpg'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?cs=srgb&dl=pexels-nerfee-mirandilla-3186654.jpg&fm=jpg'}} 
                  style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3206433/pexels-photo-3206433.jpeg?cs=srgb&dl=pexels-nadi-lindsay-3206433.jpg&fm=jpg'}} 
                  style={styles.gambar}><Text style={styles.txt5}>+12</Text>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View>
            <View style={styles.view2}>
            <View>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/3556533/pexels-photo-3556533.jpeg?cs=srgb&dl=pexels-oladimeji-ajegbile-3556533.jpg&fm=jpg'}} 
                style={styles.gambar4} />
                        </View>
                        <View>
                            <Text style={styles.txt3}>Jason Mars</Text>
                            <Text style={styles.bawah1}>45 Reviews, 210 Followers</Text>
                        </View>
                        <View>
                        <Button bordered style={styles.btn}>
            <Text style={styles.txt4}>Follow</Text>
          </Button>
                        </View>
                    </View>
                    <View>
                    <View style={styles.rating}>
                      <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star-o' style={styles.star} />
                          <Text style={styles.rat}>4.0</Text>
                    <Icon type='AntDesign' name='like2' style={styles.star2} />
                          <Icon type='FontAwesome' name='comment-o' />
                    </View>
                    </View>
                    <List>
                      <ListItem style={styles.rating}>
                      <Text style={styles.txt}>I enjoyed the food of the restaurant. The dishes are
                        attractive and very beautiful. Good food, luxurious space
                        and enthusiastic service. I will be back in the...
                        <Text style={styles.rat3}>Read More</Text></Text>
                        </ListItem>
                    </List>
                    <View style={styles.view}>
              <ScrollView horizontal>
                <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                    style={styles.gambar}>
                    </ImageBackground>
                  </CardItem>
                  </Card>
                  <Card>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={{uri: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  style={styles.gambar}><Text style={styles.txt5}>+12</Text>
                    </ImageBackground>
                  </CardItem>
                  </Card>
              </ScrollView>
            </View>
            <List style={styles.view2}>
              <Text style={styles.txt1}>Read all (123){"\n"}</Text>
              </List>
            </View>
      </ScrollView>
      <Footer>
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
  txt1:{
    color: '#00ddbf',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txt5:{
    color:'#fff',
    textAlign: "center",
    marginTop: 35
  },
  rat3:{
    color: '#00ddbf'
  },
  rat2: {
    color: '#ffe44c'
  },
  rat: {
    color: '#ffe44c',
    fontSize: 15,
    margin: 5
  },
  footer:{
    backgroundColor: 'white'
  },
  rating: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  star2:{ 
    fontSize: 25, 
    color: '#ffe44c',
    marginLeft: 100,
    marginRight: 25
  },
  star:{ 
    fontSize: 20, 
    color: '#ffe44c',
    margin: 2
  },
  txt4:{
    color:'#00ddbf',
    width: 70,
    height: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  btn:{
    borderColor:'#00ddbf',
    width: 70,
    height: 30,
    marginLeft: 50,
    borderRadius: 20,
    marginTop: 15
  },
  gambar4:{
    marginTop: 0
  },
  view2:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 10
  },
  text2:{
    fontSize: 15,
    fontFamily: 'mono',
    color:'#000',
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
    marginTop:-15
  },
  card: {
    flex: 3
  },
  view: {
    marginLeft: 10,
    marginTop:-5
  },
  txt3:{
    fontSize: 20,
    fontFamily: 'mono',
    color:'#000',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  txt2:{
    color: '#00ddbf',
    fontSize: 15,
    marginLeft: -100,
    fontFamily: 'mono'
  },
  txt: {
    color: '#888',
    fontSize: 15,
    marginLeft: 10,
    fontFamily: 'mono',
    alignSelf: 'flex-start'
  },
  bawah1:{
    fontSize: 12,
    marginLeft: 10,
    color: '#bdbdbd',
  },
  text:{
    fontSize: 13,
    color:'#000'
  },
  icon3:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 40,
    textAlign: 'center',
    color:'#00ddbf'
  },
  icon2:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
    fontSize: 20,
    textAlign: 'center'
  },
  icon:{
    marginTop: 10,
    marginLeft: 75,
    marginRight: 13,
    fontSize: 20,
    textAlign: 'center'
  },
  text3:{
    fontSize: 20,
    fontFamily: 'mono',
    color:'#fff',
    fontWeight: 'bold'
  },
  judul: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 90,
    marginLeft: 10,
    fontFamily: 'mono',
  },
  gambar3:{
    height: 50, 
    width: 50,
  borderRadius: 50
  },
gambar2:{
  height, 
  width, 
  flex: 1
},
gambar:{
  height: 80, 
  width: 80, 
  flex: 1
}
});