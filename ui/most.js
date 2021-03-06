import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions, 
  Text
} from 'react-native';

import CardMo from './component/cardMo';

import {List, ListItem, Header, Button, Icon, Right, Left, Radio, Body, Container } from "native-base";
  import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 6
const options = [
  'Cancel',
{
  component: <Text style={{fontSize: 12, color: '#bdbdbd', alignSelf: 'flex-start', marginLeft: 10}}>
    {"\n"}Quick filter</Text>,
  height: 40
},
{
  component: <ListItem selected={false} >
      <Text style={{ marginRight: 250 }}>Rated 5  </Text>
      <Radio color={"#f0ad4e"} selectedColor={"#f0ad4e"} selected={true}/></ListItem>,
    height: 50
  },
  {component: <ListItem selected={false} >
      <Text style={{ marginRight: 250 }}>Rated 4+</Text>
      <Radio color={"#f0ad4e"} selectedColor={"#f0ad4e"} selected={true}/></ListItem>,
    height: 50
  },
  {
    component: <ListItem selected={false} >
      <Text style={{ marginRight: 250 }}>Rated 3+</Text>
      <Radio color={"#f0ad4e"} selectedColor={"#f0ad4e"} selected={true}/></ListItem>,
    height: 50
  },
  {
    component: <Text style={{fontSize: 12, color: '#bdbdbd', alignSelf: 'flex-start', marginLeft: 10}}>
    {"\n"}Sort by</Text>,
  height: 40
  },
  {
    component: <ListItem selected={false} >
      <Text style={{ marginRight: 250 }}>Close to me</Text>
      <Radio color={"#888"} selectedColor={"#5cb85c"} selected={false}/></ListItem>,
    height: 50
  },
  {
    component: <ListItem selected={false} >
      <Text style={{ marginRight: 225 }}>Price high to low</Text>
      <Radio color={"#888"} selectedColor={"#5cb85c"} selected={false}/></ListItem>,
    height: 50
  },
  {
    component: <ListItem selected={false} >
      <Text style={{ marginRight: 225 }}>Price low to high</Text>
      <Radio color={"#888"} selectedColor={"#888"} selected={false}/></ListItem>,
    height: 50
  },
  {
    component: <Button disabled block style={{ marginLeft: 10, marginRight: 10, marginBottom: 5 }}>
      <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center' }}>
    Apply</Text></Button>,
    height: 70
  }
]
const title = <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 10 }}>
  Filter</Text>;
const {width} = Dimensions.get("window");
const height = width * 0.7;
export default class Most extends Component {
  state = {
    selected: 1
  }

  showActionSheet = () => this.actionSheet.show()

  getActionSheetRef = ref => (this.actionSheet = ref)

  render() {
    const { selected } = this.state
    const selectedText = options[selected].component || options[selected]
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
        </ImageBackground>
          <Text style={styles.judul}>
            Trending
          </Text>
          <List>
          <ListItem>
              <Left>
            <Text style={styles.txt3}>20 Restaurants</Text>
            </Left>
            <Right>
            <Text style={styles.txt2} onPress={this.showActionSheet}>Filter</Text>
            </Right>
            </ListItem>
          </List>
          <ActionSheet
          ref={this.getActionSheetRef}
          title={title}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
        />
          <CardMo 
            thumb={{uri:'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
            good='Good Thai'
            no='4.8'/>
          <CardMo
          thumb={{uri:'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
          good='Sushi Car'
          no='3.8'/>
          <CardMo
          thumb={{uri:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
          good='Blacksmith Cafe'
            no='4.8'/>
          <CardMo 
          thumb={{uri:'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
          good='Pizza Box'
            no='4.2'/>
        </View>
      </ScrollView>
      
    </Container>
    );
  }
}
const styles = StyleSheet.create({
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
  text:{
    color:'white',
    fontSize: 20,
    marginLeft: 2,
    fontWeight: 'bold'
  },
  judul: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'mono',
  },
gambar2:{
  height, 
  width, 
  flex: 1
}
});