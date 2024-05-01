import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image,Pressable,TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    
    const navigation = useNavigation();
    
    const navtoLogin = () => {
        navigation.navigate('Login')
    }

    const navtoEditInfo= () => {
      navigation.navigate('EditCafeInfo')
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.HeaderText}>Register to become</Text>
        <Text style={styles.HeaderText}>The Cof Hunter</Text>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>UserName</Text>
            <TextInput style={styles.inputFillBox} placeholder='Username'/>
            <Text style={styles.inputText}>Email</Text>
            <TextInput style={styles.inputFillBox} placeholder='Email'/>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputFillBox} placeholder='Password' secureTextEntry />
            <Pressable style={styles.loginButton} onPress={navtoEditInfo}><Text style={styles.buttonText}>Register</Text></Pressable>
            <Pressable><Text style={styles.detailText} onPress={navtoLogin}>Already have an account? Login</Text></Pressable>
        </View>   
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#8E5431",
      },
    
      HeaderText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff" ,
        marginStart:15,
        marginTop:10,
        textAlign:"center",
    },
      inputText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff" ,
        marginStart:15,
        marginTop:10,
        textAlign:'left',
        marginHorizontal:20,
      },
    
      inputBox:{
        marginVertical: 15,
        alignSelf:"center",
        width:"90%",
      },
    
      inputFillBox:{
        backgroundColor:"#fff",
        width: "90%" ,
        height:45,
        borderRadius:20,
        alignSelf:"center",
        padding:10,
        margin:10,
      },
    
      loginButton:{
        backgroundColor:"#A2D595",
        width: "90%" ,
        height:45,
        borderRadius:20,
        alignSelf:"center",
        padding:10,
        margin:20,
      },
    
      buttonText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff" ,
        textAlign:'center',
        
      },
    
      detailText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginTop:0,
        alignSelf:"center",
    },
})