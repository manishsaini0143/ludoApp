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
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' }}>Add Payment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Select Amount</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(100) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(100)}
                    >
                        <Text style={{ color: isAmountSelected(100) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(300) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(300)}
                    >
                        <Text style={{ color: isAmountSelected(300) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(500) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(500)}
                    >
                        <Text style={{ color: isAmountSelected(500) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>500</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(1000) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(1000)}
                    >
                        <Text style={{ color: isAmountSelected(1000) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(1500) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(1500)}
                    >
                        <Text style={{ color: isAmountSelected(1500) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>1500</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: isAmountSelected(5000) ? 'red' : '#FFFFFF',
                            height: 50,
                            width: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'red',
                        }}
                        onPress={() => handleAmountSelection(5000)}
                    >
                        <Text style={{ color: isAmountSelected(5000) ? '#FFFFFF' : '#000000', fontSize: 22, fontWeight: 'bold' }}>5000</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', margin: 15, left: 20 }}>
                Enter a different amount
            </Text>
            <View style={{ margin: 10, borderRadius: 10, width: '80%', flexDirection: 'row', height: 60, alignSelf: 'center', borderWidth: 1, borderColor: "red" }}>
                <TextInput
                    style={{
                        fontWeight: 'bold',
                        color: '#000000',
                        fontSize: 22,
                        letterSpacing: 3,
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
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddPayment;
