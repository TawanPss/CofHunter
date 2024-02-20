import { StyleSheet, Text, View,Image,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import { useEffect, Flatlist ,useState } from 'react';


const testapi = () => {

    const [isLoading,setLoading] = useState(true);
    const[data,setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        {isLoading ? (<Text>Loading.....</Text>) : (
        data.map((cafedata) => {
            return(
            <View style={styles.cafeBox}>
                
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>{cafedata.name}</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>{cafedata.address.city}</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FacCof1.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof2.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof3.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof4.png')} style={styles.coverPic} />
            </View>
            
        </View>
            )
        })
      )}

        </ScrollView>
      
    </SafeAreaView>
  )
}

export default testapi

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