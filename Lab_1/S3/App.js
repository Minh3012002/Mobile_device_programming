import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageLock} source={require('./assets/lock.png')}></Image>
      <Text style={styles.textForget}>FORGET {'\n'} PASSWORD</Text>
      <Text style={styles.textProcide}>Provide your account’s email for which you{'\n'}want to reset your password</Text>
      <View style={styles.email}>
        <Image style={styles.imageMail} source={require('./assets/mail.png')}></Image>
        <Text style={styles.textEmail}>Email</Text>
      </View>
      <View style={styles.button} >
        <Text style={styles.textNext}>NEXT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F4F6',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageLock: {
    width: '105px',
    height: '117px',
  },
  textForget: {
    fontFamily: 'Roboto',
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'center'
  },
  textProcide: {
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'center',
  },
  email: {
    backgroundColor: '#C4C4C4',
    width: '305px',
    height: '45px',
    flexDirection: 'row',
    display:"flex",
    alignItems:"center"    
  },
  imageMail: {
    width: '48px',
    height: '45px',
  },
  textEmail: {
    width: '38px',
    height: '18px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '0em', 
  },
  button: {
    width: '305px',
    height: '45px',
    backgroundColor: '#E3C000',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  textNext: {
    width:'46px',
    height: '21px',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '700',
  },

});
