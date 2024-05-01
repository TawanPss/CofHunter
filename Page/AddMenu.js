import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AddMenu = () => {
    const navigation = useNavigation();

    const navtoEditCafeINfo = () => {
        navigation.navigate('EditCafeInfo')
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.HeaderText}>Add New Menu</Text>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Input Image</Text>
            <TextInput style={styles.imageInputBox} placeholder='file.jpg/png'/>
            <Text style={styles.inputText}>Menu Name</Text>
            <TextInput style={styles.inputFillBox} placeholder='Latte'/>
            <Text style={styles.inputText}>Price</Text>
            <TextInput style={styles.inputFillBox} placeholder='80 THB'/>
            <Text style={styles.inputText}>Write Description</Text>
            <TextInput style={styles.inputFillBox} placeholder='This is Special Latte'/>
            <Pressable style={styles.loginButton} onPress={navtoEditCafeINfo}><Text style={styles.buttonText}>Save</Text></Pressable>
            <Pressable><Text style={styles.detailText} onPress={navtoEditCafeINfo}>Cancel</Text></Pressable>
        </View>
         
    </SafeAreaView>
  )
}

export default AddMenu

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

imageInputBox:{
    backgroundColor:"#fff",
    width: "90%" ,
    height:200,
    borderRadius:20,
    alignSelf:"center",
    padding:10,
    margin:10,
}
  
})