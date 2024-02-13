import { View, Text ,Image ,Pressable} from 'react-native'
import React from 'react'

const LandingPage = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Home')
    }


  return (
    <Pressable onPress={onPress}>
        <View style={{height: "100%", alignItems: "center", backgroundColor:"#8E5431"}}>
            <View style={{ flex: 1,justifyContent: "center",alignContent:"center"}}>
                <Image source={require('../assets/CofHunterLogo.png')}  style={{width:150, height:210}}/>
                <Text style={{justifyContent: "center",color: "white",fontSize: "30px"}}>Cof Hunter</Text>
            </View>
        </View>
    </Pressable>    
  )
    

}

export default LandingPage