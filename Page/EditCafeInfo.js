import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image,Pressable,TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditCafeInfo = () => {
    
    const navigation = useNavigation();
    
    const navtoLogin = () => {
        navigation.navigate('Login')
    }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{width:"100%"}}>
        <Text style={styles.HeaderText}>Edit Cafe Information</Text>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Cafe Name</Text>
            <TextInput style={styles.inputFillBox} placeholder='GIM Brewing'/>
            <Text style={styles.inputText}>Email</Text>
            <TextInput style={styles.inputFillBox} placeholder='GIMBrewing@gmail.com'/>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputFillBox} placeholder='Password' secureTextEntry />
            <Text style={styles.inputText}>Open Time</Text>
            <TextInput style={styles.inputFillBox} placeholder='Daily 8.30-16.30'/>
            <Text style={styles.inputText}>Distric</Text>
            <TextInput style={styles.inputFillBox} placeholder='Pattaya, Chonburi'/>
            <Text style={styles.inputText}>Location</Text>
            <TextInput style={styles.inputFillBox} placeholder='https://maps.app.goo.gl/vsKakzyD1X4ZgrsW9'/>
            <Text style={styles.inputText}>Facebook</Text>
            <TextInput style={styles.inputFillBox} placeholder='GIM Brewing'/>
            <Text style={styles.inputText}>Instagram</Text>
            <TextInput style={styles.inputFillBox} placeholder='GIM Brewing'/>
            <Text style={styles.inputText}>Website</Text>
            <TextInput style={styles.inputFillBox} placeholder='none'/>
            <Text style={styles.inputText}>Cover Image</Text>
            <View style={styles.editButtonBox}>
                <Pressable style={styles.AddButton} ><Text style={styles.buttonText}>Add</Text></Pressable>
                <Pressable style={styles.DeleteButton} ><Text style={styles.buttonText}>Delete</Text></Pressable>
            </View>
            <Text style={styles.inputText}>Coffee Process</Text>
            <View style={styles.editButtonBox}>
                <Pressable style={styles.AddButton} ><Text style={styles.buttonText}>Add</Text></Pressable>
                <Pressable style={styles.DeleteButton} ><Text style={styles.buttonText}>Delete</Text></Pressable>
            </View>
            <Text style={styles.inputText}>Recommend Menu</Text>
            <View style={styles.editButtonBox}>
                <Pressable style={styles.AddButton} ><Text style={styles.buttonText}>Add</Text></Pressable>
                <Pressable style={styles.DeleteButton} ><Text style={styles.buttonText}>Delete</Text></Pressable>
            </View>
            <Text style={styles.inputText}>Coffee Bean</Text>
            <View style={styles.editButtonBox}>
                <Pressable style={styles.AddButton} ><Text style={styles.buttonText}>Add</Text></Pressable>
                <Pressable style={styles.DeleteButton} ><Text style={styles.buttonText}>Delete</Text></Pressable>
            </View>
            <Text style={styles.inputText}>All Menu</Text>
            <View style={styles.editButtonBox}>
                <Pressable style={styles.AddButton} ><Text style={styles.buttonText}>Add</Text></Pressable>
                <Pressable style={styles.DeleteButton} ><Text style={styles.buttonText}>Delete</Text></Pressable>
            </View>
            <Pressable style={styles.loginButton} onPress={navtoLogin}><Text style={styles.buttonText}>Save Information</Text></Pressable>
            
        </View>
        </ScrollView>   
    </SafeAreaView>
  )
}

export default EditCafeInfo

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
    }
})