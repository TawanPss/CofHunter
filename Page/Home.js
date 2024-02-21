import {  StyleSheet, View, Text, ScrollView, Image, SafeAreaView, TextInput, Pressable,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';


const Home = ({navigation}) => {


    const onPressItem = (id,name) =>{
        navigation.navigate('ReviewPage',{id: id,name: name})
    }

    const testapi = () =>{
        navigation.navigate('Testapi')
    }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{paddingBottom:30}}>
        <View>
            <Text style={styles.HeaderText}>| ร้านดังยอดนิยม</Text>
        </View>

        
        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FacCof1.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof2.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof3.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof4.png')} style={styles.coverPic} />
            </View>
            </Pressable>
        </View>   

        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>GIM Brewing Room</Text>
                <Text style={styles.openTimeText}>Open 9.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Pattaya Chonburi</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/GIMMenu1.png')} style={styles.coverPic} />
                <Image source={require('../assets/GIMMenu2.png')} style={styles.coverPic} />
                <Image source={require('../assets/GIMMenu3.png')} style={styles.coverPic} />
                <Image source={require('../assets/GIMMenu4.png')} style={styles.coverPic} />
            </View>
            </Pressable>
        </View>   

        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>After Peace</Text>
                <Text style={styles.openTimeText}>Open 10.00-17.30</Text>
            </View>
            <Text style={styles.detailText}>Thammasat Rangsit</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/AfterPeaceMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/AfterPeaceMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/AfterPeaceMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/AfterPeaceMenu4.jpg')} style={styles.coverPic} />
            </View>
            </Pressable>
        </View>   

        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Surya Coffee</Text>
                <Text style={styles.openTimeText}>Open 7.00-17.30</Text>
            </View>
            <Text style={styles.detailText}>Ramkhamhaeng Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={{uri: 'https://drive.google.com/uc?id=1qBS3HIfpmTbyPsWNn1DwFnotkAqVMCT1'}} style={styles.coverPic} />
                <Image source={{uri: 'https://drive.google.com/uc?id=1HDr2U5AlAELjA7Mt9EPlsElSsxIt8ek2'}} style={styles.coverPic} />
                <Image source={{uri: 'https://drive.google.com/uc?id=1VFrJeEX3qD8XUXbf3zVMxvem1PUgrqfC'}} style={styles.coverPic} />
                <Image source={{uri: 'https://drive.google.com/uc?id=1YxP-Cd7iFoIiJ20RcHlfWyArhZ8QAxWi'}} style={styles.coverPic} />
            </View>
            </Pressable>
        </View> 

        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Suntime Craft Cof</Text>
                <Text style={styles.openTimeText}>Open 8.30-15.30</Text>
            </View>
            <Text style={styles.detailText}>Sriracha Chonburi</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu4.jpg')} style={styles.coverPic} />
            </View>
            </Pressable>
        </View> 

        <TouchableOpacity onPress={testapi} >
            <Text style={styles.menuText}></Text>
        </TouchableOpacity>  

    </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
    },

    HeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:15,
        marginTop:10,
    },

    cafeNameText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginTop:5,
        alignContent:"flex-start"
    },

    detailText: {
        fontSize: 15,
        fontWeight: "regular",
        color: "#333333",
        marginTop:5,
    },

    openTimeText:{
        fontSize: 15,
        fontWeight: "regular",
        color: "#333333",
        marginTop:10,
        alignContent:"flex-end",
        marginEnd:15,
    },

    cafeBox:{ 
        borderColor:"#D9D9D9",
        width: "90%",
        borderWidth:2,
        marginTop:15,
        marginStart:15,
        marginEnd:15,
        borderRadius:20,
        paddingStart:10,
        paddingTop:10,
        paddingBottom:15,
    },

    coverPic:{
        width:70,
        height:70,
        marginTop:10,
        marginStart:5,
        marginEnd:15,
        borderRadius:5,
    },

    input: {
        height: 40,
        width: "80%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
      },

    searchIcon: {
        marginLeft:10,
        marginRight: 15,
      },
});

export default Home