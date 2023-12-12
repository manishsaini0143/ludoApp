import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

const Loginotp = ({ navigation }) => {
    const [otp, setOTP] = useState('');

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Image resizeMode='cover' style={{ width: 116, height: 116, }} source={require('../image/Login.png')} />
                <TouchableOpacity style={{ backgroundColor: '#DD0000', width: 100, height: 35, borderRadius: 10, top: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5 }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 40, margin: 10, fontFamily: 'JosefinSans-Bold' }}>Enter OTP code</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 10, fontFamily: 'JosefinSans-SemiBold' }}>One time password (OTP) has been sent
                    to your mobile number</Text>
            </View>
            <View style={{ width: '85%', height: 150, alignSelf: 'center' }}>
                <OtpInputs
                    inputStyles={{ borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', width: 45, height: 45, fontSize: 24, color: '#000000', backgroundColor: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', lineHeight: 27 }}
                    otp={(code) => { setOTP(code) }}
                    numberOfInputs={6}
                />
            </View>
            <TouchableOpacity style={{ alignItems: 'center', borderBottomWidth: 1, borderColor: '#FFFFFF', height: 40, width: 130, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'JosefinSans-Bold' }}>Resend OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')} style={{ backgroundColor: '#FE0000', height: 60, alignItems: 'center', justifyContent: 'center', margin: 30, borderRadius: 10, width: '85%' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-Bold' }}>VERIFY</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Loginotp;
