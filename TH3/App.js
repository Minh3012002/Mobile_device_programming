import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Image style={styles.imageCycle} source={require('./assets/cycle.png')}></Image> */}
        
          <Text style={styles.textGrow}>GROW {'\n'}
          YOUR  BUSINESS</Text> 
          <Text style={styles.textBusiness}>We will help you to grow your business using {'\n'}online server </Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonLogin} >
              <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSign} >
              <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97E8FA',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageCycle:{
    width:100,
    height:100
  },
  textGrow:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'800'
  },
  textBusiness:{
    textAlign:'center',
    fontWeight:'700'
  },
  button:{
    width:200,
    height:50,
   
    flexDirection:'row',
    justifyContent:'space-between',
   
    
  },
  buttonLogin:{
    backgroundColor:'#E3C000',
    height:40,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  buttonSign:{
    backgroundColor:'#E3C000',
    height:40,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  }
});
