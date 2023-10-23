import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HeaderBar from '../component/HeaderBar';

const setting = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
      <HeaderBar navigation={navigation} />
      {/* <View>
        <Image resizeMode='contain' style={{ width: 100, height: 100, alignSelf: 'center', margin: 15 }} source={require('../image/Men.png')} />
        <Image resizeMode='contain' style={{ width: 30, height: 30, zIndex: 1, position: 'absolute', alignSelf: 'center', top: 75, right: 150 }} source={require('../image/pen.png')} />
      </View>
      <View>
        <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Deepak Pradhan</Text>
      </View> */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 20 }}>

        <View style={{ flexDirection: 'row', backgroundColor: '#bdd9c8', width: '43%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', }}>My Wallet</Text>
          <Image resizeMode='contain' style={{ width: 28, height: 28, marginLeft: 15 }} source={require('../image/wallet2.png')} />
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: '#ffb8ba', width: '43%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', }}>Complete KYC</Text>
          <Image resizeMode='contain' style={{ width: 30, height: 30, marginLeft: 10 }} source={require('../image/kyc.png')} />
        </View>
      </View> */}
      {/* <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignSelf:'center',backgroundColor:'red',padding:10,borderRadius:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', }}>Audio</Text>
      <View style={{flexDirection:'row'}}>

      <Image resizeMode='contain' style={{ width: 30, height: 30, marginLeft: 10 }} source={require('../image/volume.png')} />
      <Image resizeMode='contain' style={{ width: 30, height: 30, marginLeft: 10 }} source={require('../image/music.png')} />
      </View>
      </View> */}
      <View style={{padding:5}}>

      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Terms and Conditions</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Legality</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Privacy Policy</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Cancellation Policy</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Contact Us</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Notification</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>About Us</Text>
          <Image resizeMode='contain' style={{ width: 25, height: 25 }} source={require('../image/rightarrow.png')} />
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

export default setting;
