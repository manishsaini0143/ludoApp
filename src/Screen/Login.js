import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const Login = ({ navigation}) => {
  return (
    <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Image resizeMode='cover' style={{ width: 116, height: 116, }} source={require('../image/Login.png')} />
        <TouchableOpacity style={{ backgroundColor: '#DD0000', width: 100, height: 35, alignItems: 'center', borderRadius: 10, top: 35 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, lineHeight: 35,fontWeight:'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 40, margin: 10 }}>Login Here !</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 10 }}>Fill your infomation and complete your account</Text>
      </View>
      <View style={{ margin: 30, borderRadius: 10, backgroundColor: '#FFFFFF', width: '85%', flexDirection: 'row', height: 60 }} >
        <Image resizeMode='contain' style={{ width: 32, height: 32, margin: 15 }} source={require('../image/Phone.png')} />
        <TextInput maxLength={10} style={{ color: '#000000', width: '70%', fontSize: 24,letterSpacing: 3,fontWeight:'bold' }} keyboardType='Number-type' placeholder='Mobile Number' placeholderTextColor='#B3B1B1' />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Loginotp')} style={{backgroundColor:'#FE0000',height:65,alignItems:'center',justifyContent:'center',margin:30,borderRadius:10,width:'85%'}}>
      <Text style={{ color: '#FFFFFF', fontSize: 25, }}>GET OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Singin')} style={{top:10,alignSelf:'center'}}>
      <Text style={{ color: '#FFFFFF', fontSize: 20,alignSelf:'center',width:'80%' }}>Don't have an account?<Text style={{color:'#FE0000'}}> Register</Text> </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
