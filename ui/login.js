import React, {
    Component
} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import {
    Container, Content, Button, Item, Input, Form
} from 'native-base';

export default class Login extends Component {

    render() {
        return (
        <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <Container style={styles.container}>
            <View>
                  <Text style={styles.judul}> 
                    Log in
                  </Text>
                </View>
                <Content>
                    <Form>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Name'
                                onChangeText={email =>
                                    this.setState({ email: email })
                                }
                                value={this.state.email}
                            />
                        </Item>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Address'
                                onChangeText={password =>
                                    this.setState({ password: password })
                                }
                                value={this.state.address}/>
                        </Item>
                    </Form>
                    <View style={styles.tombol}>
                    <Button full rounded transparent
                        styles={styles.tombol}
                        onPress={() => {
                            this.onSubmit();
                            this.props.navigation.navigate('Hal1')
                        }}>
                        <Text style={styles.text}>Login</Text>
                    </Button>
                    </View>
                </Content>
            </Container>
            </ScrollView>
        </SafeAreaView>
      </View>
        );
    }
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    container: {
      backgroundColor: '#a37b48',
      alignContent: 'center',
    },
    judul: {
      marginTop: 20,
      fontSize: 30,
      alignSelf: 'center',
      color: '#000',
      fontFamily: 'mono'
    },
    atas : {
      backgroundColor : "#fff",
      marginTop : 10, 
      marginLeft: 10, 
      marginRight: 10,
    },
    tombol: {
        backgroundColor: '#442700',
      marginTop : 20, 
      marginLeft: 10, 
      marginRight: 10,      
    },
    
    input: {
      fontSize: 15
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
  });