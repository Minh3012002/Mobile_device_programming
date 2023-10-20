import * as React from 'react';
import { Text, TextInput, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
  const [image, setImage] = React.useState(require('./assets/vs_blue.png'));
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(255,255,255)' }}>
      <View style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image source={require('./assets/vs_blue.png')} style={{ width: '301px', height: '361px' }}></Image>
        <Text style={{ width: '288px', height: '18px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', lineHeight: '17.58px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ width: '288px', height: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ width: '130px', height: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={require('./assets/star.png')} style={{ width: '23px', height: '25px' }}></Image>
            <Image source={require('./assets/star.png')} style={{ width: '23px', height: '25px' }}></Image>
            <Image source={require('./assets/star.png')} style={{ width: '23px', height: '25px' }}></Image>
            <Image source={require('./assets/star.png')} style={{ width: '23px', height: '25px' }}></Image>
            <Image source={require('./assets/star.png')} style={{ width: '23px', height: '25px' }}></Image>
          </View>
          <Text style={{ width: '135px', height: '18px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', lineHeight: '17.58px' }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ width: '288px', height: '21px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ width: '99px', height: '21px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '18px', lineHeight: '21.09px' }}>1.790.000 đ</Text>
          <Text style={{ width: '150px', height: '18px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '15px', lineHeight: '17.58px', textDecoration: 'line-through', color: 'rgba(0, 0, 0, 0.58)', paddingLeft: '50px' }}>1.790.000 đ</Text>
        </View>
        <View style={{ width: '288px', height: '21px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ width: '146px', height: '14px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '12px', lineHeight: '14.06px', color: 'rgba(250, 0, 0, 1)' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image source={require('./assets/Group 1.png')} style={{ width: '20px', height: '20px', marginLeft: '10px' }}></Image>
        </View>
        <Pressable style={{ width: '332px', height: '34px', border: '1px solid rgba(0, 0, 0, 0.46)', borderRadius: '200px', backgroundColor: 'rgb(255,255,255)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('CreatePost'); }}>
          <Text style={{ width: '127px', height: '18px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', lineHeight: '17.58px' }}>4 MÀU-CHỌN MÀU</Text>
        </Pressable>
      </View>
      <View style={{ width: '326px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(238, 10, 10, 1)', borderRadius: '10px' }}>
        <Text style={{ width: '105px', height: '23px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '20px', lineHeight: '23.44px', color: 'rgba(249, 242, 242, 1)' }}>CHỌN MUA</Text>
      </View>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [image, setImage] = React.useState(require('./assets/vs_blue.png'));
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
      <View style={{ width: '100%', height: '200px', flex: 3, backgroundColor: 'rgb(255,255,255)', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Image source={image}
          style={{ width: '100px', height: '100px' }}
          resizeMode='contain'
        />
        <Text style={{ width: '164px', height: '36px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', lineHeight: '17.58px' }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={{ width: '100%', height: '450px', backgroundColor: 'rgba(196, 196, 196, 1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ width: '100%', height: '21px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '18px', lineHeight: '21.09px' }}>Chọn một màu bên dưới:</Text>
        <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
          <Pressable onPress={() => {
            setImage(require('./assets/vs_red.png'));
          }} style={{ margin: '3px', width: '70px', height: '70px', backgroundColor: 'rgba(243, 13, 13, 1)' }}>
          </Pressable>
          <Pressable onPress={() => {
            setImage(require('./assets/vs_black.png'));
          }} style={{ margin: '3px', width: '70px', height: '70px', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
          </Pressable>
          <Pressable onPress={() => {
            setImage(require('./assets/vs_blue.png'));
          }} style={{ margin: '3px', width: '70px', height: '70px', backgroundColor: 'rgba(35, 72, 150, 1)' }}>
          </Pressable>
          <Pressable onPress={() => {
            setImage(require('./assets/vs_silver.png'));
          }} style={{ margin: '3px', width: '70px', height: '70px', backgroundColor: 'rgba(197, 241, 251, 1)' }}>
          </Pressable>
        </View>
        <Pressable style={{ width: '326px', height: '44px', border: '1px solid rgba(202, 21, 54, 1)', borderRadius: '200px', backgroundColor: 'rgb(77,109,193)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('Home'); }}>
          <Text style={{ width: '55px', height: '23px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '20px', lineHeight: '23.44px', color: 'rgba(249, 242, 242, 1)' }}>Xong</Text>
        </Pressable>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal'>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="CreatePost" component={CreatePostScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
