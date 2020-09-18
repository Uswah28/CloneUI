import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions, 
  Text
} from 'react-native';
import {List, Content, ListItem, Thumbnail, Header, Card, Footer, FooterTab, 
  CardItem, Button, Icon, Right, Left, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.7;
export default class Place extends Component {
  render() {
    return (
      <Container>
      <ScrollView>
        <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
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
            <Text style={styles.txt2}>Filter</Text>
            </Right>
            </ListItem>
          </List>
          <Card style={styles.view}>
            <CardItem>
            <Thumbnail square large source={{uri:'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
            style={styles.gambar}/>
            <Text style={styles.txt3}>Good Thai
            <Text style={styles.rat}>{"\n"}{"\n"}11.30AM to 11PM{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text></Text>
            <Button warning style={styles.btn}><Text style={styles.text}> 4.8 </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Thumbnail square large source={{uri:'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
            style={styles.gambar}/>
            <Text style={styles.txt3}>Sushi Car 
            <Text style={styles.rat}>{"\n"}{"\n"}11.30AM to 11PM{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text></Text>
            <Button danger style={styles.btn}><Text style={styles.text}> 3.8 </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Thumbnail square large source={{uri:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
            style={styles.gambar}/>
            <Text style={styles.txt3}>Blacksmith Cafe
            <Text style={styles.rat}>{"\n"}{"\n"}11.30AM to 11PM{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text></Text>
            <Button warning style={styles.btn2}><Text style={styles.text}> 4.8 </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Thumbnail square large source={{uri:'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
            style={styles.gambar}/>
            <Text style={styles.txt3}>Pizza Box
            <Text style={styles.rat}>{"\n"}{"\n"}11.30AM to 11PM{"\n"}
            {"\n"}20 Queen Street, NSW{"\n"}Asia, Thai</Text></Text>
            <Button warning style={styles.btn}><Text style={styles.text}> 4.2 </Text></Button>
            <Icon type='FontAwesome' name='bookmark' style={styles.icon} />
            </CardItem>
          </Card>
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
              <Icon name="heart" />
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
    marginLeft: 65,
    borderRadius: 5
  },
  btn:{
    width: 40,
    height: 30,
    textAlign: "center",
    marginLeft: 90,
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
    fontWeight: 'bold',
    marginLeft: 10
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
    marginLeft: 2,
    fontWeight: 'bold'
  },
  footer:{
    backgroundColor: 'white'
  },
  judul: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'mono',
  },
  gambar:{
    borderRadius: 10
  },
gambar2:{
  height, 
  width, 
  flex: 1
},
});