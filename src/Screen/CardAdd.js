import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CardAdd = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '95%', alignSelf: 'center' }}>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, borderWidth: 0.7, borderColor: 'red', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('../image/Debitcard.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Debit Card</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>All Credit Cards Accepted</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center', }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Creditcard1')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, borderWidth: 0.7, borderColor: 'red', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('../image/Creditcard.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Credit Card</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>All Credit Cards Accepted</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, borderWidth: 0.7, borderColor: 'red', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('../image/NetBanking.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Net Banking</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>All Credit Cards Accepted</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, borderWidth: 0.7, borderColor: 'red', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('../image/PaytmWallets.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Paytm & Wallets</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>Over 7 Wallets</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 15, borderWidth: 0.7, borderColor: 'red', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('../image/UPI.png')} />
                        </View>
                        <View style={{ left: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>UPi</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', }}>Unified payments Interface</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'red', width: '80%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20, top: 30 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    Cancel Trasaction
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default CardAdd;
