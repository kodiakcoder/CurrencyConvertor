import React from 'react';
import {ScrollView, StatusBar, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import {connect} from 'react-redux';
import {changePrimaryColor} from '../actions/themes';

const styles = EStyleSheet.create(
    {
        $blue:'$primaryBlue',
        
	    $orange: '$primaryOrange',
	    $green: '$primaryGreen',
	    $purple:'$primaryPurple',
    }
)

const Themes = (props) =>{

    const handleThemePress = (color) =>{
        alert(color)
        const {navigation:{goBack}, dispatch} = props;
        dispatch(changePrimaryColor(color))
        goBack()
        
    }


   

    return(
        <SafeAreaView>
            <ScrollView>
                <StatusBar translucent={false} barStyle='default'/>

                <ListItem text="Blue" onPress={() => handleThemePress(styles.$blue)} selected={true} checkmark={false} iconbackground={styles.$blue}/>
                <Separator />
                <ListItem text="Orange" onPress={() => handleThemePress(styles.$orange)} selected={true} checkmark={false} iconbackground={styles.$orange}/>
                <Separator />
                <ListItem text="Green" onPress={() => handleThemePress(styles.$green)} selected={true} checkmark={false} iconbackground={styles.$green}/>
                <Separator />
                <ListItem text="Purple" onPress={() => handleThemePress(styles.$purple)} selected={true} checkmark={false} iconbackground={styles.$purple}/>
                <Separator />
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default connect()(Themes);