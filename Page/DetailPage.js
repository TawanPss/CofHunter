import { StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const DetailPage = () => {
  return (
    <SafeAreaView >
        <ScrollView>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',marginTop:10, }}>
            <Text style={styles.cafeNameText}>Factory Coffee</Text>
            <Text style={styles.openTimeText}>Open Daily 8.30-16.30</Text>
            </View>
            <Text style={styles.detailText}>Phayathai Bangkok</Text>
            <View style={{marginTop:20,}}>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="check" size={20} style={{ marginLeft: 15, color:"green"}}></Icon>
                    <Text style={styles.detailText }>Open Daily 8.30-16.30</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="check" size={20} style={{ marginLeft: 15, color:"green"}}></Icon>
                    <Text style={styles.detailText }>Open Daily 8.30-16.30</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="check" size={20} style={{ marginLeft: 15, color:"green"}}></Icon>
                    <Text style={styles.detailText }>Open Daily 8.30-16.30</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="close" size={25} style={{ marginLeft: 15, color:"red"}}></Icon>
                    <Text style={styles.detailText }>Open Daily 8.30-16.30</Text>
                </View>
            </View>
            <View>
                <Text style={styles.headerText}>ช่วงราคา</Text>
                <Text style={styles.detailText }>100-250 บาท</Text>
                <Text style={styles.headerText}>จำนวนที่นั่ง</Text>
                <Text style={styles.detailText }>81-150 ที่นั่ง</Text>
                <Text style={styles.headerText}>เวลาเปิด-ปิด เดลิเวอลี่</Text>
                <Text style={styles.detailText }>เปิดทุกวัน 8.30-16.30</Text>
            </View>
            <View style={{marginTop:20,}}>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="facebook" size={20} style={{ marginLeft: 15,marginRight:5, color:"#333333"}}></Icon>
                    <Text style={styles.detailText }>Factory Coffee</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',marginTop:5, }}>
                    <Icon name="instagram" size={20} style={{ marginLeft: 15, color:"#333333"}}></Icon>
                    <Text style={styles.detailText }>Open Daily 8.30-16.30</Text>
                </View>
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default DetailPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },

    cafeNameText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "Black",
        marginTop:5,
        marginStart:15,
        alignContent:"flex-start"
    },

    openTimeText:{
        fontSize: 15,
        fontWeight: "regular",
        color: "#333333",
        marginTop:10,
        alignContent:"flex-end",
        marginEnd:15,
    },
    detailText: {
        fontSize: 15,
        fontWeight: "regular",
        Colors: "#333333",
        marginStart:15,
        marginTop:5,
      },

    headerText:{
        fontSize: 15,
        fontWeight: "bold",
        Colors: "#505050",
        marginStart:15,
        marginTop:20, 
    }
})