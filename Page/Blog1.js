import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Blog1 = () => {
return (
    <SafeAreaView>
        <ScrollView>
    <View>
        <Text style = {styles.HeaderText}>
            | คาเฟ่เปิดใหม่ Shelter Specialty Coffee {'\n'}
            ชาวปธุมเนี่ยน มีคาเฟ่สวยปังคุมโทนสีดำสุดเท่ล๊าววว</Text>
        <Image source={require('../assets/Recom4.jpeg')} style={styles.coverPic} />
    </View>
    <View> 
        <Text style ={ styles.Text}>Shelter เป็นคาเฟ่ที่เปิดใหม่ล่าสุด มีความโดดเด่นด้วยการตกแต่งร้านด้วยสไตล์ Futuristic และ Modetn Industrial Loft งานสถาปัตยกรรมคอนกรีตที่มีเอกลักษณ์ คุมโทนด้วยสีเทา ดำเข้มๆ ตัดกับแสงนีออน ภายในร้านทำให้ตัวร้านมีความโมเดิร์นดูทันสมัย หลุดกรอบจากโครงสร้างเดิมที่เป็นอาคารตึกแถว โดยมีการโชว์งานโครงสร้างที่เป็นตัวพื้นผิว วัสดุคอนกรีตและอิฐแบบดิบ ๆ เท่ ๆ สไตล์ Industrial Loft ที่ก่อรูปขึ้นได้อย่างลงตัว จนทำให้เป็นที่น่าสนใจในย่านนี้มากๆ และนอกจากนี้ตัวร้านมีกระจกรอบด้าน ทำให้มีแสงจากธรรมชาติลอดผ่านเข้ามาได้ดีตลอดทั้งวันเลยครับ
        </Text>
    </View>

    <View> 
        <Text style ={ styles.Text}>นอกจากความคูลของร้านแล้ว เรื่องกาแฟที่นี่ก็คือสุดๆ เช่นกันครับ เพิ่มความคูลเข้าไปอี๊กกกก ซึ่งทางนี้มีเมนูเครื่องดื่มแบบสเปเชียลตี้ด้านกาแฟ มีทั้ง Speedbar และ Slowbar ที่นี่มีเมล็ดกาแฟให้เลือกหลากหลาย ให้ทุกคนได้ลองหมุนเวียนกันไปครับ

        </Text>
    </View>

    <View> 
        <Image source={require('../assets/Pic2.jpeg')} style={styles.coverPic} />
        <Text style ={ styles.Text}>Signature drink ที่เราเลิฟและอยากบอกต่อ และไม่อยากให้ทุกคนพลาดเลยครับ
D-Dirty เป็นกาแฟที่เราชอบมากครับ มีความหอมกาแฟ ไม่หวานจนเกินไป ถัดมาเป็น
Mustang เมนูที่ทางร้านมี Presentation ที่น่าสนใจมากๆ ซึ่งมีส่วนผสมจากเหล้า มีการเบิร์นไฟเพื่อทำให้รสชาติของแอลกอฮอล์หายไป มีความเป็นม๊อคเทลเบาๆ มีรสหวานๆ และหอมกาแฟเช่นเดียวกัน Ilyushin เป็นกาแฟที่มีการเผาไหม้ของไม้ เพื่อทำให้เกิดสารให้กลิ่น เพื่อช่วยเสริมให้กาแฟแก้วนี้มีความลงตัวมากยิ่งขึ้น
Flying fortress สำหรับใครที่เลิฟมัชฉะลาเต้ แนะนำมากๆ ครับ รสชาติเข้มข้นมากๆ ครับ ปิดท้ายเมนูเครื่องดื่มแก้วสุดท้ายของเรา Messerschmitt มีส่วนผสมของน้ำลิ้นจี่และตะไคร้ รสชาติหวานๆ เปรี้ยวๆ มีความซ่าสดชื่นดีเลยครับ

        </Text>
    </View>

    <View> 
        <Image source={require('../assets/Pic6.jpeg')} style={styles.coverPic} />
        <Text style ={ styles.Text}>นอกจากเมนูพิเศษที่เราเลือกแล้ว ทางร้านยังมีเมนูกาแฟเบสิกไว้ให้เลือกแล้วแต่ชอบเลยครับ

สำหรับเมนูขนมของทางร้าน ก็ต้องเป็นครัวซองสตรอว์เบอร์รี ตัวขนมด้านนอกกรอบนอกนุ่มใน มีความหอมเนย ด้านบนจะ topด้วยสตรอเบอรี่สด รสชาติดีมากครับ รับรองได้ว่าทุกคนต้องชอบ ในความนุ่ม ๆ และแฮปปี้กลับบ้านแน่นอน⁣

เอาเป็นว่าเป็นอีกร้านที่ต้องแวะมาจิบกาแฟ แบบสเปเชียลตี้ เข้มๆในโลเคชั่นที่อยู่ไม่ไกล
แถวมหาลัยรังสิตนี่เองครับ

สายถ่ายรูปธีมดาร์ค คูลๆ ต้องรีบมาเช็คอินตาม Tongpaii แล้วนะครับ
        </Text>
    </View>

    <View> 
        <Image source={require('../assets/Pic3.jpeg')} style={styles.coverPic} />
        <Text style ={ styles.Text}>
            Shelter Specialty Coffee {'\n'}
            Location: ข้างมหาวิทยาลัยรังสิต {'\n'}
            Open Time: วันจันทร์ – อาทิตย์ 07.00-19.00 น. {'\n'}
            Tel: 082-5956693 {'\n'}
            BTS: สถานีหลักหก มีที่จอดรถ {'\n'}
            พิกัด: https://goo.gl/maps/UvR1YTpWEWnrQzzq5
        </Text>
        <Image source={require('../assets/Pic1.jpeg')} style={styles.coverPic} />
        <Image source={require('../assets/Pic7.jpeg')} style={styles.coverPic} />
        <Image source={require('../assets/Pic5.jpeg')} style={styles.coverPic} />
        <Image source={require('../assets/Pic4.jpeg')} style={styles.coverPic} />
        
    </View>





    </ScrollView>
    </SafeAreaView>
    )
}

export default Blog1

const styles = StyleSheet.create({
    Text: {
        fontSize: 12,
        fontWeight: "regular",
        color: "#333333",
        marginTop:15,
        marginStart:15,
        marginEnd:15,
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#8E5431" ,
        marginStart:15,
        marginEnd:15,
        marginTop:25,
    },
    coverPic:{
        width:345,
        height:200,
        marginTop:15,
        marginStart:15,
        marginEnd:15,
        borderRadius:10,
    },
})