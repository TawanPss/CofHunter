import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DeleteImage = () => {
    const navigation = useNavigation();

    const navtoEditCafeINfo = () => {
        navigation.navigate('EditCafeInfo')
    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FC1.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Cafe Image 1</Text>
            <Pressable style={styles.DeleteButton}><Text style={styles.buttonText}>Delete</Text></Pressable>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FC2.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Cafe Image 2</Text>
            <Pressable style={styles.DeleteButton}><Text style={styles.buttonText}>Delete</Text></Pressable>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FC3.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Cafe Image 3</Text>
            <Pressable style={styles.DeleteButton}><Text style={styles.buttonText}>Delete</Text></Pressable>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FC4.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Cafe Image 4</Text>
            <Pressable style={styles.DeleteButton}><Text style={styles.buttonText}>Delete</Text></Pressable>
          </View>
        </View>
        <Pressable style={styles.loginButton} onPress={navtoEditCafeINfo}><Text style={styles.buttonText}>Save</Text></Pressable>
        <Pressable><Text style={styles.cancelText} onPress={navtoEditCafeINfo}>Cancel</Text></Pressable>

      </ScrollView>
    </SafeAreaView>
  )
}

export default DeleteImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },

  detailText: {
    fontSize: 15,
    fontWeight: "regular",
    color: "#333333",
    marginTop:5,
    alignSelf:"flex-start",
},
  coverPic:{
    width: '100%',
    height: 200,
    marginTop:10,
    borderRadius:20,
  },

  MenuNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop:5,
    alignSelf:"flex-start"
},

  menuBox:{
    alignItems: 'center' ,
    width:'48%',
    height:310,
    marginStart:0,
    marginEnd:0,
    borderColor:"#D9D9D9",
    borderWidth:2,
    borderRadius:20,
    padding:5,
  },
  DeleteButton:{
    backgroundColor:"#E44614",
    width: "90%" ,
    height:45,
    borderRadius:20,
    padding:10,
    margin:5,
},

buttonText:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff" ,
    textAlign:'center',
    
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

  cancelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop:0,
    alignSelf:"center",
},


})

