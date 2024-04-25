import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image} from 'react-native'
import React from 'react'

const MoreMenuPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof1.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Phayathai</Text>
            <Text style={styles.detailText}>150 Baht</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof2.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>White Citrus</Text>
            <Text style={styles.detailText}>120 Baht</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof3.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>El Brown</Text>
            <Text style={styles.detailText}>150 Baht</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof4.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Honolulu</Text>
            <Text style={styles.detailText}>130 Baht</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof5.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Mocha Sea Salt</Text>
            <Text style={styles.detailText}>100 Baht</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof6.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Cold White</Text>
            <Text style={styles.detailText}>80 Baht</Text>
          </View>
        </View>
        <View style={styles.fullMenuBox}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Espresso</Text>
            <Text style={styles.fullMenudetailText}>60 Baht</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Hot Black</Text>
            <Text style={styles.fullMenudetailText}>70 Baht</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Hot White</Text>
            <Text style={styles.fullMenudetailText}>70 Baht</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Cold Black</Text>
            <Text style={styles.fullMenudetailText}>75 Baht</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Cold White</Text>
            <Text style={styles.fullMenudetailText}>75 Baht</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.fullMenuNameText}>Espresso on the rock</Text>
            <Text style={styles.fullMenudetailText}>75 Baht</Text>
          </View>
          
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default MoreMenuPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },

  detailText: {
    fontSize: 15,
    fontWeight: "regular",
    color: "#333333",
    marginTop:5,
    alignSelf:"flex-start",
},
  coverPic:{
    width: '100%',
    height: '75%',
    marginTop:10,
    borderRadius:20,
  },

  MenuNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop:5,
    alignSelf:"flex-start"
},

  menuBox:{
    alignItems: 'center' ,
    width:'48%',
    height:270,
    marginStart:0,
    marginEnd:0,
    borderColor:"#D9D9D9",
    borderWidth:2,
    borderRadius:20,
    padding:5,
  },

  fullMenuBox:{
    width:'98%',
    height:190,
    marginTop:20,
    marginBottom:20,
    borderColor:"#D9D9D9",
    borderWidth:2,
    borderRadius:20,
    padding:20,
  },

  fullMenuNameText:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#000000',
    marginTop:0, 
    alignContent:"flex-start"
  },

  fullMenudetailText: {
    fontSize: 15,
    fontWeight: "regular",
    color: "#333333",
    marginTop:5,
    alignContent:"flex-start"
},



})
