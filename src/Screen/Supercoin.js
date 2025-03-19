import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
const Supercoin = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
        </TouchableOpacity>
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Super coin</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

          <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 1, borderColor: '#899C29', borderRadius: 10, width: '90%', alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row', borderColor: '#899C29', borderWidth: 1, borderRadius: 10 }}>
          <View style={{ padding: 15 }}>
            <Image resizeMode='cover' style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../image/super.jpg')} />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Win: ₹ 108</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Super 07#07</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Ends in: 3Days</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Entry Fee: ₹ 10</Text>
          </View>
          <View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Super 07#07</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Super 07#07</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#C4E51C', width: '70%', alignSelf: 'center', borderRadius: 10, margin: 15, padding: 3 }}>
        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Prize Pool</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#59766D', width: '85%', alignSelf: 'center', borderRadius: 10, zIndex: 1, bottom: 18, padding: 5 }}>
        <View>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Rank</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>1-1</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>2-2</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>3-3</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>4-4</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>5-5</Text>
        </View>
        <View>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Prize</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>₹ 29</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>₹ 24</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>₹ 20</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>₹ 17</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>₹ 11</Text>
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#C4E51C', width: '80%', alignSelf: 'center', borderRadius: 10, margin: 15, padding: 5, position: 'relative', top: 50 }}>
        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Supercoin;
