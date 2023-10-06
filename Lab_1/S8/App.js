import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageEye} source={require("./assets/eyeball.png")}></Image>
      <View style={styles.user}>
        <Image style={styles.imageAvatar} source={require("./assets/avatar.png")}></Image>
        <Text style={styles.textUser}>Please input user name</Text>
      </View>
      <View style={styles.password}>
        <Image style={styles.imageLock} source={require("./assets/lock.png")}></Image>
        <Text style={styles.textPassword}>Please input password</Text>
      </View>
      <View style={styles.recBtnLogin}>
        <Text style={styles.textBtnLogin}>LOGIN</Text>
      </View>
      <View style={styles.groupRF}>
        <Text style={styles.textRegister}>Register</Text>
        <Text style={styles.textForgot}>Forgot Password</Text>
      </View>
      <View>
        <Text style={styles.textOther}>Other Login Methods</Text>
      </View>
      <View style={styles.groupImage}>
        <Image style={styles.imageAvatarPlus} source={require("./assets/avatar+.png")}></Image>
        <Image style={styles.imageWifi} source={require("./assets/wifi.png")}></Image>
        <View style={styles.recFace}>
          <Image style={styles.imageFace} source={require("./assets/facebook.png")}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "column",
  },
  imageEye: {
    width: "140.19px",
    height: "141.2px",
  },
  user: {
    width: "300px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageAvatar: {
    width: "30px",
    height: "30px",
  },
  textUser: {
    width: "200px",
    height: "21px",
    color: "rgba(196, 196, 196, 1)",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
    paddingLeft: "10px"
  },
  password: {
    width: "300px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageLock: {
    width: "30px",
    height: "30px",
  },
  textPassword: {
    width: "200px",
    height: "21px",
    color: "rgba(196, 196, 196, 1)",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
    paddingLeft: "10px"
  },
  recBtnLogin: {
    width: "300px",
    height: "48px",
    backgroundColor: "rgba(56, 111, 252, 1)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnLogin: {
    width: "52px",
    height: "21px",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
  },
  groupRF: {
    width: "300px",
    height: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textRegister: {
    width: "66px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
  },
  textForgot: {
    width: "137px",
    height: "21px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
  },
  textOther: {
    width: "300px",
    height: "32px",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21.09px",
    textAlign: "center",
  },
  groupImage: {
    width: "300px",
    height: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageAvatarPlus: {
    width: "74px",
    height: "74px",
  },
  imageWifi: {
    width: "74px",
    height: "74px",
  },
  recFace: {
    width: "74px",
    height: "74px",
    backgroundColor:"rgba(58, 87, 156, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:"10px"
  },
  imageFace: {
    width: "32px",
    height: "45px",
  },
});
