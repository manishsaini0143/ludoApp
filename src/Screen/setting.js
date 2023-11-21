import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import HeaderBar from '../component/HeaderBar';

const setting = ({ navigation }) => {
  const [isModalVisible0, setModalVisible0] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModa0 = () => {
    setModalVisible0(true);
  };

  const closeModa0 = () => {
    setModalVisible0(false);
  };
  const openModa = () => {
    setModalVisible(true);
  };

  const closeModa = () => {
    setModalVisible(false);
  };

  //Modal//
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
      <View style={{ padding: 5 }}>

        <TouchableOpacity onPress={() => navigation.navigate('TermsAndCondition')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Terms and Conditions</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Legality')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Legality</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Privacy Policy</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cancellationpolicy')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Cancellation Policy</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contactus')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Contact Us</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Notification</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>About Us</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openModa0} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Logout</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <Modal
          visible={isModalVisible0}
          // animationType="slide"
          transparent={true}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
              <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>are you sure want to logout ?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModa0} >
                  <Text style={{ color: '#FFFFFF', fontSize: 16 }}>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModa0} >
                  <Text style={{ color: '#FFFFFF', fontSize: 16 }}>YES</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={openModa} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, borderWidth: 1, borderColor: '#FFFFFF', borderRadius: 10, padding: 10, width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5, opacity: 0.8 }}>Delete Account</Text>
          <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
        </TouchableOpacity>
        <Modal
          visible={isModalVisible}
          // animationType="slide"
          transparent={true}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
              <View style={{ width: 210, alignSelf: 'center' }}>

                <Text style={{ alignSelf: 'center', color: '#000000', fontWeight: 'bold', fontSize: 16 }}>are you sure want to delete</Text>
                <Text style={{ alignSelf: 'center', color: '#000000', fontWeight: 'bold', fontSize: 16 }}> your account ?</Text>
              </View>
              <View style={{ margin: 10, borderWidth: 1, borderRadius: 10 }}>
                <TextInput style={{ height: 40, left: 5, width: '70%' }} placeholder='Enter your name' placeholderTextColor={'#000000'} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModa} >
                  <Text style={{ color: '#FFFFFF', fontSize: 14 }}>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModa} >
                  <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Continus</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default setting;
