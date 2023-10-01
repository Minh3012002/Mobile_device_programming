import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textCode}>CODE</Text>
      <Text style={styles.textVerification}>VERIFICATION</Text>
      <Text style={styles.textEnter}>Enter ontime password sent on{'\n'}++849092605798</Text>
      <View style={styles.rec}>
        <View style={styles.rec1}></View>
        <View style={styles.rec2}></View>
        <View style={styles.rec3}></View>
        <View style={styles.rec4}></View>
        <View style={styles.rec5}></View>
        <View style={styles.rec6}></View>
      </View>
      <View style={styles.button}>
        <Text style={styles.textVerify}>VERIFY CODE</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#C7F4F6',
  },
  textCode: {
    width: '154px',
    height: '70px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '60px',
    lineHeight: '70.31px',
    textAlign: 'center',
  },
  textVerification: {
    width: '302px',
    height: '53px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px',
    textAlign: 'center',
  },
  textEnter: {
    width: '302px',
    height: '53px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '17.58px',
    textAlign: 'center',
  },
  rec: {
    flexDirection: 'row',
  },
  rec1: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  rec2: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  rec3: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  rec4: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  rec5: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  rec6: {
    width: '50px',
    height: '50px',
    border: '1px solid #000000',
  },
  button: {
    width: '339px',
    height: '50px',
    backgroundColor: '#E3C000',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  textVerify: {
    width: '111px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '21.09px',
  }
});
