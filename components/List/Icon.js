import React from 'react';
import {View,Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';


const Icon = ({checkmark, visible, iconbackground, iconColor}) => {
    const  iconStyles = [styles.icon]
    if(visible)
    {
        iconStyles.push(styles.iconVisible)
    }

    if(iconbackground)
    {
        iconStyles.push({backgroundColor:iconbackground})
    }

    if(iconColor && visible && !visible)
    {
        iconStyles.push({backgroundColor:iconColor})
    }

    return (
        <View style={iconStyles}>
           {checkmark ? <Image resizeMode="contain" style={styles.checkIcon} source={require('./images/check.png')}/> : null}
        </View>
    )
};

const mapStateToProps = (state)=>(
    {
        iconColor:state.primaryColor,
    }
)

export default connect(mapStateToProps)(Icon);
