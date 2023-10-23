import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity  >

                        <Image resizeMode='cover' style={{ width: 46, height: 26, margin: 10 }} source={require('../image/menu.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} >

                        <Image resizeMode='cover' style={{ width: 42, height: 40, }} source={require('../image/Men.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', alignItems: 'center', width: 140, justifyContent: 'center' }}>
                    <Image resizeMode='cover' style={{ width: 40, height: 26, }} source={require('../image/coin.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 5 }}>
                        ₹200
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: '#FE0000', width: 30, height: 30, alignItems: 'center', borderRadius: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View>
                <Image resizeMode='contain' style={{ width: 100, height: 100, alignSelf: 'center', margin: 15 }} source={require('../image/Avatar1.png')} />
                <Image resizeMode='contain' style={{ width: 30, height: 30, zIndex: 1, position: 'absolute', alignSelf: 'center', top: 75, right: 150 }} source={require('../image/pen.png')} />
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Deepak Pradhan</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 20 }}>

                <View style={{ flexDirection: 'row', backgroundColor: '#bdd9c8', width: '43%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', }}>My Wallet</Text>
                    <Image resizeMode='contain' style={{ width: 28, height: 28, marginLeft: 15 }} source={require('../image/wallet2.png')} />
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: '#ffb8ba', width: '43%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', }}>Complete KYC</Text>
                    <Image resizeMode='contain' style={{ width: 30, height: 30, marginLeft: 10 }} source={require('../image/kyc.png')} />
                </View>
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 30 }}>Earning Details</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%', alignSelf: 'center' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#89bf9e', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>

                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/cash.png')} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', width: 100, marginLeft: 15 }}>Cash Won 0</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'blue', width: 100, justifyContent: 'center', borderRadius: 15, height: 30, left: 15, alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>2 New</Text>
                        <Image resizeMode='contain' style={{ width: 18, height: 18, alignSelf: 'center', }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 3, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 30 }}>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: "90%", marginTop: 30 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>

                            <Image resizeMode='contain' style={{ width: 35, height: 35 }} source={require('../image/Chaku.png')} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginLeft: 15, alignSelf: 'center' }}>Battle Played</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 15, left: 40 }}>

                        <Image resizeMode='contain' style={{ width: 18, height: 18, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 3, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 30 }}>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, width: '90%', alignSelf: 'center' }}>

                    <View style={{ flexDirection: 'row', left: 10 }}>
                        <View style={{ backgroundColor: '#bdd9c8', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>

                            <Image resizeMode='contain' style={{ width: 35, height: 35 }} source={require('../image/bonus.png')} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', width: 120, marginLeft: 15 }}>Referral Earning 0</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#f95c2b', width: 130, justifyContent: 'center', borderRadius: 15, height: 30, alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>actions Needs</Text>
                        <Image resizeMode='contain' style={{ width: 18, height: 18, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', top: 15 }}>
                        <Text style={{ color: 'red', fontSize: 25, alignItems: 'center' }}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

export default Profile;
