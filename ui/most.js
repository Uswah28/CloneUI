import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Right, Left, Body, Text } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.7;
export default class Restaurant extends Component {
  render() {
    return (
      <ScrollView>
        <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg'}} 
                    style={styles.gambar2}>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.judul}>
            Blacksmith {"\n"}Cafe
          </Text>
        </Content>
        </ImageBackground>
        <Button full warning
          onPress={() => this.props.navigation.navigate('City')}>
            <Text style={styles.text3}>Order Food Online</Text>
             </Button>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text3:{
    fontSize: 15,
    fontFamily: 'mono',
    color:'#fff'
  },
  judul: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 90,
    marginLeft: 10,
    fontFamily: 'mono',
  },
gambar2:{
  height, 
  width, 
  flex: 1,
  borderRadius: 500
}
});