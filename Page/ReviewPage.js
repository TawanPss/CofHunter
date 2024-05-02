import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
          <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:10}}>
                <Icon name="access-time" size={20} style={{marginTop:10,marginStart:25,marginEnd:1, color: "grey" }} />
                <Text style={styles.openTimeText}>Open Fri - Mon 8.30-16.30</Text>
                </View>
          <View style={{flexDirection: 'row',alignItems: 'center',marginTop:5,marginLeft:10 }}>
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
              <Image source={require('../image/pro1.jpeg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>jennie BP</Text>
            </View>
            <Image source={require('../image/star.png')} style={styles.star} />
            <Text style={styles.dateText}>24 Jan 2024</Text>
            <Text style={styles.TitelText}>ร้านดัง ร้านแน่นตลอดวันทั้งคนไทยและต่างชาติ</Text>
            <Text style={styles.RecomText}>เมนูเด็ด: El Brown + Ice, Cold Black</Text>
            <Text style={styles.detailText}>ด้วยความเป็นร้านดีมีรางวัลการันตีตลอดเลยไม่น่าแปลกใจที่จะเห็นทั้งคนไทยและต่างชาติแวะเวียนกันมาตลอดทั้งวันไม่ขาดสาย 
            ถ้าใครขับรถมาก็ต้องมาลุ้นหน้าร้านว่าจะมีที่จอดมั้ยด้วยอีก เพราะมาบางครั้งก็เต็มแน่นทั้งด้านหน้าและใต้ตึก</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../image/review1.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review1.2.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review1.3.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review1.4.jpeg')} style={styles.coverPic} />
            </View>
        </View>
        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../image/pro2.jpeg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>Takoyaki</Text>
            </View>
            <Image source={require('../image/star.png')} style={styles.star} />
            <Text style={styles.dateText}>4 Feb 2024</Text>
            <Text style={styles.TitelText}>ร้านกาแฟติดรถไฟฟ้าพญาไท</Text>
            <Text style={styles.RecomText}>เมนูเด็ด: White Citrus, El Brown + Ice, Mrs. Cold + Ice, Phayathai, Mrs Cold, Blood </Text>
            <Text style={styles.detailText}>ร้านกาแฟสเปเชียลตี้คาเฟ่ติดรถไฟฟ้าพญาไทที่จอดรถหน้าร้านน้อย{"\n"}
            และคนเยอะถ้ามาช่วงพีคๆอาจต้องต่อคิวหน้าร้านก่อนและต้อง
            ออเดอร์ก่อนถึงจะได้บัตรคิวไปนั่งรอที่โต๊ะได้ ทางร้านจะนำกาแฟมาเสิร์ฟให้dirty{"\n"}
            มีสองแบบ Mrs cold จะออกหวาน, 
            Blood จะไม่หวาน กินแล้วตื่นดีทั้งคู่ อร่อยดีทางร้านสามารถแสกนจ่ายเงินผ่าน</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../image/review2.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review2.1.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review2.2.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review2.3.jpeg')} style={styles.coverPic} />
            </View>
        </View>
        <View style={styles.reviewBox}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../image/pro3.jpeg')} style={styles.profilePic} />
              <Text style={styles.reviewNameText}>Sleep is life</Text>
            </View>
            <Image source={require('../image/star.png')} style={styles.star} />
            <Text style={styles.dateText}>23 Mar 2024</Text>
            <Text style={styles.TitelText}>หลบฝนในร้านกาแฟดีๆ</Text>
            <Text style={styles.RecomText}>เมนูเด็ด:Mrs. Cold + Ice, Moscow, financier</Text>
            <Text style={styles.detailText}>
  💀 Moscow คล้ายเดอตี้แต่มีฟองนมแบบนุ่มมาก​หวานนิดๆ​ 🧡{"\n"}
  🥃 Mrs. Cold ตัวนี้ก็เดอตี้ที่มีความนุ่มและเย็นกลมกล่อมลงตัวกับกาแฟ​ ซดทีละอึกคือได้รสชาติไม่ซ้ำ{"\n"}
  🧈 Financier เลือกเป็นแบบเนยสด​มีความนุ่ม​ ออกหวานหน่อยทานคู่กับกาแฟดีมาก{"\n"}
  😋 วันนี้ฝนตกหนักคนในร้านเลยแน่นมาก​ แค่พนง.ในร้านก็จัดการได้ดี​พยายามช่วยจัดโต๊ะรันคิว​ ส่วนตัวแค่ได้ทานกาแฟดีๆ​ นั่งตรงไหนก็ได้👌
</Text>
            <View  style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={require('../image/review3.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review3.1.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review3.2.jpeg')} style={styles.coverPic} />
                <Image source={require('../image/review3.3.jpeg')} style={styles.coverPic} />
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
    marginLeft:8,
    
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#8E5431",
    marginTop:15,
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
  width:40,
  height:40,
  marginTop:10,
  borderRadius:50,
  
},
star:{
  marginStart:50,
  width:"30%",
  height:20,
  marginTop:1,
  
},
reviewStar:{
  width:370,
  height:106,
  marginTop:15,
  marginStart:7,
  marginBottom:20
  //borderRadius:5,
},
dateText: {
  fontSize: 12,
  fontWeight: "regular",
  color: "#333333",
  marginTop:10,
  marginStart:5
},
detailText: {
  fontSize: 12,
  fontWeight: "regular",
  color: "#333333",

},
TitelText: {
  fontSize: 15,
  fontWeight: "bold",
  color: "#333333",
  marginTop:5,
  marginStart:5
},
RecomText: {
  fontSize: 12,
  fontWeight: "bold",
  color: "#333333",
  marginTop:5,
   marginStart:5
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
  width: 250,
  height: 40,
  // marginTop:10,
  marginBottom:10,
  marginStart:60,
  borderRadius:20,
  paddingStart:90,
  paddingTop:9,
  
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
      marginTop:10,
      marginStart:5,
      
  },
  buttonBox:{
    backgroundColor:"#8E5431",
    width: 325,
    height: 45,
    marginTop:30,
    marginBottom:10,
    marginStart:25,
    borderRadius:20,
    paddingStart:111,
    paddingTop:9,
    
  },
  buttonText:{
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    marginTop:5,
    
  
  },




})