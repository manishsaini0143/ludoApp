import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

const Loginotp = ({ navigation }) => {
    const [otp, setOTP] = useState('');

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Image resizeMode='cover' style={{ width: 116, height: 116, }} source={require('../image/Login.png')} />
                <TouchableOpacity style={{ backgroundColor: '#DD0000', width: 100, height: 35, alignItems: 'center', borderRadius: 10, top: 35 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, lineHeight: 35 }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 40, margin: 10 }}>Enter OTP code</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 10 }}>One time password (OTP) has been sent
to your mobile number</Text>
      </View>
            <View style={{ width: '85%', height: 150, alignSelf: 'center' }}>
                <OtpInputs
                    inputStyles={{ borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', width: 50, height: 50, fontSize: 30, textAlign: 'center', color: '#000000', backgroundColor: '#FFFFFF',lineHeight:30,fontWeight:'bold' }}
                    otp={(code) => { setOTP(code) }}
                    numberOfInputs={6}
                />
            </View>
            <TouchableOpacity style={{ alignItems: 'center', borderBottomWidth: 1, borderColor: '#FFFFFF', height: 40, width: 150, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 25 }}>Resend OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')} style={{ backgroundColor: '#FE0000', height: 65, alignItems: 'center', justifyContent: 'center', margin: 30, borderRadius: 10, width: '85%' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 25, }}>VERIFY</Text>
            </TouchableOpacity>
           
        </View>
    );
}

export default Loginotp;
