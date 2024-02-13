import {  StyleSheet, View, Text, ScrollView, Image, SafeAreaView, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        // Handle search logic here
        setSearchQuery(text);
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Cof Hunter</Text>
        </View>
        <ScrollView>
        <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',marginTop:60}}>
            <TextInput style={styles.input} placeholder="ค้นหาชื่อร้าน" onChangeText={handleSearch}value={searchQuery}/>
            <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        </View>
        <View>
            <Text style={styles.HeaderText}>| ร้านดังยอดนิยม</Text>
        </View>


        <View style={styles.cafeBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
            </View>
        </View>

        <View style={styles.cafeBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
            </View>
        </View>

        <View style={styles.cafeBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
            </View>
        </View>

        <View style={styles.cafeBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
            </View>
        </View>

        <View style={styles.cafeBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.cafeNameText}>Factory Coffee</Text>
                <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },

    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 70,
        paddingTop: 20,
        paddingStart:15,
        backgroundColor: "#8E5431",
        alignItems: 'start',
        justifyContent: 'center',
        zIndex: 1000, // Ensure it's on top of other components
      },
      title: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
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
        Colors: "Black",
        marginTop:5,
        alignContent:"flex-start"
    },


    detailText: {
        fontSize: 15,
        fontWeight: "regular",
        Colors: "333333",
        marginTop:5,
    },

    openTimeText:{
        fontSize: 15,
        fontWeight: "regular",
        Colors: "#333333",
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