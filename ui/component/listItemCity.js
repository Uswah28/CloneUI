import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

import { ListItem, Right, Left, Icon} from 'native-base';

const ListItemCU = (props) => {
    return (
        <ListItem>
            <Left>
            <Icon name="flag"/>
                <Text onPress={props.onPress}>{props.left}</Text>
            </Left>
            <Right>
            <Icon name="chevron-forward"  />
            </Right>
        </ListItem>
    )
}

export default ListItemCU;