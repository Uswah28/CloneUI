import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions, 
  Text
} from 'react-native';
import {List, ListItem, Thumbnail, Header, Card, Footer, FooterTab, 
  CardItem, Button, Icon, Right, Left, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.25;
export default class Favourite extends Component {
  render() {
    return (
      <Container>
          <Header style={styles.header}>
          <Body>
          <Text style={styles.judul}>
            Favourite
          </Text>
          </Body>
        </Header>
      <ScrollView>
        <View>
        
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
      
    </Container>
    );
  }
}
const styles = StyleSheet.create({
    icon2: {
        color: '#ffe44c'
      },
    header:{
        width,
        height,
        backgroundColor: '#fff'
    },
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
    marginTop:20
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
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 115,
    fontFamily: 'mono',
  },
  gambar:{
    borderRadius: 10
  },
});