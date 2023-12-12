import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const UPIpayments = ({ navigation }) => {
    const [borcolor, setborcolor] = useState(null);
    const [showQRModal, setShowQRModal] = useState(false);
    const openQRModal = () => {
        setShowQRModal(true);
    };

    const closeQRModal = () => {
        setShowQRModal(false);
    };
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 10 }} source={require('../image/backarrow.png')} />
            </TouchableOpacity>
            <View style={{ backgroundColor: '#C54C4C', borderRadius: 10, }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 20, margin: 10, fontWeight: 'bold' }}>
                    UPI
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ alignSelf: 'center' }}>
                            <Image resizeMode='cover' style={{ width: 27, height: 27, }} source={require('../image/UPI.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>PAY USING</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>You will be redirectedto your UPI app</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderColor: borcolor == 'Paytm' ? 'red' : '#FFFFFF',
                            borderWidth: borcolor == 'Paytm' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborcolor('Paytm')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center' }} source={require('../image/goleapy.jpg')} />
                        <Text style={{ fontSize: 12, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Google Pay</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: borcolor == 'Mobikwik' ? 'red' : '#FFFFFF',
                            borderWidth: borcolor == 'Mobikwik' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborcolor('Mobikwik')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/paytm.png')} />
                        <Text style={{ fontSize: 12, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Paytm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: borcolor == 'Phone' ? 'red' : '#FFFFFF',
                            borderWidth: borcolor == 'Phone' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborcolor('Phone')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/phonpay.png')} />
                        <Text style={{ fontSize: 12, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Phone Pay</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={openQRModal} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, margin: 10, borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ alignSelf: 'center' }}>
                            <Image resizeMode='cover' style={{ width: 35, height: 35, }} source={require('../image/QR.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>SHOW UPI QR</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>You can scan UPI QR code and pay</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', width: '50%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20, margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        Pay ₹200
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={showQRModal}
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 350 }}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, alignSelf: 'center', margin: 10 }} source={require('../image/Qrcode.png')} />
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, alignSelf: 'center', margin: 10 }}>Scan the QR code on any UPI Application</Text>
                        <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', width: '100%', padding: 10 }} onPress={closeQRModal} >
                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>

    );
}

export default UPIpayments;
