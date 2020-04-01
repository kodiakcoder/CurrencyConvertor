import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native'


export default EStyleSheet.create(
    
    
    {
        $primaryColor:'$primaryBlue',
        $underlayColor:'red',
        row:{
            paddingHorizontal:20,
            paddingVertical:16,
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems:'center',
            backgroundColor:'white',
        },
        text:{
            fontSize:16,
            color:'black'
        },
        separator:{
            marginLeft:20,
            backgroundColor:'grey',
            flex:1,
            height:StyleSheet.hairlineWidth,
        },
        icon:{
            backgroundColor:'transparent',
            width:30,
            height:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center'
        },
        iconVisible:{
            backgroundColor:'$primaryColor',
        },
        checkIcon:{
            width:18,
        }


    }
)