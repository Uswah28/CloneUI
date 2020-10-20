import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions, 
  Text
} from 'react-native';
import axios from 'axios';
import Card from './component/cardMo';
import { FlatList } from 'react-native-gesture-handler';
import { Header, Body, Container } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.25;
export default class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    }
  }

componentDidMount() {
  axios.get('http://192.168.43.129:5000/fav/')
      .then(response => {
        const image = response.data;
        this.setState({ image })
        console.log(image)
      })
      .catch((error) => {
        console.log(error);
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
                    data={this.state.image}
                    keyExtractor={(item) => item._id}
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