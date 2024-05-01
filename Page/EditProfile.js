import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image,Pressable,TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    
    const navigation = useNavigation();
    
    const navtoLogin = () => {
        navigation.navigate('Login')
    }

    

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{width:"100%"}}>
        <Text style={styles.HeaderText}>Edit Profile</Text>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput style={styles.inputFillBox} placeholder='Tawan '/>
            <Text style={styles.inputText}>Birth Day</Text>
            <TextInput style={styles.inputFillBox} placeholder='31/03/2003'/>
            <Text style={styles.inputText}>Email</Text>
            <TextInput style={styles.inputFillBox} placeholder='tawan@gmail.com'/>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputFillBox} placeholder='Password' secureTextEntry />
            
            
            <Pressable style={styles.loginButton} onPress={navtoLogin}><Text style={styles.buttonText}>Save Information</Text></Pressable>
            <Pressable><Text style={styles.cancelText} onPress={navtoLogin}>Cancel</Text></Pressable>
            
        </View>
        </ScrollView>   
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#fff",
      },
    
      HeaderText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000" ,
        marginStart:15,
        marginTop:10,
        textAlign:"center",
    },
      inputText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#000" ,
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
        borderWidth:2,
        borderColor:"#D9D9D9"
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

    editButtonBox:{
        flexDirection:"row",
        justifyContent:"space-around"
    },

    AddButton:{
        backgroundColor:"#A2D595",
        width: "40%" ,
        height:45,
        borderRadius:20,
        padding:10,
        margin:20,
    },

    DeleteButton:{
        backgroundColor:"#E44614",
        width: "40%" ,
        height:45,
        borderRadius:20,
        padding:10,
        margin:20,
    },

    cancelText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      marginTop:0,
      alignSelf:"center",
  },
})