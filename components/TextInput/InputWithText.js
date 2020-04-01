import React from 'react';
import {View, Text,TouchableHighlight,TextInput} from 'react-native';
import styles from './styles';


const InputWithText = ({buttonText,onClick,editable = true,onChangeText,placeholder}) => {

    const stylesInput = [styles.input]
    if(editable === false)
    {
        stylesInput.push({backgroundColor:'#F0F0F0'})
    }



    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={onClick} >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.divider}/>
            <TextInput value={placeholder}
            style={stylesInput}
            keyboardType='numeric'
            editable={editable}
            />
        </View>
    )
}


export default InputWithText;