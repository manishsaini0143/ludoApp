import React from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';

const InviteFriends = ({ navigation }) => {
    const inviteCode = 'Inwnwsry'; // Replace this with your actual invite code

    const onWhatsappInvite = () => {
        // Implement the logic to open WhatsApp and share the invite message
        // You can use a third-party library like react-native-share for more customization
        // For simplicity, let's just show an alert for now
        alert('Opening WhatsApp for invitation...');
    };

    const onMoreSharingOptions = () => {
        // Use the Share API to open the system's native sharing options
        Share.share({
            message: `Join me on this app! Use my invite code: ${inviteCode}`,
        });
    };

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Invite Friends</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '80%', margin: 10, alignSelf: 'center' }}>
                <Image resizeMode='cover' style={{ width: 120, height: 120, margin: 5 }} source={require('../image/refer2.png')} />
                <View style={{ width: 200, alignSelf: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Refer Friends and earn 5 Coins for each referral</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', margin: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Your Invite Code is</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>{inviteCode}</Text>
            </View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'green',
                    padding: 10,
                    width: '70%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    margin: 10,
                }}
                onPress={onWhatsappInvite}
            >
                <Image resizeMode='cover' style={{ width: 30, height: 30, margin: 5 }} source={require('../image/invite.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 18, left: 10 }}>INVITE VIA WHATSAPP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'red',
                    padding: 10,
                    width: '70%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    margin: 10,
                }}
                onPress={onMoreSharingOptions}
            >
                <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/share.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 18, left: 5 }}>MORE SHARING OPTIONS</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', left: 20, margin: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', margin: 5 }}>Total friends joined </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Myreferrals')} style={{ backgroundColor: 'red', width: 90, alignItems: 'center', height: 40, justifyContent: 'center', borderRadius: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }}>
                        VIEW
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InviteFriends;
