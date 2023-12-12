import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

const NwtBanking = ({ navigation }) => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Axis Bank', },
        { key: '2', value: 'ICICI BAnk' },
        { key: '3', value: 'SBI Bank' },
        { key: '4', value: 'UCI Bank', },
        { key: '5', value: 'HDFC Bank' },
        { key: '6', value: 'AU Small bank' },
        { key: '7', value: 'Kotak Manhindra Bank' },
    ]
    const [borrdercolor, setborrdercolor] = useState(null);
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 10 }} source={require('../image/backarrow.png')} />
            </TouchableOpacity>
            <View style={{ backgroundColor: '#C54C4C', borderRadius: 10, }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 20, margin: 10, fontWeight: 'bold' }}>
                    Net Banking
                </Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderColor: borrdercolor == 'Paytm' ? 'red' : '#FFFFFF',
                            borderWidth: borrdercolor == 'Paytm' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborrdercolor('Paytm')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center' }} source={require('../image/Axisbank.jpg')} />
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Axis bank </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: borrdercolor == 'Mobikwik' ? 'red' : '#FFFFFF',
                            borderWidth: borrdercolor == 'Mobikwik' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborrdercolor('Mobikwik')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/cici.jpg')} />
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>ICICI bank</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: borrdercolor == 'Phone' ? 'red' : '#FFFFFF',
                            borderWidth: borrdercolor == 'Phone' ? 1 : 0,
                            borderColor: 'red',
                            padding: 10,
                            borderRadius: 10,
                            width: '25%',
                            margin: 10,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={() => setborrdercolor('Phone')}
                    >
                        <Image resizeMode='contain' style={{ width: 60, height: 60, alignSelf: 'center', borderRadius: 30 }} source={require('../image/State.jpg')} />
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>State bank</Text>
                    </TouchableOpacity>
                </View>
                <SelectList
              
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                />
                <TouchableOpacity style={{ backgroundColor: 'red', width: '50%', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 20, margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        Pay ₹200
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NwtBanking;
