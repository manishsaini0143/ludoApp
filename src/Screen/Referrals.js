import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Referrals = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Referrals</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{paddingBottom:30}}>

            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 45, fontWeight: 'bold', textAlign: 'center' }}>REFFR & EARN</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                    <Image resizeMode='cover' style={{ width: 90, height: 90 }} source={require('../image/collaboration.png')} />
                    <Image resizeMode='contain' style={{ width: 90, height: 90 }} source={require('../image/refer.png')} />
                </View>
            </View>
            <View style={{ width: 300, alignSelf: 'center', margin: 15, backgroundColor: 'blue', borderRadius: 10 }}>
                <Text style={{ fontSize: 23, color: '#FFFFFF', textAlign: 'center' }}>
                    Get Refferal conis Directly in Your DEPOSIT wallet
                </Text>
            </View>
            <View style={{ width: 300, alignSelf: 'center', margin: 15, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'center' }}>
                    For Every Refferal Friend Who Add Some Amount in his/her DEPOSIT you will also get 2% of that amounnt directly in Your DOPOSIT Wallet for LIFETIME
                </Text>
            </View>
            <View style={{ width: 220, alignSelf: 'center', margin: 15, backgroundColor: 'blue', borderRadius: 10 }}>
                <Text style={{ fontSize: 23, color: '#FFFFFF', textAlign: 'center' }}>
                    FOR EXAMPLE
                </Text>
            </View>
            <View style={{ width: 300, alignSelf: 'center', margin: 15, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'center' }}>
                    if Your 10 Refferal friends Add $1000 cach in his/her Deposit you will get 2% of $10,000 =$200 Directly in Your DEPOSIT Wallet
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>

                <Image resizeMode='contain' style={{ width: 90, height: 90 }} source={require('../image/refer1.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('InviteFriends')} style={{ backgroundColor: '#FE0000', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: '70%', alignSelf: 'center', margin: 15 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, }}>DONE</Text>
            </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

export default Referrals;
