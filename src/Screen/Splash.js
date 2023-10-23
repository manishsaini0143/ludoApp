import React from 'react';
import { View, Text, Image, } from 'react-native';

const Splash = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <Image resizeMode='cover' style={{ width: '100%', height: '100%', }} source={require('../image/seples.png')} />
        <Image resizeMode='contain' style={{ width: 200, height: 200, zIndex: 1, position: 'absolute', top: 100 }} source={require('../image/seples1.png')} />
        <Text style={{ color: '#FFFFFF', fontSize: 20, zIndex: 10, position: 'absolute', top: 320 }}>PLAY LUDO & WIN REAL CASH!</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 14, zIndex: 10, position: 'absolute', bottom: 350 }}>For best experience, open<Text style={{ color: 'red' }}>KhiladiBaaz.com</Text> on chrome mobile</Text>
      </View>

    </View>
  );
}

export default Splash;
