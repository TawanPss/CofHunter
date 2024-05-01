import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const MyReview = () => {
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
            <View style={styles.reviewBox}/>

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Detail</Text>
                <Text style={styles.Text}>0/500</Text>
            </View>
            <View style={styles.detailBox}/>

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Recomment Menu</Text>
                <Text style={styles.Text}>0/120</Text>
            </View>
            <View style={styles.reviewBox}/>

            <View>
            <Text style={styles.HeaderText}>Photo</Text>
            </View>

            

            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10,marginStart:20,marginEnd:20}}>
                <Text style={styles.Text}>Detail</Text>
                <Text style={styles.Text}>0/120</Text>
            </View>
            <View style={styles.reviewBox}/>
            
            
        
    





    </ScrollView>
    </SafeAreaView>
    )
}

export default MyReview

const styles = StyleSheet.create({
    Text: {
        fontSize: 10,
        fontWeight: "regular",
        color: "#818181",
        marginTop:15,
        marginStart:15,
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
        width:345,
        height:200,
        marginTop:15,
        marginStart:15,
        marginEnd:15,
        borderRadius:10,
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
        height:100,
        borderRadius:10,
        marginStart:25,
        marginTop:10,
        borderWidth:1,
        
        
    },
})