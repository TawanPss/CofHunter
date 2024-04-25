import { StyleSheet, Text, View,SafeAreaView,ScrollView , Image} from 'react-native'
import React from 'react'

const MoreBeanPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FCB1.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Endless</Text>
            <Text style={styles.detailText}>400 Baht / 100 g</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FCB2.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>El Paraiso</Text>
            <Text style={styles.detailText}>1,850 Baht / 100 g</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FCB3.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Bishala</Text>
            <Text style={styles.detailText}>600 Baht / 200 g</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FCB4.jpg')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Sirinya</Text>
            <Text style={styles.detailText}>550 Baht / 200 g</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default MoreBeanPage

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
  }
})