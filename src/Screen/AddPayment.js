import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const AddPayment = ({ navigation }) => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelection = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const isAmountSelected = (amount) => {
        return selectedAmount === amount;
    };

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20,fontFamily:'JosefinSans-Bold',bottom:2.5 }}>Add Payment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', margin: 5, top: 8, left: 15 }}>Select Amount</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%', alignSelf: 'center', margin: 10 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(100) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(100)}
                    >
                        <Text style={{ color: isAmountSelected(100) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(300) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(300)}
                    >
                        <Text style={{ color: isAmountSelected(300) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(500) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(500)}
                    >
                        <Text style={{ color: isAmountSelected(500) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>500</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%', alignSelf: 'center', margin: 10 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(1000) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(1000)}
                    >
                        <Text style={{ color: isAmountSelected(1000) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(1500) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(1500)}
                    >
                        <Text style={{ color: isAmountSelected(1500) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>1500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(5000) ? 'red' : '#FFFFFF',
                            height: 45,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(5000)}
                    >
                        <Text style={{ color: isAmountSelected(5000) ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: 'bold' }}>5000</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10, left: 25, top: 10 }}>
                Enter a different amount
            </Text>
            <View style={{ margin: 10, borderRadius: 10, width: '80%', flexDirection: 'row', height: 50, alignSelf: 'center', borderWidth: 1, borderColor: "red" }}>
                <TextInput
                    style={{
                        fontFamily:'JosefinSans-Bold',bottom:2.5,
                        color: '#000000',
                        fontSize: 20,
                        letterSpacing: 2,
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        textAlign: 'center',
                        borderRadius: 10,
                    }}
                    keyboardType='number-pad'
                    placeholder='Enter Amount'
                    placeholderTextColor='#000000'

                    value={selectedAmount !== null ? selectedAmount.toString() : customAmount}
                    onChangeText={(text) => {
                        setSelectedAmount(null);
                        setCustomAmount(text);
                    }}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PayPament')} style={{ backgroundColor: 'red', width: '80%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20, top: 70 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20,fontFamily:'JosefinSans-Bold', textAlign: 'center',bottom:2.5 }}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddPayment;
