import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions, 
  Text
} from 'react-native';
import CardMO from './component/cardMo';
import { FlatList } from 'react-native-gesture-handler';
import { Header, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.25;
export default class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
        explore: [],
        show: false,
        show2: false,
    }
}

componentDidMount() {
    this.setState({
        explore: [
            {
                id: '1',
                image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'Good Thai',
                no: '4.8'
            },
            {
                id: '2',
                image: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'Sushi Car',
                no: '3.8',
            },
            {
                id: '3',
                image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'Blacksmith Cafe',
                no: '4.8',
            },
            {
              id: '4',
              image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              title: 'Pizza Box',
              no: '4.2',
          },
        ]
    })
}
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
        <FlatList
                    data={this.state.explore}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <Card
                            thumb={item.image}
                            good={item.title}
                            no={item.no}
                        />
                    )}
                    />   
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