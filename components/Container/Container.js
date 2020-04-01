import React from 'react';
import {View,Text,TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';

const Container = (props) =>{
    const styleContainer = [styles.container]
    const {color} = props
    
    if(color){
        styleContainer.push({backgroundColor:color})
    }    
    
    return(
    <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()} >
    <View style={styleContainer}>
        {props.children}
    </View>
    </TouchableWithoutFeedback>
    )
}




export default Container;