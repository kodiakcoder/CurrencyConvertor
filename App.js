import React from 'react';

import Navigation from './config/routes';
import 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './config/store';

EStyleSheet.build({
	$textPrimary: 'white',
	$textSecondary: 'black',
	
	$primaryBlue: '#3137B4',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#00BD9D',
	$primaryPurple: '#9E768F',	
})


const App = () => {
	console.log(store.getState())
	return(
//	<Home />

	<Provider store={store}>
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	</Provider>
)
	}

export default App;
