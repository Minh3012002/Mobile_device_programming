import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.backGroundIn}>
        <Text style={styles.textHeader}>PASSWORD GENERATOR</Text>
        <View style={styles.recPassword}></View>
        <View style={styles.rec}>
          <Text style={styles.textPasswordLenght}>Password length</Text>
          <View style={styles.recInput}></View>
        </View>
        <View style={styles.rec}>
          <Text style={styles.textIncludeLower}>Include lower case letters</Text>
          <View style={styles.recTick}></View>
        </View>
        <View style={styles.rec}>
          <Text style={styles.textIncludeUpcase}>Include upcase letters</Text>
          <View style={styles.recTick}></View>
        </View>
        <View style={styles.rec}>
          <Text style={styles.textIncludeNumber}>Include number</Text>
          <View style={styles.recTick}></View>
        </View>
        <View style={styles.rec}>
          <Text style={styles.textIncludeSpecial}>Include special symbol</Text>
          <View style={styles.recTick}></View>
        </View>
        <View style={styles.recBtn}>
          <Text style={styles.textBtn}>GENERATE PASSWORD</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgba(35, 35, 91, 0.7)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGroundIn:{
    width:"322px",
    height:"605px",
    backgroundColor:"rgba(35, 35, 91, 1)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:"20px",
  },
  textHeader:{
    width:"181px",
    height:"64px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"25px",
    lineHeight:"29.3px",
    textAlign:"center",
    color:"rgba(255, 255, 255, 1)",
  },
  recPassword:{
    width:"297px",
    height:"55px",
    backgroundColor:"rgba(21, 21, 55, 1)",
  },
  rec:{
    width:"300px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  textPasswordLenght:{
    width:"223px",
    height:"24px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"20px",
    lineHeight:"23.44px",
    color:"rgba(255, 255, 255, 1)",
  },
  recInput:{
    width:"118px",
    height:"33px",
    backgroundColor:"rgba(255, 255, 255, 1)",
  },
  textIncludeLower:{
    width:"247px",
    height:"27px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"20px",
    lineHeight:"23.44px",
    color:"rgba(255, 255, 255, 1)", 
  },
  recTick:{
    width:"25px",
    height:"25px",
    backgroundColor:"rgba(255, 255, 255, 1)",
  },
  textIncludeUpcase:{
    width:"206px",
    height:"26px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"20px",
    lineHeight:"23.44px",
    color:"rgba(255, 255, 255, 1)",
  },
  textIncludeNumber:{
    width:"160px",
    height:"25px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"20px",
    lineHeight:"23.44px",
    color:"rgba(255, 255, 255, 1)",
  },
  textIncludeSpecial:{
    width:"213px",
    height:"31px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"20px",
    lineHeight:"23.44px",
    color:"rgba(255, 255, 255, 1)",
  },
  recBtn:{
    width:"269px",
    height:"55px",
    backgroundColor:"rgba(59, 59, 152, 1)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  textBtn:{
    width:"259px",
    height:"21px",
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize:"18/px",
    lineHeight:"21.09px",
    color:"rgba(255, 255, 255, 1)",
    textAlign:"center",
  }
});