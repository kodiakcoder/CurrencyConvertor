import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const ClearText = ({base,conversion,quote,date}) => (
    <View>
        <Text style={styles.text}>
            1 {base} = {conversion} {quote} as of {moment(date).format('MMMM D,Y')}
        </Text>
    </View>
)



export default ClearText;