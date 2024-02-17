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
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof2.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>White Citrus</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',marginTop:15}}>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof1.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>Phayathai</Text>
          </View>
          <View style={styles.menuBox}>
            <Image source={require('../assets/FacCof2.png')} style={styles.coverPic}></Image>
            <Text style={styles.MenuNameText}>White Citrus</Text>
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
    color: "333333",
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
    color: "Black",
    marginTop:5,
    alignSelf:"flex-start"
},

  menuBox:{
    alignItems: 'center' ,
    width:'48%',
    height:230,
    marginStart:0,
    marginEnd:0,
    borderColor:"#D9D9D9",
    borderWidth:2,
    borderRadius:20,
    padding:5,
  }
})
