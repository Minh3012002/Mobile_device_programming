import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <View style={styles.recName}>
        <Image style={styles.imageAvatar} source={require('./assets/avatar.png')}></Image>
        <Text style={styles.textName}>Name</Text>
      </View>
      <View style={styles.recPassword}>
        <View style={styles.iconName}>
          <Image style={styles.imageLock} source={require('./assets/Lock.png')}></Image>
          <Text style={styles.textPassword}>Name</Text>
        </View>
        <View style={styles.iconEye}>
          <Image style={styles.imageEye} source={require('./assets/eye.png')}></Image>
        </View>
      </View>
      <View style={styles.recBtnLogin}>
        <Text style={styles.textBtnLogin}>Login</Text>
      </View>
      <Text style={styles.textCreate}>Create Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgb(243,197,1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textLogin: {
    width: '87px',
    height: '35px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '35.16px',
  },
  recName: {
    width: "330px",
    height: "54px",
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageAvatar: {
    width: "32px",
    height: "32px",
    paddingLeft: "5px",
  },
  textName: {
    width: '60px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px',
    paddingLeft: "10px",
  },
  recPassword: {
    width: "330px",
    height: "54px",
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    border: '1px solid rgba(242, 242, 242, 1)',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
  },
  imageLock: {
    width: "32px",
    height: "32px",
  },
  textPassword: {
    width: '60px',
    height: '21px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '21.09px',
    paddingLeft: "10px",
  },
  iconEye: {
    paddingRight: "10px",
  },
  imageEye: {
    width: "32px",
    height: "32px",
  },
  recBtnLogin: {
    width: "330px",
    height: "45px",
    backgroundColor: "rgba(6, 0, 0, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnLogin: {
    height: '27px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px',
    color: 'rgba(255, 255, 255, 1)',
  },
  textCreate: {
    height:"27px",
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px'
  }
});
