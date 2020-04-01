import React from 'react';
import {View, Image,Text} from 'react-native';
import styles from './styles';


//- TODO  LOGO ANIMATION WHEN KEYBOARD IS ACTIVE


const Logo = () => (
  <View style={styles.logoContainer}>
    <Image style={styles.logoImage} resizeMode='contain' source={require('./Assets/Logo.png')} />
    <Text style={styles.logoText}>Crypto Convertor App</Text>
  </View>
);

export default Logo;
