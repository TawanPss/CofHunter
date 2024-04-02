
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
    
    //const WIDTH = Dimensions.get('window').width;
    //const HEIGHT = Dimensions.get('window').height;
    
    const recomPic = [
        { id: 1, source: require('../assets/Recom4.jpeg'), name: "recom4" },
        { id: 2, source: require('../assets/Recom2.jpeg'), name: "recom2" },
        { id: 3, source: require('../assets/Recom3.jpeg'), name: "recom3" },
        { id: 4, source: require('../assets/Recom1.jpg'), name: "recom1" },
    ];

    
    
    function handleImagePress(){
        navigation.navigate('Blog1');
    }


    function onPressItem(id, name) {
        navigation.navigate('ReviewPage', { id: id, name: name });
    }

    const testapi = () =>{
        navigation.navigate('Testapi')
    }

    const findAllBlog = () =>{
        navigation.navigate('AllBlog')
    }

    const findBlog1 = () =>{
        navigation.navigate('Blog1')
    }


return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{paddingBottom:30}}>

        <View style={styles.searchBox}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.searhText}>ค้นหาชื่อร้าน,เมนู,สถานที่</Text>
                <Icon name="search" size={13} style={{ marginRight: 15, color: "grey" }} />
                
            </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
            <Text style={styles.HeaderText}>| Cof Recomment</Text>
            <TouchableOpacity onPress={findAllBlog} >
            <Text style={styles.BlogText}>ดูทั้งหมด</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.blogslide}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recomPic.map((item) => (
                <TouchableOpacity onPress={handleImagePress}>
                <Image source={item.source} style={styles.recomPic} />
            </TouchableOpacity>
            ))}
            </ScrollView>
        </View>
    

        


        <View>
            <Text style={styles.HeaderText}>| ร้านดังยอดนิยม</Text>
        </View>

    
        <View style={styles.cafeBox}>
            <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
            <Text style={styles.cafeNameText}>Factory Coffee</Text>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="access-time" size={14} style={{ marginLeft: 5,marginTop:2, color: "grey" }} />
                <Text style={styles.openTimeText}>Open 8.30-16.30</Text>
                </View>
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
            <Text style={styles.cafeNameText}>GIM Brewing Room</Text>
            <Text style={styles.detailText}>Pattaya Chonburi</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="access-time" size={13} style={{ marginLeft: 5, marginTop:2,color: "grey" }} />
                <Text style={styles.openTimeText}>Open 9.30-16.30</Text>
                </View>
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
            <Text style={styles.cafeNameText}>After Peace</Text>
            <Text style={styles.detailText}>Thammasat Rangsit</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="access-time" size={13} style={{ marginLeft: 5,marginTop:2, color: "grey" }} />
                <Text style={styles.openTimeText}>Open 10.00-17.30</Text>
                </View>
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
            
            <Text style={styles.cafeNameText}>Surya Coffee</Text>
            <Text style={styles.detailText}>Ramkhamhaeng Bangkok</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="access-time" size={13} style={{ marginLeft: 5,marginTop:2, color: "grey" }} />
                <Text style={styles.openTimeText}>Open 7.00-17.30</Text>
                </View>
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
            <Text style={styles.cafeNameText}>Suntime Craft Cof</Text>
            <Text style={styles.detailText}>Sriracha Chonburi</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="access-time" size={13} style={{ marginLeft: 5,marginTop:2, color: "grey" }} />
                <Text style={styles.openTimeText}>Open 8.30-15.30</Text>
                </View>
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
        alignItems: 'center',
    },
    blogslide:{
        width :"100%",
        justifyContent:'center',
        alignItems: 'center',

        //width: WIDTH * 0.9,
        //height: HEIGHT * 0.5,
    },

    HeaderText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:15,
        marginTop:10,
    },

    BlogText:{
        fontSize: 13,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginTop:10,
        marginRight:15
      },

    cafeNameText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000000",
        marginTop:5,
        marginStart:5,
        alignContent:"flex-start"
    },

    detailText: {
        fontSize: 12,
        fontWeight: "regular",
        color: "#333333",
        marginTop:3,
        marginStart:5,
        
    },

    openTimeText:{
        fontSize: 12,
        fontWeight: "regular",
        color: "#333333",
        marginTop:3,
        marginStart:5,
        
        
        
    },
    searhText:{
        fontSize: 10,
        fontWeight: "regular",
        color: "#333333",
        marginTop:-1,
        marginStart:5,
        alignContent:"flex-end",
        
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
    searchBox:{
        borderColor:"#D9D9D9",
        width: "92%",
        height: "3%",
        borderWidth:1,
        marginTop:15,
        marginStart:15,
        marginEnd:15,
        borderRadius:20,
        paddingStart:10,
        paddingTop:10,
        
    },

    coverPic:{
        width:70,
        height:70,
        marginTop:10,
        marginStart:5,
        marginEnd:15,
        borderRadius:5,
    },

    recomPic:{
        width:280,
        height:100,
        marginTop:10,
        marginStart:15,
        //marginEnd:3,
        borderRadius:10,
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