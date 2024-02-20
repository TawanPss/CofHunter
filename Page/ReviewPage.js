import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar, Dimensions,Image,TouchableOpacity } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const images = [
  require('../assets/FactorycoffeeBuilding.jpg'),
  require('../assets/Factorycoffeemenu1.jpg'),
  require('../assets/Factorycoffeemenu2.jpg'),
  require('../assets/FactorycoffeeDessert.jpg')
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ReviewPage = () => {

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive){
        setimgActive(slide)
      }
  }

  const navigation = useNavigation();

  const handleNavigateToDetail = () => {
    navigation.navigate('DetailPage'); }

  const findmoreReccommentMenu = () =>{}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          <ScrollView 
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
            {
              images.map((e, index) => 
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={e}/>
              )
            }
          </ScrollView>
          <View style={styles.wrapdot}>
            {images.map((e,index) =>
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            > ● </Text>)}
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.cafeNameText}>Factory Coffee</Text>
          <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
        </View>
        <Text style={styles.detailText}>Phayathai Bangkok</Text>
        <TouchableOpacity onPress={handleNavigateToDetail} style={styles.button}>
            <Text style={styles.buttonText}>ดูรายละเอียด</Text>
        </TouchableOpacity>


        <Text style={styles.menuText}>| วิธีในการสกัดกาแฟ</Text>
          <Text style={styles.detailText}>- Espresso Machine</Text>
          <Text style={styles.detailText}>- Drip</Text>
          <Text style={styles.detailText}>- AeroPress</Text>
          <Text style={styles.detailText}>- Cold Brew</Text>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมนูแนะนำ</Text>
          <TouchableOpacity onPress={findmoreReccommentMenu} >
            <Text style={styles.menuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        
        <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
        </View>
        
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมล็ดกาแฟที่ใช้</Text>
          <TouchableOpacity onPress={findmoreReccommentMenu} >
            <Text style={styles.menuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมนูทั้งหมด</Text>
          <TouchableOpacity onPress={findmoreReccommentMenu} >
            <Text style={styles.menuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={styles.coverPic} />
        </View>

            
      </ScrollView>

    </SafeAreaView>
  )
}

export default ReviewPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  wrap: {
    marginTop: 2,
    borderRadius:10,
    width: WIDTH*0.9,
    height: HEIGHT*0.6,
  },
  wrapdot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf: 'center'
  },
  dotActive:{
    margin: 3,
    color: 'black'
  },
  dot:{
    margin: 3,
    color: '#888'
  },
  cafeNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "Black",
    marginTop:5,
    alignContent:"flex-start"
},
openTimeText:{
  fontSize: 15,
  fontWeight: "regular",
  color: "#333333",
  marginTop:10,
  alignContent:"flex-end",
  marginEnd:0,
},
coverPic:{
  width:70,
  height:70,
  marginTop:10,
  borderRadius:5,
},
detailText: {
  fontSize: 15,
  fontWeight: "regular",
  Colors: "333333",
  marginTop:5,
},
menuText:{
  fontSize: 15,
  fontWeight: "bold",
  Colors: "333333",
  marginTop:10,
},
button: {
  backgroundColor: "#8E5431",
  padding: 10,
  borderRadius: 20,
  marginTop:10,
},
buttonText: {
  color: '#fff',
  fontSize: 15,
  alignSelf:'center',
},

})