import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const PayPament = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Pay Payment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{width:'95%',alignSelf:'center',margin:10}}>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/paytm.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                Paytm UPI
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/Goolepay.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                Google Pay
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/visa.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                VISA Pay
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/amazon.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                Amazon Pay
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/paypal.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                paypal Pay
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding:10, backgroundColor: '#36090c', margin: 10, borderRadius: 15, borderWidth: 0.5, borderColor: 'red' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../image/provider.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', left: 20 }}>
                                Netbanking
                            </Text>
                        </View>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CardAdd')} style={{ backgroundColor: 'red', width: '80%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default PayPament;
