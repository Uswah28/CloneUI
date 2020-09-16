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
import {List, ListItem, Thumbnail, Header, Content, Card, CardItem, Button, Icon, Right, Left, Body } from "native-base";
const {width} = Dimensions.get("window");
const height = width * 0.7;
export default class Restaurant extends Component {
  render() {
    return (
      <ScrollView>
        <View>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?cs=srgb&dl=pexels-pixabay-262047.jpg&fm=jpg'}} 
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
            <ListItem>
              <Left>
            <Text style={styles.txt3}>Reviews{"\n"}</Text>
            </Left>
            </ListItem>
            <View style={styles.view2}>
            <View>
                <Thumbnail large source={{uri: 'https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                style={styles.gambar4} />
                        </View>
                        <View>
                            <Text style={styles.txt3}>Kelly West</Text>
                            <Text style={styles.txt}>45 Reviews, 210 Followers</Text>
                        </View>
                        <View>
                        <Button bordered style={styles.btn}>
            <Text style={styles.txt4}>Follow</Text>
          </Button>
                        </View>
                    </View>
                    <View>
                      <Icon type='FontAwesome' name='star' style={{ fontSize: 20, color: 'yellow' }} />
                          <Icon type='FontAwesome' name='star' style={{ fontSize: 20, color: 'yellow' }} />
                          <Icon type='FontAwesome' name='star' style={{ fontSize: 20, color: 'yellow' }} />
                          <Icon type='FontAwesome' name='star' style={{ fontSize: 20, color: 'yellow' }} />
                          <Icon type='FontAwesome' name='star-o' style={{ fontSize: 20, color: 'yellow' }} />
                    </View>
            </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  txt4:{
    color:'blue',
    width: 70,
    height: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  btn:{
    color:'blue',
    width: 70,
    height: 30,
    marginLeft: 20,
    borderRadius: 20
  },
  gambar4:{
    marginTop: -15
  },
  view2:{ 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 20
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
    marginLeft: 10
  },
  txt2:{
    color: 'blue',
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
  text:{
    fontSize: 13,
    color:'#000'
  },
  icon3:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 40,
    textAlign: 'center',
    color:'blue'
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