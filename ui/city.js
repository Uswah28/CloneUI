import React, { Component } from 'react';

import { SocialIcon } from 'react-native-elements';
import {} from 'react-native-vector-icons';
import { Container, Content, Header, Left, Button, Icon, Body, Right, Title} from 'native-base';
export default class City extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
        <Left>
        <Icon type={"AntDesign"} name="arrowleft" style={{marginTop: 20, marginLeft: 10}}
            onPress={() => this.props.navigation.navigate('Verify')}/>
          </Left>
          <Body>
            <Title>User current location</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fff'
    }
});