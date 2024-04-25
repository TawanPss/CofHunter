
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    //<SafeAreaView style={styles.container}>
        <ScrollView style={{paddingBottom:30}}>

        
        <View style={styles.HeaderBox}>
            <Text style={styles.HeaderNameText}>Hi ! Cof hunt , what cof you hunt today !</Text>
            <View style={styles.searchBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="search" size={20} style={{ marginTop:3,marginStart:10, color: "grey" }} />
                <Text style={styles.searhText}>ค้นหาชื่อร้าน,เมนู,สถานที่</Text>
            </View>
                
                
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

        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.rowContainer}>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Rynn.jpeg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}> RYNN KAFFE </Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/anony1.jpeg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>Anonymous Coffee</Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/oldschool.jpeg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}> The Old School</Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/churn.jpeg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>Churn Buttery</Text>
                    </Pressable>
                </View>

                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/khotcher.jpeg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>Khotcher's Cafe</Text>
                    </Pressable>
                </View>

            
            </View>
            </ScrollView>
        </View>


        <View>
            <Text style={styles.HeaderText}>| ร้านใหม่มาเเรง !</Text>
        </View>

        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.rowContainer}>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/FacCof1.png')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>Factory Coffee</Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/Mont Blanc.jpg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>Mont Blanc</Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/GLIG.jpg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>GLIG CAFE</Text>
                    </Pressable>
                </View>
                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/MTCH.jpg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>MTCH Sukhumvit</Text>
                    </Pressable>
                </View>

                <View style={styles.CoffeeBox}>
                    <Pressable onPress={() => onPressItem(1,"Factory_Coffee")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/DOUGH.jpg')} style={styles.CoffeePic} />
                    </View>
                    <Text style={styles.CoffeeNameText}>DROP BY DOUGH</Text>
                    </Pressable>
                </View>

            
            </View>
            </ScrollView>
        </View>

        <View style={styles.line}></View>




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

                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />

                <Image source={require('../assets/FacCof1.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof2.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof3.png')} style={styles.coverPic} />
                <Image source={require('../assets/FacCof4.png')} style={styles.coverPic} />

            </View>
            </Pressable>
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
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    HeaderBox:{
        //borderColor:"#8E5431",
        backgroundColor: "#8E5431",
        width: 375,
        height: 190,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingStart:10,
        paddingTop:10,
        paddingBottom:15,
    },
    HeaderText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:15,
        marginTop:10,
    },
    blogslide:{
        width :"100%",
        justifyContent:'center',
        alignItems: 'center',

        //width: WIDTH * 0.9,
        //height: HEIGHT * 0.5,
    },

    HeaderNameText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF" ,
        marginTop:75,
        marginStart:15

       
    },
    line:{
        borderColor:"#D9D9D9",
        backgroundColor:"#D9D9D9",
        width:375,
        borderWidth:3,
        marginTop:15,
        
       

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
    CoffeeNameText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#000000",
        marginTop:10,
        //marginStart:10,
        textAlign:"center"
        //alignContent:"flex-start"
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
        marginTop:3,
        marginStart:5,
        
        
    },

    cafeBox:{
        borderColor:"#D9D9D9",
        width:375,
        borderWidth:0.5,
        //marginTop:5,
        //marginStart:15,
        //marginEnd:15,
        //borderRadius:20,
        paddingStart:10,
        paddingTop:10,
        paddingBottom:15,
    },
    CoffeeBox:{
        flex:1,
        borderColor:"#FFFFFF",
        backgroundColor:"#FFFFFF",
        width:100,
        height:135,
        marginTop:15,
        marginStart:15,
        marginEnd:-10,
        borderRadius:15,
        
    },
    searchBox:{
        borderColor:"#FFFFFF",
        backgroundColor:"#FFFFFF",
        width: "90%",
        height: "20%",
        borderWidth:1,
        marginTop:30,
        marginStart:15,
        marginEnd:15,
        borderRadius:20,
        paddingStart:5,
        paddingTop:4,
        
    },

    coverPic:{
        width:70,
        height:70,
        marginTop:10,
        marginStart:5,
        marginEnd:15,
        borderRadius:5,
    },
    CoffeePic:{
        width:"99%",
        height:100,
       // marginTop:-10,
        //marginStart:1,
        //marginEnd:15,
        borderRadius:15,
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
      rowContainer: {
        flexDirection: 'row',
      },

    
});

export default Home