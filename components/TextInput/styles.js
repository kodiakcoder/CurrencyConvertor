import EStyleSheet from 'react-native-extended-stylesheet'



export default EStyleSheet.create(
    {
        container:{
            flexDirection:'row',
            width: '80%',
            marginTop:15,
            height:48,
            alignItems:'center',
            borderRadius:40,
        },
        button:{
            backgroundColor:'white',
            justifyContent:'center',
            padding:15,
        },
        buttonText:{
            fontSize:'1.2rem',
            fontWeight:'600',
        },
        input:{
            backgroundColor:'white',
            padding:15,
            width:'80%',
            fontSize:'1rem',
            
        },
        divider:{
            borderRightWidth:1,
            borderRightColor:'grey'
        }

    }
)