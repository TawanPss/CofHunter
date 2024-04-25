import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const navtoHome = () => {
        navigation.navigate('Home')
    }

    const navtoReg = () => {
        navigation.navigate('Register')
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.HeaderText}>Welcome to</Text>
        <Text style={styles.HeaderText}>Cof Hunter</Text>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>UserName</Text>
            <TextInput style={styles.inputFillBox} placeholder='Username'/>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputFillBox} placeholder='Password' secureTextEntry />
            <Pressable style={styles.loginButton} onPress={navtoHome}><Text style={styles.buttonText}>Login</Text></Pressable>
            <Pressable><Text style={styles.detailText} onPress={navtoReg}>Don't have an account? Register</Text></Pressable>
        </View>
         
    </SafeAreaView>
  )
}

export default Login

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