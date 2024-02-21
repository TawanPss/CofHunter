import { StyleSheet, Text, View,Image,SafeAreaView,ScrollView,ActivityIndicator,FlatList, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Testapi = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your FastAPI endpoint
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {loading ? (
            <Text>Loading...</Text>
        ) : (
            <>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.cafeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.cafeNameText}>{item.name}</Text>
                        <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
                    </View>
                    <Text style={styles.detailText}>{item.address.city}</Text>
                    <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                        <Image source={require('../assets/FacCof1.png')} style={styles.coverPic} />
                        <Image source={require('../assets/FacCof2.png')} style={styles.coverPic} />
                        <Image source={require('../assets/FacCof3.png')} style={styles.coverPic} />
                        <Image source={require('../assets/FacCof4.png')} style={styles.coverPic} />
                    </View>
                    </Pressable>
                </View> 
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            </>
        )}
            </ScrollView>
        
        </SafeAreaView>
    );
    };

    export default Testapi

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
            color: "Black",
            marginTop:5,
            alignContent:"flex-start"
        },
    
        detailText: {
            fontSize: 15,
            fontWeight: "regular",
            color: "333333",
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