import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Themes from '../screens/Themes';
import Options from '../screens/Options';


const Stack = createStackNavigator();
const OptionsStack = createStackNavigator();


const NavigationOption = () =>(
    <Stack.Navigator mode="card">
        <Stack.Screen name="Home" component={Home} options={ {headerShown: false}} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Themes" component={Themes} />
    </Stack.Navigator>
)


const Navigation = () => (
    <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen name="Home" component={NavigationOption} options={ {headerShown: false}} />
        <Stack.Screen name="CurrencyList" component={CurrencyList} options={({ route }) => ({ title: route.params.title })}/>
        
    </Stack.Navigator>
)


export default Navigation;