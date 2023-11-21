import React from 'react';
import { View, Text, Image, TouchableOpacity, ProgressBarAndroid, Share } from 'react-native';

const MyProfile = ({ navigation }) => {
    const userProgress = 60;

    // Function to open the share dialog
    const openShareDialog = () => {
        Share.share({
            message: 'Check out my profile!',
            // You can specify more share options like title and URL here
        });
    };

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily:'JosefinSans-Bold', }}>My Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View>
                    <Image resizeMode='cover' style={{ width: 100, height: 100 }} source={require('../image/Avatar1.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileUpdate')}>
                        <Image resizeMode='cover' style={{ width: 30, height: 30, zIndex: 1, position: 'absolute', left: 70, bottom: 5 }} source={require('../image/pen.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18,  fontFamily:'JosefinSans-Bold', }}>Deepak Pradhan</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 16,fontFamily:'JosefinSans-Bold' }}>Username: Deepak Pradhan</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily:'JosefinSans-Bold' }}>DeepakPradhan123@gmail.com</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={userProgress / 100}
                        style={{ marginTop: 10 }}
                    />
                </View>
            </View>
            <View style={{ height: 5, width: '100%', backgroundColor: 'red' }}></View>
            <View style={{ backgroundColor: '#36090c', borderRadius: 10, width: '95%', alignSelf: 'center', padding: 10, margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 17,fontFamily:'JosefinSans-Bold' }}>Mobile Number</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 13,fontFamily:'Poppins-Bold'}}>+917456348345</Text>
                    </View>
                    <View style={{ backgroundColor: '#007805', width: 90, textAlign: 'center', borderRadius: 10, alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', textAlign: 'center',fontFamily:'Poppins-Bold',top:2, fontSize: 14 }}>
                            Verified
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 17,fontFamily:'JosefinSans-Bold' }}>Email Address</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 13,fontFamily:'Poppins-Bold' }}>DeepakPradhan123@gamil.com</Text>
                    </View>
                    <View style={{ backgroundColor: '#007805', width: 90, textAlign: 'center', borderRadius: 10, alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', textAlign: 'center',fontFamily:'Poppins-Bold',top:2, fontSize: 14 }}>
                            Verified
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 17,fontFamily:'JosefinSans-Bold' }}>Aadhar</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 13,fontFamily:'Poppins-Bold'}}>******************</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'red', width: 90, textAlign: 'center', borderRadius: 10, alignSelf: 'center' }} onPress={() => navigation.navigate('UpdateAadahar')}>

                        <Text style={{ color: '#FFFFFF', fontSize: 14, textAlign: 'center', borderRadius: 10,fontFamily:'Poppins-Bold', alignSelf: 'center' }}>
                            Update Aadhar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 17,fontFamily:'JosefinSans-Bold' }}>Invitation Code</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 13,fontFamily:'Poppins-Bold'}}>Inwnwsry</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={openShareDialog}>
                        <Image resizeMode='cover' style={{ width: 30, height: 30, right: 35 }} source={require('../image/share.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default MyProfile;
