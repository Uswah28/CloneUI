import React, {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {Text, Container, Button} from 'native-base';
const {width} = Dimensions.get("window");
const height = width * 1;
const image = [
  'https://i.pinimg.com/564x/db/28/c4/db28c421aa6bb412996c241729058549.jpg',
  'https://i.pinimg.com/236x/05/bb/97/05bb97644fe5898b7fd359179308f0f0.jpg',
  'https://i.pinimg.com/564x/3d/55/69/3d5569a18accdc9c6459b703521e190c.jpg',
  'https://i.pinimg.com/564x/fd/3f/50/fd3f5000d9305d46d5d1b6e0a357884b.jpg'
]
export default class Home extends Component {
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
            <View style={styles.gambar}>
          <ScrollView
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
                  <Text style={styles.bwhjudul}>
                  Set your location to start exploring 
                  {"\n"}        restaurants around you
                </Text>
                <Button block light style={styles.btn1}
                onPress={() => 
                  this.props.navigation.navigate('Login')}>
            <Text style={styles.text}>Login</Text>
             </Button>
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
        </Container>
    );
  }
}
const styles = StyleSheet.create({
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
  font:{
    fontSize: 40,
    fontWeight: 'bold',
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    alignSelf: 'center',
    marginBottom: 75
  },
  gambar:{
    height, 
    width, 
    flex: 1,
    backgroundColor: '#ffb200'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  background: {
    width,
      backgroundColor: "#ffb200"
      
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 70,
    alignSelf: "center"
  },
  judul: {
    fontWeight: 'bold',
    alignSelf: 'center', 
    fontSize: 40,
    fontFamily: 'mono',
    marginTop: 50
  },
  bwhjudul: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: 'mono',
    marginTop: 400,
    marginLeft: 50,
    marginRight: 30,
  },
  text: {
    fontFamily: 'mono',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 17
  },
  btn1: {
    backgroundColor:'#fff',
    marginLeft: 15,
    marginRight: 10,
    marginTop: 100,
    marginBottom:150
  },
});