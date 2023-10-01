import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <View style={styles.recEmail}>
        <Text style={styles.textEmail}>Email</Text>
      </View>
      <View style={styles.recPassword}>
        <Text style={styles.textPassword}>Password</Text>
        <Image style={styles.imageEye} source={require('./assets/eye.png')}></Image>
      </View>
      <View style={styles.login}>
        <Text style={styles.textBtnLogin}>Login</Text>
      </View>
      <Text style={styles.textWhen}>When you agree to terms and conditions</Text>
      <Text style={styles.textFor}>For got your password?</Text>
      <Text style={styles.textOr}>Or login with</Text>
      <View style={styles.icon}>
        <Image style={styles.iconfa} source={require('./assets/icofacebook.png')}></Image>
        <Image style={styles.icongg} source={require('./assets/icogoogle.png')}></Image>
        <Image style={styles.iconza} source={require('./assets/icozalo.png')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(49, 170, 82, 0.19)',
    justifyContent: 'space-around',
  },
  textLogin: {
    width: '73px',
    height: '29px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '29.3px',
    textAlign: 'center',
  },
  recEmail: {
    width: '330px',
    height: '54px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    paddingLeft: '20px',
    display: "flex",
    justifyContent: "center"
  },
  textEmail: {
    width: '45px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  recPassword: {
    width: '330px',
    height: '54px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  textPassword: {
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  imageEye: {
    width: '38px',
    height: '36px',
  },
  login: {
    width: '330px',
    height: '45px',
    backgroundColor: 'rgba(229, 57, 53, 1)',
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnLogin: {
    width: '58px',
    height: '23px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px',
    color: 'rgba(255, 255, 255, 1)',
  },
  textWhen: {
    width: '260px',
    height: '20px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.41px',
    textAlign: 'center',
  },
  textFor: {
    width: '260px',
    height: '20px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.41px',
    textAlign: 'center',
    color: 'rgba(93, 37, 250, 1)',
  },
  textOr: {
    width: '260px',
    height: '20px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.41px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
  },
  icon: {
    width: "328px",
    height: "45px",
    borderRadius: "2px",
    border: "1px",
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  iconfa: {
    width: "35px",
    height: "35px",
    backgroundColor: "rgb(39,90,142)",
  },
  iconza: {
    width: "35px",
    height: "35px",
    backgroundColor: "rgb(21,147,198)",
  },
  icongg:{
    width: "35px",
    height: "35px",
  }
});
