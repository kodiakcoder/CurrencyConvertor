import React from 'react';
import {ScrollView, StatusBar,SafeAreaView, Linking} from 'react-native';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import Icons from 'react-native-vector-icons/Ionicons';
import Themes from '../screens/Themes';

const Options = ({navigation: {navigate}}) => {

    handleThemePress = () =>{
        //alert('Theme press')
        navigate('Themes')
    }

    handleSitePress= () => {
        Linking.openURL('http://fixer.io')
    }


    return(
        <SafeAreaView>
            <ScrollView >
                <StatusBar translucent={false} barStyle='default'/>
                <ListItem text='Theme' onPress={handleThemePress} 
                customIcon={<Icons name='ios-arrow-forward' color='grey' size={25}/>}
                />
                <Separator/>
                <ListItem text='Fixer.io' onPress={handleSitePress}
                customIcon={<Icons name='ios-link' color='grey' size={25}/>}
                />
            </ScrollView>
        </SafeAreaView>
    )
}


export default Options