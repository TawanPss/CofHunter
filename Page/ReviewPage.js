import { useNavigation } from '@react-navigation/native';
import React, { useState,useRef } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const images = [
  require('../assets/FC1.jpg'),
  require('../assets/FC2.jpg'),
  require('../assets/FC3.jpg'),
  require('../assets/FC4.jpg')
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

    const handleNavigateToReview = () => {
      navigation.navigate('MyReview'); }

  const findmoreReccommentMenu = () =>{
    navigation.navigate('MoreRecommentMenu')
  }

  const moreBean = () =>{
    navigation.navigate('MoreBeanPage')
  }

  const moreMenu = () =>{
    navigation.navigate('MoreMenuPage')
  }



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
          <Text style={styles.cafeNameText}>Factory Coffee</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="access-time" size={20} style={{marginTop:10,marginStart:25,marginEnd:1, color: "grey" }} />
                <Text style={styles.openTimeText}>Open Fri - Mon 8.30-16.30</Text>
                </View>
          <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5, }}>
            <Icon name="location-on" size={20} style={{marginTop:10,marginStart:25,marginEnd:1, color: "grey" }} />
            <Text style={styles.openTimeText}>Phayathai Bangkok</Text>
          </View>


          <TouchableOpacity onPress={handleNavigateToDetail} >
            <View style={styles.buttonBox}>
              <Text style={styles.buttonText}>ดูรายละเอียดเพิ่มเติม</Text>
              </View>
          </TouchableOpacity>


        <Text style={styles.menuText}>| วิธีในการสกัดกาแฟ</Text>
        <View  style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/drip.png')} style={[styles.coverPic, {marginRight: 15,  marginStart: 20}]} />
                <Image source={require('../assets/aeropess.png')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/coldbrew.png')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/machine.png')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
        </View>
          

        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมนูแนะนำ</Text>
          <TouchableOpacity onPress={findmoreReccommentMenu} >
            <Text style={styles.buttonmenuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        
        <View  style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={[styles.coverPic, {marginRight: 15,  marginStart: 20}]} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
        </View>
        
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมล็ดกาแฟที่ใช้</Text>
          <TouchableOpacity onPress={moreBean} >
            <Text style={styles.buttonmenuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View  style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/FCB1.jpg')}style={[styles.coverPic, {marginRight: 15,  marginStart: 20}]} />
                <Image source={require('../assets/FCB2.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/FCB3.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/FCB4.jpg')} style={[styles.coverPic, {marginRight: 15, marginLeft: 5}]} />
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
          <Text style={styles.menuText}>| เมนูทั้งหมด</Text>
          <TouchableOpacity onPress={moreMenu} >
            <Text style={styles.buttonmenuText}>ดูทั้งหมด</Text>
          </TouchableOpacity>
        </View>
        <View  style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/FactorycoffeeBuilding.jpg')} style={[styles.coverPic, {marginRight: 15},{marginStart:20}]} />
                <Image source={require('../assets/Factorycoffeemenu1.jpg')} style={[styles.coverPic,    {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/Factorycoffeemenu2.jpg')} style={[styles.coverPic,    {marginRight: 15, marginLeft: 5}]} />
                <Image source={require('../assets/FactorycoffeeDessert.jpg')} style={[styles.coverPic,  {marginRight: 15, marginLeft: 5}]}  />
        </View>

        <View style={styles.line}></View>

        

        <View>
                <Image source={require('../assets/review star.png')} style={styles.reviewStar} />
                
        </View>

        <TouchableOpacity onPress={handleNavigateToReview} >
            <View style={styles.buttonReview}>
              <Text style={styles.buttonTextReview}>Add Review</Text>
              </View>
          </TouchableOpacity>



        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>jennie BP</Text>
            </View>
            <Text style={styles.detailText}>2 ม.ค. 2024</Text>
            <Text style={styles.detailText}>ร้านนี้บรรยากาศดี มีเมล็ดกาแฟให้เลือกเยอะมาก สายกาแฟถูกใจสุดๆ เมนูกาแฟเยอะมากๆ อยากให้มาลองกันครับ</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu4.jpg')} style={styles.coverPic} />
            </View>
        </View>
        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>jennie BP</Text>
            </View>
            <Text style={styles.detailText}>2 ม.ค. 2024</Text>
            <Text style={styles.detailText}>ร้านนี้บรรยากาศดี มีเมล็ดกาแฟให้เลือกเยอะมาก สายกาแฟถูกใจสุดๆ เมนูกาแฟเยอะมากๆ อยากให้มาลองกันครับ</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu4.jpg')} style={styles.coverPic} />
            </View>
        </View>
        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>jennie BP</Text>
            </View>
            <Text style={styles.detailText}>2 ม.ค. 2024</Text>
            <Text style={styles.detailText}>ร้านนี้บรรยากาศดี มีเมล็ดกาแฟให้เลือกเยอะมาก สายกาแฟถูกใจสุดๆ เมนูกาแฟเยอะมากๆ อยากให้มาลองกันครับ</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu4.jpg')} style={styles.coverPic} />
            </View>
        </View>
        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>jennie BP</Text>
            </View>
            <Text style={styles.detailText}>2 ม.ค. 2024</Text>
            <Text style={styles.detailText}>ร้านนี้บรรยากาศดี มีเมล็ดกาแฟให้เลือกเยอะมาก สายกาแฟถูกใจสุดๆ เมนูกาแฟเยอะมากๆ อยากให้มาลองกันครับ</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../assets/SuntimeMenu1.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu2.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu3.jpg')} style={styles.coverPic} />
                <Image source={require('../assets/SuntimeMenu4.jpg')} style={styles.coverPic} />
            </View>
        </View>


      


        


   

            
      </ScrollView>

    </SafeAreaView>
  )
}

export default ReviewPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    //alignItems: 'center',
  },
  wrap: {
    // marginStart:5,
    // marginEnd:5,
    marginTop: 2,
    borderRadius:10,
    width: WIDTH*0.9,
    height: HEIGHT*0.5,
  },
  wrapdot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf: 'center'
  },
  dotActive:{
    margin: 3,
    color: '#000000'
  },
  dot:{
    margin: 3,
    color: '#888'
  },
  cafeNameText: {
    marginStart:30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#8E5431",
    marginTop:10,
    alignContent:"flex-start"
},
openTimeText:{
  marginStart:15,
  fontSize: 15,
  fontWeight: "regular",
  color: "#333333",
  marginTop:10,
  alignContent:"flex-end",
  marginEnd:0,
},
coverPic:{
  marginStart:5,
  width:70,
  height:70,
  marginTop:10,
  borderRadius:5,
},
profilePic:{
  marginStart:5,
  width:50,
  height:50,
  marginTop:10,
  borderRadius:50,
  
},
reviewStar:{
  width:370,
  height:106,
  marginTop:15,
  marginStart:7,
  marginBottom:20
  //borderRadius:5,
},
detailText: {
  
  fontSize: 15,
  fontWeight: "regular",
  color: "#333333",
  marginTop:5,
},
menuText:{
  marginStart:20,
  fontSize: 15,
  fontWeight: "bold",
  color: "#8E5431",
  marginTop:10,
},

buttonmenuText:{
  fontSize: 13,
  fontWeight: "bold",
  color: "#8E5431" ,
  marginTop:10,
  marginRight:15
},


buttonTextReview:{
  fontSize: 12,
  fontWeight: "bold",
  color: "#fff",
  marginTop:5,
  

},
buttonReview:{
  backgroundColor:"#4CA636",
  width: 70,
  height: 70,
  // marginTop:10,
  // marginBottom:10,
  // marginStart:20,
  borderRadius:50,
  // paddingStart:115,
  // paddingTop:5,
  
},


line:{
  borderColor:"#D9D9D9",
  backgroundColor:"#D9D9D9",
  width:"100%",
  borderWidth:3,
  marginTop:20,
  


},
reviewBox:{
  borderColor:"#D9D9D9",
  width:375,
  borderWidth:0.5,
  paddingStart:10,
  paddingTop:10,
  paddingBottom:15,
},
reviewNameText: {
  fontSize: 15,
  fontWeight: "regular",
  color: "#333333",
  marginTop:5,
  marginStart:10,
  fontWeight: "bold",
},
detailText: {
      fontSize: 12,
      fontWeight: "regular",
      color: "#333333",
      marginTop:3,
      marginStart:5,
      
  },



})