import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const openGoogleMaps = () => {
    // URL สำหรับ Google Maps
    const googleMapsUrl = 'https://maps.app.goo.gl/Map4Y2hap829kLnEA?g_st=ic';
    // เปิด Google Maps
    Linking.openURL(googleMapsUrl);};
const openFacebook = () => {
    const facebookUrl = 'https://www.facebook.com/factorybkk';
    Linking.openURL(facebookUrl);};

const openInstagram = () => {
    const igUrl = 'https://www.instagram.com/factorybkk/';
    Linking.openURL(igUrl);};

    const openWebsite= () => {
    const webUrl = 'https://factorybkk.com';
    Linking.openURL(webUrl);};
    
const DetailPage = () => {
    return (
    <SafeAreaView >
        <ScrollView>

            <Image source={require('../assets/FacMap.png')} style={styles.MapPic} />
            <TouchableOpacity onPress={openGoogleMaps} >
                <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>เปิดใน Google Maps</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.cafeNameText}>Factory Coffee</Text>

            <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5, }}>
                <Icon name="location-pin" size={20} style={{marginStart:15,marginTop:10,marginEnd:5, color: "grey" }}></Icon>
                <Text style={styles.openTimeText}>49 Phaya Thai Rd, Thanon Phaya Thai, </Text>
            </View>
            <Text style={styles.openTimeText}>Ratchathewi, Bangkok 10400 </Text>

            <View style={styles.line}></View>

            <View>
                <Text style={styles.headerText}>Moday</Text>
                <Text style={styles.detailText }>  • 8 AM–4 PM</Text>
                <Text style={styles.headerText}>Tuesday</Text>
                <Text style={styles.detailText }>  • Closed</Text>
                <Text style={styles.headerText}>Wednesday</Text>
                <Text style={styles.detailText }>  • Closed</Text>
                <Text style={styles.headerText}>Thursday</Text>
                <Text style={styles.detailText }>  • Closed</Text>
                <Text style={styles.headerText}>Friday</Text>
                <Text style={styles.detailText }>  • 8 AM–4 PM</Text>
                <Text style={styles.headerText}>Saturday</Text>
                <Text style={styles.detailText }>  • 8 AM–4 PM</Text>
                <Text style={styles.headerText}>Sunday</Text>
                <Text style={styles.detailText }>  • 8 AM–4 PM</Text>
                
            </View>

            <View style={styles.line}></View>

            <View>
                <TouchableOpacity onPress={openFacebook} >
                    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:5, }}>
                        <Image source={require('../assets/facebook.png')} style={styles.socialPic} />
                        <Text style={styles.socialText }>Factory Coffee - Bangkok </Text>    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={openInstagram} >
                    <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5, }}>
                        <Image source={require('../assets/instagram.png')} style={styles.socialPic} />
                        <Text style={styles.socialText }>factorybkk</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={openWebsite} > 
                    <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5, }}>
                        <Image source={require('../assets/web.png')} style={styles.socialPic} />
                        <Text style={styles.socialText }>factorybkk.com</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    </SafeAreaView>
)
}

export default DetailPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },

    cafeNameText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginTop:15,
        marginStart:15,
        alignContent:"flex-start"
    },

    openTimeText:{
        fontSize: 15,
        fontWeight: "regular",
        color: "#333333",
        marginTop:10,
        alignContent:"flex-end",
        marginEnd:15,
    },
    detailText: {
        fontSize: 15,
        fontWeight: "regular",
        color: "#333333",
        marginStart:45,
        marginTop:5,
      },
      socialText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333333",
        marginStart:15,
        marginTop:20,
      },

    headerText:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#505050",
        marginStart:35,
        marginTop:10, 
    },
    buttonText:{
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
        marginTop:5,
      
      },
      buttonBox:{
        backgroundColor:"#8E5431",
        width: 175,
        height: 40,
        marginTop:15,
        marginStart:105,
        borderRadius:20,
        paddingStart:30,
        paddingTop:5,
        
      },
      MapPic:{
        width:360,
        height:250,
        marginTop:10,
        marginStart:7.5,
        //marginEnd:7.5,
        borderRadius:15,
    },
    socialPic:{
        width:40,
        height:40,
        marginTop:10,
        marginStart:25,
        //marginEnd:7.5,
        borderRadius:15,
    },
    line:{
        borderColor:"#D9D9D9",
        backgroundColor:"#D9D9D9",
        width:375,
        borderWidth:1,
        marginTop:15,
        
       

    },
})