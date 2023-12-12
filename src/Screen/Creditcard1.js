import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';


const Creditcard1 = ({ navigation }) => {
    const [cardData, setCardData] = useState({});

    const handleCreditCardInput = (formData) => {
        setCardData(formData);
    }
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 10 }} source={require('../image/backarrow.png')} />
            </TouchableOpacity>
            <CreditCardInput onChange={handleCreditCardInput} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 20, marginLeft: 20 }}>
                Entered Credit Card Data:
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 20 }}>
                Number: {cardData.number}
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 20 }}>
                Expiry: {cardData.expiry}
            </Text>
        </View>
    );
}

export default Creditcard1;
