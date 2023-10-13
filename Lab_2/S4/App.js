import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rec12}>
        <View style={styles.rec1}>
          <View style={styles.rec2}>
            <View style={styles.rec6}>
              <Image style={styles.imageBook} source={require("./assets/book.png")}></Image>
              <Text style={styles.text7}>Mã giảm giá đã lưu</Text>
            </View>
            <View style={styles.rec3}>
              <View style={styles.rec7}>
                <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
                <Text style={styles.text2}>Cung cấp bởi Tiki Trading</Text>
                <Text style={styles.text3}>141.800 đ</Text>
                <Text style={styles.text4}>141.800 đ</Text>
                <View style={styles.rec4}>
                  <View style={styles.rec5}>
                    <Image style={styles.imageBtnMinus} source={require("./assets/btnminus.png")}></Image>
                    <Text style={styles.text5}>1</Text>
                    <Image style={styles.imageBtnAdd} source={require("./assets/btnadd.png")}></Image>
                  </View>
                  <Text style={styles.text6}>Mua sau</Text>
                </View>
              </View>
              <Text style={styles.text8}>Xem tại đây</Text>
            </View>
          </View>
          <View style={styles.rec8}>
            <View style={styles.rec9}>
              <View style={styles.rec10}></View>
              <Text style={styles.text9}>Mã giảm giá</Text>
            </View>
            <View style={styles.rec11}>
              <Text style={styles.text10}>Áp dụng</Text>
            </View>
          </View>
        </View>
        <View style={styles.rec13}>
          <Text style={styles.text11}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={styles.text12}>Nhập tại đây?</Text>
        </View>
        <View style={styles.rec14}>
          <Text style={styles.text13}>Tạm tính</Text>
          <Text style={styles.text14}>141.800 đ</Text>
        </View>
      </View>
      <View style={styles.rec15}>
        <View style={styles.rec16}>
          <Text style={styles.text15}>Thành tiền</Text>
          <Text style={styles.text16}>141.800 đ</Text>
        </View>
        <View style={styles.rec17}>
          <Text style={styles.text17}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rec1: {
    width: "100%",
    height: "283px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#fff",

  },
  rec2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageBook: {
    width: "104px",
    height: "127px",
  },
  rec3: {
    width: "220px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text1: {
    width: "191px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px"
  },
  text2: {
    width: "138px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px"
  },
  text3: {
    width: "84px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    color: "rgba(238, 13, 13, 1)",
  },
  text4: {
    width: "56px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "rgba(128, 128, 128, 1)",
  },
  rec4: {
    width: "185px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rec5: {
    width: "56px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageBtnMinus: {
    width: "14.22px",
    height: "16px",
  },
  text5: {
    width: "9px",
    height: "18px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "17.58px",
  },
  imageBtnAdd: {
    width: "14.22px",
    height: "16px",
  },
  text6: {
    width: "46px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "rgba(19, 79, 236, 1)",
  },
  text7: {
    width: "107px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
  },
  text8: {
    width: "64px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "rgba(19, 79, 236, 1)",
  },
  rec6: {
    width: "105px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rec7: {
    width: "220px",
    height: "127px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  rec8: {
    width: "370px",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rec9: {
    width: "208px",
    height: "45px",
    border: " 1px solid rgba(128, 128, 128, 1)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rec10: {
    width: "32px",
    height: "16px",
    backgroundColor: "rgba(242, 221, 27, 1)",
  },
  text9: {
    width: "100px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
  },
  rec11: {
    width: "99px",
    height: "45px",
    backgroundColor: "rgb(10,94,183)",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text10: {
    width: "75px",
    height: "23px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "23.44px",
    color: "rgba(255, 255, 255, 1)",
  },
  rec12: {
    width: "100%",
    height: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rec13: {
    width: "100%",
    height: "51px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text11: {
    width: "227px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "rgba(1, 22, 39, 1)",
  },
  text12: {
    width: "74px",
    height: "14px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "rgba(19, 79, 236, 1)",
  },
  rec14: {
    width: "100%",
    height: "51px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text13: {
    width: "73px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    color: "rgba(1, 22, 39, 1)",
  },
  text14: {
    width: "84px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    color: "rgba(238, 13, 13, 1)",
  },
  rec15:{
    width: "100%",
    height: "120px",
    backgroundColor:"rgba(255, 255, 255, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rec16:{
    width:"331px",
    height:"25px",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text15:{
    width: "89px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    color: "rgba(128, 128, 128, 1)",
  },
  text16:{
    width: "93px",
    height: "23px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "23.44px",
    color: "rgba(238, 13, 13, 1)",
  },
  rec17:{
    width:"331px",
    height:"45px",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgba(229, 57, 53, 1)"
  },
  text17:{
    width: "208px",
    height: "23px",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "23.44px",
    color: "rgba(255, 255, 255, 1)",
  }
});
