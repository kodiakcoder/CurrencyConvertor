import React from 'react';
import {View, Text,FlatList,StatusBar} from 'react-native';
import CurrencyListStyles from './CurrencyListStyles';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator'
import {connect} from 'react-redux';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

const CurrencyList = ({navigation: {goBack}, primaryBackground}) => {
    
    
    const handlePress = (item) => {
        console.log(item)
        goBack()
    }

    return (
    <View style={CurrencyListStyles.container}>
        <StatusBar barStyle='default' translucent={false}/>
        <FlatList 
        data={currencies}
        renderItem={({item}) => (
        <ListItem
            text={item}
            selected={item === TEMP_CURRENT_CURRENCY}
            onPress={()=>handlePress(item)}
            iconbackground={primaryBackground}
        />
        )
        }
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
        />
    </View>
    )
}


const mapStateToProps = (state) =>(
    {
        primaryBackground:state.primaryColor,
    }
)

export default connect(mapStateToProps)(CurrencyList);