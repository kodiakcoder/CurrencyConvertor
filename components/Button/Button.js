import React from 'react';
import {View,TouchableHighlight,Text} from 'react-native';

import Styles from './styles';


const Button = () => (
    <View style={Styles.container}>
    <TouchableHighlight onPress={() => alert('Change')}>
        
        <Text style={Styles.text}>
            Reverse Currencies
        </Text>
    </TouchableHighlight>
    </View>
)

export default Button;