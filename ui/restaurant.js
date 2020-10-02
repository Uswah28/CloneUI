import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions, 
  Text
} from 'react-native';
import ListItemRe from './component/listItemRe';
import ViewRe from './component/viewRe';
import ListRe from './component/listRe';
import {List, ListItem, Thumbnail, Header, Content, Card,
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
            <ListItemRe
            up='Call'
            down='(+61) 2 3872 8392'/>
            <ListItemRe
            up='Cuisines'
            down='Australia, Cafe'/>
            <ListItemRe
            up='Average Cost'
            down='$20 - $50'/>
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
            <ViewRe 
                  images={{uri: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  images2={{uri: 'https://images.pexels.com/photos/3662130/pexels-photo-3662130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  images3={{uri: 'https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  images4={{uri: 'https://images.pexels.com/photos/3785709/pexels-photo-3785709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                  /> 
              <ListItem>
              <Text style={styles.text2}>Food{"\n"} <Text style={styles.txt}>(80)</Text></Text> 
              <Text style={styles.text2}>Specials{"\n"}   <Text style={styles.txt}>(122)</Text></Text>
              <Text style={styles.text2}>  Menu{"\n"}   <Text style={styles.txt}>(10)</Text></Text>
              <Text style={styles.text2}>All Photos{"\n"}    <Text style={styles.txt}>(115)</Text></Text>
              </ListItem>
            <List style={styles.view2}>
              <Text style={styles.txt3}>Reviews{"\n"}</Text>
              </List>
              <ListRe
              thumb={{uri: 'https://images.pexels.com/photos/3439818/pexels-photo-3439818.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-3439818.jpg&fm=jpg'}} 
                up='Kelly West'
                image1={{uri: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1893556.jpg&fm=jpg'}} 
                image2={{uri: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?cs=srgb&dl=pexels-nerfee-mirandilla-3186654.jpg&fm=jpg'}} 
                image3={{uri: 'https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                image4={{uri: 'https://images.pexels.com/photos/3206433/pexels-photo-3206433.jpeg?cs=srgb&dl=pexels-nadi-lindsay-3206433.jpg&fm=jpg'}} 
              />
              <ListRe
              thumb={{uri: 'https://images.pexels.com/photos/3556533/pexels-photo-3556533.jpeg?cs=srgb&dl=pexels-oladimeji-ajegbile-3556533.jpg&fm=jpg'}} 
                up='Jason Mars'
                image1={{uri: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                image2={{uri: 'https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                image3={{uri: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                image4={{uri: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
              />
            <List style={styles.view2}>
              <Text style={styles.txt1}>Read all (123){"\n"}</Text>
              </List>
            </View>
      </ScrollView>
      
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
gambar2:{
  height, 
  width, 
  flex: 1
}
});