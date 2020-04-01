import React from 'react';
import {Text,View, TouchableHighlight} from 'react-native';
import Icon from './Icon';
import styles from './styles';

const ListItem = ({text,onPress,selected= false,checkmark= true, visible = true, customIcon=null,iconbackground}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>
                {text}
            </Text>
            {selected ? <Icon checkmark={checkmark} visible={visible} iconbackground={iconbackground}/>: <Icon />}
            {customIcon}
        </View>
    </TouchableHighlight>
)



export default (ListItem);