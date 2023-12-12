import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Paytmwallets = ({ navigation }) => {
    const [selectedWallet, setSelectedWallet] = useState(null);
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 10 }} source={require('../image/backarrow.png')} />
            </TouchableOpacity>
            <View style={{ backgroundColor: '#C54C4C', borderRadius: 10,}}>
                <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 20,margin:10,fontWeight:'bold'}}>
                    Wallets
                </Text>

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderColor: selectedWallet == 'Paytm' ? 'red' : '#FFFFFF',
                            borderWidth: selectedWallet == 'Paytm' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setSelectedWallet('Paytm')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center' }} source={require('../image/paytm.png')} />
                        <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Paytm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: selectedWallet == 'Mobikwik' ? 'red' : '#FFFFFF',
                            borderWidth: selectedWallet == 'Mobikwik' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setSelectedWallet('Mobikwik')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/Mobick.jpg')} />
                        <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Mobikwik</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: selectedWallet == 'Airtel' ? 'red' : '#FFFFFF',
                            borderWidth: selectedWallet == 'Airtel' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setSelectedWallet('Airtel')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/Airtal.jpg')} />
                        <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Airtel</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'red', width: '50%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20, margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        Pay ₹200
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Paytmwallets;
