import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import Styles from './styles';


const Header = ({onClick}) => (
    <View style={Styles.container}>
        <TouchableHighlight onPress={onClick}>
            <Text style={Styles.text}>
            Settings
            </Text>
        </TouchableHighlight>
    </View>
)


export default Header;