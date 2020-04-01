import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'


const imageWidth = Dimensions.get('window').width 

export default EStyleSheet.create(
    {
        logoContainer:{
            alignItems: 'center',
            justifyContent: 'center'    
        },
        logoImage:{
            width: imageWidth/1.8,
        },
        logoText:{
            color:'$textPrimary',
            fontSize:'1.5rem',
            marginTop:0,
            fontWeight:'600',
        }
    }
)