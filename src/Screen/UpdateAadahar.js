import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

const UpdateAadhar = ({ navigation }) => {
    const [otp1, setOTP1] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [otpInputVisible, setOtpInputVisible] = useState(false); // State to control OTP input visibility //

    const handleUpdate = () => {
        if (!aadharNumber) {
            setModalMessage('Please enter your Aadhar number.');
            setModalVisible(true);
        } else if (aadharNumber.length !== 12) {
            setModalMessage('Please enter a valid 12-digit Aadhar number.');
            setModalVisible(true);
        } else {
            // Aadhar number is valid, show OTP input view2 //
            setOtpInputVisible(true);
        }
    };

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Update Aadhar</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }}>Please provide your Aadhar number.</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }}>We will send an OTP on the mobile number that is linked</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }}>with Aadhar Card.</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: '85%', alignSelf: 'center', borderRadius: 10, marginTop: 20 }}>
                    <TextInput
                        maxLength={12}
                        style={{ left: 10, width: '75%', fontSize: 20, letterSpacing:2,fontWeight:'bold'}}
                        placeholder='Aadhar Number'
                        placeholderTextColor={'#000000'}
                        keyboardType="numeric"
                        value={aadharNumber}
                        onChangeText={(text) => setAadharNumber(text)}
                    />
                </View>
                {otpInputVisible ? (
                    <View style={{ marginTop: 20 }}>
                        <View style={{ width: '100%', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>We have sent OTP on the mobile number linked with Aadhar.</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Please provide OTP to verify Aadhar..</Text>

                        </View>
                        <OtpInputs
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            inputStyles={{ borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', width: 40, height: 40, fontSize: 20, color: '#000000', backgroundColor: '#FFFFFF', fontWeight: 'bold', margin: 10, textAlign: 'center' }}
                            numberOfInputs={6}
                            value={otp1}
                            onChange={(otp) => setOTP1(otp)}
                        />
                    </View>
                ) : null}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        alignItems: 'center',
                        height: 50,
                        justifyContent: 'center',
                        borderRadius: 10,
                        width: '70%',
                        alignSelf: 'center',
                        marginTop: 20,
                    }}
                    onPress={handleUpdate}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' }}>
                        {otpInputVisible ? 'SUBMIT' : 'Update'}
                    </Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 20, borderRadius: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{modalMessage}</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={{
                                    marginTop: 10,
                                    backgroundColor: 'red',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    padding: 10,
                                    width: 100,
                                    alignSelf: 'center',
                                }}
                            >
                                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default UpdateAadhar;
