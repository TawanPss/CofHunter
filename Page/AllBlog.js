import React from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const AllBlog = ({navigation}) => {

    const findBlog1 = () =>{
        navigation.navigate('Blog1')
    }
    
    return (
    <SafeAreaView>
        <ScrollView>
            
        <View style={styles.cafeBox}>
        <Pressable onPress={findBlog1}>
            <View>
                <Text style={styles.HeaderBox}>| คาเฟ่เปิดใหม่ Shelter Specialty Coffee </Text>
            </View>
            <View>
                <Image source={require('../assets/Recom4.jpeg')} style={styles.coverPic} />
            </View>
            <View>
            <Text style={styles.Text}>Shelter เป็นคาเฟ่ที่เปิดใหม่ล่าสุด มีความโดดเด่นด้วยการตกแต่งร้านด้วยสไตล์ Futuristic และ Modetn Industrial Loft งานสถาปัตยกรรมคอนกรีตที่มีเอกลักษณ์ คุมโทนด้วยสีเทา ดำเข้มๆ ตัดกับแสงนีออน
            </Text>
            </View>
            </Pressable>
        </View>


        <View style={styles.cafeBox}>
            <Pressable onPress={findBlog1}>
            <View>
                <Text style={styles.HeaderBox}>| 18 คาเฟ่ริมน้ำร้านกาแฟริมน้ำ ชิลบรรยากาศดี</Text>
            </View>
            <View>
                <Image source={require('../assets/Recom2.jpeg')} style={styles.coverPic} />
            </View>
            <View>
            <Text style={styles.Text}>18 คาเฟ่ริมน้ำร้านกาแฟริมน้ำปทุมธานีใกล้กรุงเทพ บรรยากาศริมน้ำลมพัดเย็นสบายพร้อมนั่งจิบกาแฟกินขนมไปด้วย บอกเลยว่าฟินสุดๆคนกรุงเทพและจังหวัดใกล้เคียงตามไปเช็คอินกันให้ไว
            </Text>
            </View>
            </Pressable>
        </View>

        <View style={styles.cafeBox}>
            <Pressable onPress={findBlog1}>
            <View>
                <Text style={styles.HeaderBox}>| 5 คาเฟ่เปิดใหม่ ย่านราชดำเนินน่าเช็คอินก่อนใคร</Text>
            </View>
            <View>
                <Image source={require('../assets/Recom3.jpeg')} style={styles.coverPic} />
            </View>
            <View>
            <Text style={styles.Text}>สวัสดีค่าRyoiiจะมาอัพเดทร้านคาเฟ่ใหม่ๆจำนวน 5 ร้านเอาใจคนเบื่อร้านเก่าๆกันค่ะซึ่งร้านจะอยู่ในย่านราชดำเนินบอกได้เลยว่าบรรยากาศไม่จำเจรับรองถูกใจสายเช็คอินแน่นอนค่าไปดูกันเลยค่า
            </Text>
            </View>
            </Pressable>
        </View>

        <View style={styles.cafeBox}>
            <Pressable onPress={findBlog1}>
            <View>
                <Text style={styles.HeaderBox}>| 20 คาเฟ่ย่านรังสิต 2024</Text>
            </View>
            <View>
                <Image source={require('../assets/Recom1.jpg')} style={styles.coverPic} />
            </View>
            <View>
            <Text style={styles.Text}>เอาใจสายคาเฟ่ใครที่กำลังตามหาคาเฟ่ใกล้ฉันเราจะพาไป20คาเฟ่ย่านรังสิตอัปเดตปี2024เป็นย่านที่มีร้านอร่อยร้านเด็ดซ่อนตัวอยู่มากมายสายคาเฟ่ไปเช็คอินรับรองต้องฟิน
            </Text>
            </View>
            </Pressable>
        </View>

        
        </ScrollView>
    </SafeAreaView>

    )
}

export default AllBlog

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    HeaderText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:15,
        marginTop:25,
    },
    HeaderBox: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:5,
        marginTop:5,
    },
    cafeBox:{
        borderColor:"#D9D9D9",
        width: "90%",
        borderWidth:2,
        marginTop:15,
        marginStart:20,
        //marginEnd:12,
        borderRadius:20,
        paddingStart:10,
        paddingTop:15,
        paddingBottom:15,
    },
    coverPic:{
        width:310,
        height:150,
        marginTop:10,
        //marginStart:5,
        marginEnd:5,
        borderRadius:10,
    },
    Text: {
        fontSize: 10,
        fontWeight: "regular",
        color: "#333333",
        marginTop:10,
        marginStart:5,
        marginEnd:10,
    },
})
