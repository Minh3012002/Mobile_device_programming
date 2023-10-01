import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textRegister}>REGISTER</Text>
      <View style={styles.recName}>
        <Text style={styles.textName}>Name</Text>
      </View>
      <View style={styles.recPhone}>
        <Text style={styles.textPhone}>Phone</Text>
      </View>
      <View style={styles.recEmail}>
        <Text style={styles.textEmail}>Email</Text>
      </View>
      <View style={styles.recPassword}>
        <Text style={styles.textPassword}>Password</Text>
        <Image style={styles.imageEye} source={require('./assets/eye.png')}></Image>
      </View>
      <View style={styles.recBirthday}>
        <Text style={styles.textBirthday}>Birthday</Text>
      </View>
      <View style={styles.gender}>
        <Image style={styles.imageMale} source={require('./assets/rdbMale.png')}></Image>
        <Text style={styles.textMale}>Male</Text>
        <Image style={styles.imageFemale} source={require('./assets/rdbFemale.png')}></Image>
        <Text style={styles.textFemale}>Female</Text>
      </View>
      <View style={styles.btnRegister}>
        <Text style={styles.textBtnRegister}>REGISTER</Text>
      </View>
      
      <Text style={styles.textWhen}>When you agree to terms and conditions</Text>
      
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
  textRegister: {
    width: '93px',
    height: '23px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px',
    textAlign: 'center',
  },
  textName: {
    width: '48px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  recName: {
    width: '330px',
    height: '54px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    paddingLeft: '20px',
    display: "flex",
    justifyContent: "center"
  },
  recPhone: {
    width: '330px',
    height: '54px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    paddingLeft: '20px',
    display: "flex",
    justifyContent: "center"
  },
  textPhone: {
    width: '52px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
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
  recBirthday: {
    width: '330px',
    height: '54px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    paddingLeft: '20px',
    display: "flex",
    justifyContent: "center"
  },
  textBirthday: {
    width: '67px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  gender:{
    width: '330px',
    height: '54px',
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  imageMale:{
    width:"23px",
    height:"23px",
  },
  textMale:{
    width: '40px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  imageFemale:{
    width:"23px",
    height:"23px",
  },
  textFemale:{
    width: '59px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px'
  },
  btnRegister: {
    width: '330px',
    height: '45px',
    backgroundColor: 'rgba(229, 57, 53, 1)',
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnRegister: {
    width: '93px',
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
});
