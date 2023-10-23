import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const ProfileUpdate = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' }}>Profile Update</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>

                <TouchableOpacity>
                    <Image resizeMode='cover' style={{ width: 100, height: 100 }} source={require('../image/Avatar1.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', top: 10 }}>Click Above</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'center'}}>

                <Text style={{ color: '#FFFFFF', fontSize: 18, backgroundColor: 'blue', width: 100, alignSelf: 'center', borderRadius: 10, fontWeight: 'bold', height: 40, textAlign: 'center', lineHeight: 40 }}>
                    UPLOAD
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput  style={{ color: '#000000', width: '90%', fontSize: 22, letterSpacing: 3, fontWeight: 'bold', left: 5 }} keyboardType='name-type' placeholder='User Name' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput  style={{ color: '#000000', width: '90%', fontSize: 22, letterSpacing: 3, fontWeight: 'bold', left: 5 }} keyboardType='name-type' placeholder='State' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput  style={{ color: '#000000', width: '90%', fontSize: 22, letterSpacing: 3, fontWeight: 'bold', left: 5}} keyboardType='name-type' placeholder='Country' placeholderTextColor='#B3B1B1' />
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#FE0000', height: 65, alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: '70%', alignSelf: 'center', margin: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 25, }}>UPDATE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileUpdate;
