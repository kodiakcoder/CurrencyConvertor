/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StatusBar,KeyboardAvoidingView} from 'react-native';
import Logo from '../components/Logo/Logo';
import Container from '../components/Container/Container';
import InputWithText from '../components/TextInput/InputWithText';
import ClearText from '../components/Texts/ClearText';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import {connect} from 'react-redux';
import {swap_Currency} from '../actions/currencies';

const TEMP_BASE= 'USD'
const TEMP_QUOTE= 'GBP'
const TEMP_BASE_VALUE = '100'
const TEMP_QUOTE_VALUE = '0.75'



const Home = ({navigation:{navigate},primaryColor}) => {

    const onButtonClickBase = () => {
        
        navigate('CurrencyList', {title:'Base Currency'})
    }

    const onButtonClickQuote =() =>{
        navigate('CurrencyList', {title:'Quote Currency'})
    }

    const onButtonClickSettings =() =>{
        navigate('Options')
    }

    const handleTextChange = (text) => {
        console.log(text)
    }

    const handleSwapCurrency = () =>{
        alert('swapping currency')
        const {dispatch}  = props;
        dispatch(swap_Currency())
    }


    return(
        <Container color={primaryColor}>
            <StatusBar translucent={false} barStyle='light-content'/>
            <Header onClick={onButtonClickSettings} />
            <KeyboardAvoidingView behavior='padding'>
            <Logo />
            <InputWithText buttonText={TEMP_BASE} onClick={onButtonClickBase} onChangeText={() =>handleTextChange(amount)} placeholder={TEMP_BASE_VALUE} onChangeText={() => handleTextChange(text)}/>
            <InputWithText buttonText={TEMP_QUOTE} onClick={onButtonClickQuote} editable={false} placeholder={TEMP_QUOTE_VALUE}/>
            <ClearText base={TEMP_BASE} quote={TEMP_QUOTE} conversion={TEMP_QUOTE_VALUE} date ={Date.now()}/>
            <Button />
            </KeyboardAvoidingView>
        </Container>
    )
}

const mapStateToProps = (state) =>(
    {
        primaryColor:state.primaryColor,
    }
)

export default connect(mapStateToProps)(Home);