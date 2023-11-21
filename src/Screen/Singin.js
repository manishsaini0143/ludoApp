import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const Singin = () => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Image resizeMode='cover' style={{ width: 116, height: 116, }} source={require('../image/Login.png')} />
                <TouchableOpacity style={{ backgroundColor: '#DD0000', width: 100, height: 35, alignItems: 'center', borderRadius: 10, top: 35 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, lineHeight: 35,fontFamily:'JosefinSans-Bold',bottom:2.5 }}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 40, margin: 10,fontFamily:'JosefinSans-Bold' }}>Singin Here !</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 10,fontFamily:'JosefinSans-SemiBold' }}>Fill your infomation and complete your account</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>

                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 60 }} >
                    <Image resizeMode='contain' style={{ width: 32, height: 32, alignSelf: 'center' }} source={require('../image/Phone.png')} />
                    <TextInput maxLength={10} style={{ color: '#000000', width: '85%', fontSize: 18, letterSpacing: 2,fontFamily:'JosefinSans-Bold',bottom:2.5}} keyboardType='Number-type' placeholder='Full Name' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 60 }} >
                    <Image resizeMode='contain' style={{ width: 32, height: 32, alignSelf: 'center' }} source={require('../image/Phone.png')} />
                    <TextInput maxLength={20} style={{ color: '#000000', width: '85%', fontSize: 18, letterSpacing: 2 ,fontFamily:'JosefinSans-Bold',bottom:2.5}} keyboardType='Number-type' placeholder='Gmail-type' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 60 }} >
                    <Image resizeMode='contain' style={{ width: 32, height: 32, alignSelf: 'center' }} source={require('../image/Phone.png')} />
                    <TextInput maxLength={10} style={{ color: '#000000', width: '85%', fontSize: 18, letterSpacing: 2 ,fontFamily:'JosefinSans-Bold',bottom:2.5}} keyboardType='Number-type' placeholder='Number-Type' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 60 }} >
                    <Image resizeMode='contain' style={{ width: 32, height: 32, alignSelf: 'center' }} source={require('../image/Phone.png')} />
                    <TextInput maxLength={8} style={{ color: '#000000', width: '85%', fontSize: 18, letterSpacing: 2,fontFamily:'JosefinSans-Bold',bottom:2.5 }} keyboardType='Number-type' placeholder='Password-type' placeholderTextColor='#B3B1B1' />
                </View>
            </View>
            <TouchableOpacity disabled style={{ backgroundColor: '#FE0000', height: 60, alignItems: 'center', justifyContent: 'center', margin: 30, borderRadius: 10, width: '80%', alignSelf: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 24,fontFamily:'JosefinSans-Bold' }}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Singin;
