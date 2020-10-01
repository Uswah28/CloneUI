import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    ImageBackground,
} from 'react-native';
import { ListItem, List, Thumbnail, Button, Icon, CardItem} from 'native-base';

const ListRe = (props) => {
    return (
        <List>
            <View style={styles.view2}>
            <View>
                <Thumbnail source={props.thumb}/>
                        </View>
                        <View>
                            <Text style={styles.txt3}>{props.up}</Text>
                            <Text style={styles.bawah1}>45 Reviews, 210 Followers</Text>
                        </View>
                        <View>
                        <Button bordered style={styles.btn}>
            <Text style={styles.txt4}>Follow</Text>
          </Button>
                        </View>
                    </View>
                    <View>
                    <View style={styles.rating}>
                      <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star' style={styles.star} />
                          <Icon type='FontAwesome' name='star-o' style={styles.star} />
                          <Text style={styles.rat}>4.0</Text>
                    <Icon type='AntDesign' name='like2' style={styles.star2} />
                          <Icon type='FontAwesome' name='comment-o' />
                    </View>
                    </View>
                    <List>
                      <ListItem style={styles.rating}>
                      <Text style={styles.txt}>I enjoyed the food of the restaurant. The dishes are
                        attractive and very beautiful. Good food, luxurious space
                        and enthusiastic service. I will be back in the...
                        <Text style={styles.rat3}>Read More</Text></Text>
                        </ListItem>
                    </List>
                    <View style={styles.view}>
              <ScrollView horizontal>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={props.image1} 
                   style={styles.gambar}/></CardItem>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={props.image2} 
                  style={styles.gambar}/></CardItem>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={props.image3}
                  style={styles.gambar}/></CardItem>
                  <CardItem cardBody style={styles.card}>
                  <ImageBackground source={props.image4}
                  style={styles.gambar}><Text style={styles.txt5}>+12</Text>
                    </ImageBackground>
                  </CardItem>
              </ScrollView>
            </View>
            </List>
    )
}
const styles = StyleSheet.create({
    view2:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 10
      },
      txt3:{
        fontSize: 20,
        fontFamily: 'mono',
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
      },
      bawah1:{
        fontSize: 12,
        marginLeft: 10,
        color: '#bdbdbd',
      },
      btn:{
        borderColor:'#00ddbf',
        width: 70,
        height: 30,
        marginLeft: 50,
        borderRadius: 20,
        marginTop: 15
      },
      txt4:{
        color:'#00ddbf',
        width: 70,
        height: 30,
        textAlignVertical: "center",
        textAlign: "center",
      },
      rating: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10
      },
      star2:{ 
        fontSize: 25, 
        color: '#ffe44c',
        marginLeft: 100,
        marginRight: 25
      },
      star:{ 
        fontSize: 20, 
        color: '#ffe44c',
        margin: 2
      },
      rat: {
        color: '#ffe44c',
        fontSize: 15,
        margin: 5
      },
      txt: {
        color: '#888',
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'mono',
        alignSelf: 'flex-start'
      },
      rat3:{
        color: '#00ddbf'
      },
      view: {
        marginLeft: 10,
        marginTop:-3
      },
      card: {
        flex: 3,
        margin: 3
      },
      txt5:{
        color:'#fff',
        textAlign: "center",
        marginTop: 35
      },
      gambar:{
        height: 80, 
        width: 80, 
        flex: 1
      }
})

export default ListRe;