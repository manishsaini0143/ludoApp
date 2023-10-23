import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MyProfile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' }}>My Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>

                <View>
                    <Image resizeMode='cover' style={{ width: 100, height: 100 }} source={require('../image/Avatar1.png')} />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Deepak Pradhan</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Username: Deepak Pradhan</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>DeepakPradhan123@gmail.com</Text>
                </View>

            </View>
            <View style={{ height: 5, width: '100%', backgroundColor: 'red' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileUpdate')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30, zIndex: 1, position: 'relative', left: 200, bottom: 15 }} source={require('../image/pen.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ margin: 15, backgroundColor: '#36090c', borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Mobile Number</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>+917456348345</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, backgroundColor: '#007805', width: 100, textAlign: 'center', borderRadius: 10, fontWeight: 'bold', alignSelf: 'center' }}>
                        Verified
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Email Address</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>DeepakPradhan123@gamil.com</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, backgroundColor: '#007805', width: 100, textAlign: 'center', borderRadius: 10, fontWeight: 'bold', alignSelf: 'center' }}>
                        Verified
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Aadhar</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>****************</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, backgroundColor: 'red', width: 100, textAlign: 'center', borderRadius: 10, fontWeight: 'bold', alignSelf: 'center' }}>
                        Update Aadhar
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Inviation Code</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>Inwnwsry</Text>
                    </View>
                    {/* <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold',color:'green',alignSelf:'center'}}>Verified</Text> */}
                    {/* <Text style={{ color: '#FFFFFF', fontSize: 18, backgroundColor: 'red', width: 100, textAlign: 'center', borderRadius: 10, fontWeight: 'bold', alignSelf: 'center' }}>
                    Update Aadhar
                </Text> */}
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 30, height: 30, right: 35 }} source={require('../image/share.png')} />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
}

export default MyProfile;
