import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';




const MyReview = () => {

    const navigation = useNavigation();

const save = () => {
    navigation.navigate('ReviewPage'); }
return (
    <SafeAreaView>
        <ScrollView>
            <View>
            <Text style={styles.HeaderText}>Write your review</Text>
            </View>

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Title</Text>
                <Text style={styles.Text}>0/120</Text>
            </View>
            <TextInput style={styles.inputFillBox} placeholder='Title '/>

            

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Detail</Text>
                <Text style={styles.Text}>0/500</Text>
            </View>
            <TextInput style={styles.inputFillBox} placeholder='Detail '/>

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Recomment Menu</Text>
                <Text style={styles.Text}>0/120</Text>
            </View>
            <TextInput style={styles.inputFillBox} placeholder='Recomment Menu '/>

            <View>
            <Text style={styles.HeaderText}>Photo</Text>
            </View>

            <Image source={require('../image/add image.png')} style={styles.coverPic} />

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Detail</Text>
                <Text style={styles.Text}>0/120</Text>
            </View>
            <TextInput style={styles.inputFillBox} placeholder='Detail '/>

            

            <TouchableOpacity onPress={save} >
            <View style={styles.buttonReview}>
              <Text style={styles.buttonTextReview}>Add Review</Text>
            </View>
           </TouchableOpacity>
            
        
    





    </ScrollView>
    </SafeAreaView>
    )
}

export default MyReview

const styles = StyleSheet.create({
    Text: {
        fontSize: 13,
        fontWeight: "regular",
        color: "#818181",
        marginTop:15,
        marginStart:10,
        marginEnd:15,
        fontWeight: "bold",
    },
    HeaderText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#505050" ,
        marginStart:25,
        marginEnd:15,
        marginTop:25,
    },
    coverPic:{
        width:100,
        height:100,
        marginTop:15,
        marginStart:25,
        marginEnd:15,
    },
    reviewBox:{
        borderColor:"#FFFFFF",
        backgroundColor:"#FFFFFF",
        width:320,
        height:35,
        borderRadius:10,
        marginStart:25,
        marginTop:10,
        borderWidth:1,
        
        
    },
    detailBox:{
        borderColor:"#FFFFFF",
        backgroundColor:"#FFFFFF",
        width:320,
        height:50,
        borderRadius:10,
        marginStart:25,
        marginTop:10,
        borderWidth:1,
        
        
    },
    buttonTextReview:{
        fontSize: 13,
        fontWeight: "bold",
        color: "#fff",
        marginTop:5,
        
      
      },
      buttonReview:{
        backgroundColor:"#4CA636",
        width: 325,
        height: 45,
        marginTop:30,
        //marginBottom:10,
        marginStart:25,
        borderRadius:15,
        paddingStart:125,
        paddingTop:9,
        
      },
    
      inputFillBox:{
        backgroundColor:"#fff",
        width:320,
        height:35,
        borderRadius:10,
        alignSelf:"center",
        padding:10,
        margin:10,
      },
      inputBox:{
        marginVertical: 15,
        alignSelf:"center",
        width:"90%",
      },
    
})