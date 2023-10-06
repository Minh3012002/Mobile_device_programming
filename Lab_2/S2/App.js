import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rec1}>
        <Image style={styles.imageUsb} source={require("./assets/usb.png")}></Image>
        <Text style={styles.textUsb}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View>
        <Text style={styles.textSatisfied}>Cực kỳ hài lòng</Text>
      </View>
      <View style={styles.recStar}>
        <Image style={styles.imageStar} source={require("./assets/star.png")}></Image>
        <Image style={styles.imageStar} source={require("./assets/star.png")}></Image>
        <Image style={styles.imageStar} source={require("./assets/star.png")}></Image>
        <Image style={styles.imageStar} source={require("./assets/star.png")}></Image>
        <Image style={styles.imageStar} source={require("./assets/star.png")}></Image>
      </View>
      <View style={styles.recPicture}>
        <Image style={styles.imageCamera} source={require("./assets/camera.png")}></Image>
        <Text style={styles.textAdd}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.recNote}>
        <Text style={styles.textNote}>Hãy chi sẻ những điều mà bạn thích về sản phẩm</Text>
        <Text style={styles.textLink}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <View style={styles.recBtnSent}>
        <Text style={styles.textSent}>Gửi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rec1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageUsb: {
    width: "70px",
    height: "70px"
  },
  textUsb: {
    width: "259px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "18.75px",
  },
  textSatisfied: {
    width: "259px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    textAlign: "center"
  },
  recStar: {
    width:"300px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageStar: {
    width: "39px",
    height: "39px",
  },
  recPicture: {
    width: "293px",
    height: "68px",
    border: "2px solid rgba(21, 17, 235, 1)",
    borderRadius:"5px",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  imageCamera:{
    width:"39px",
    height:"32px",
  },
  textAdd:{
    height:"21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    paddingLeft:"20px"
  },
  recNote:{
    width:"293px",
    height:"222px",
    border: "2px solid rgba(196, 196, 196, 1)",
    borderRadius:"5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
  textNote:{
    width:"259px",
    height:"21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    color:"rgba(196, 196, 196, 1)",
  },
  textLink:{
    width:"205px",
    height:"14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color:"rgba(0, 0, 0, 1)",
  },
  recBtnSent:{
    width:"289px",
    height:"41px",
    backgroundColor:"rgba(13, 93, 182, 1)",
    border: "2px solid rgba(21, 17, 235, 1)",
    borderRadius:"5px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  textSent:{
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "23.44px",
    color:"rgba(255, 255, 255, 1)",
  }
});
