import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const PayPament = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' }}>Pay Payment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#36090c', margin: 15, borderRadius: 15, borderWidth: 1, borderColor: 'red' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={require('../image/paytm.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', left: 20 }}>
                            Paytm UPI
                        </Text>
                    </View>
                    <Image resizeMode='cover' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#36090c', margin: 15, borderRadius: 15, borderWidth: 1, borderColor: 'red' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={require('../image/Goolepay.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', left: 20 }}>
                            Google Pay
                        </Text>
                    </View>
                    <Image resizeMode='cover' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#36090c', margin: 15, borderRadius: 15, borderWidth: 1, borderColor: 'red' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={require('../image/visa.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', left: 20 }}>
                           VISA Pay 
                        </Text>
                    </View>
                    <Image resizeMode='cover' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#36090c', margin: 15, borderRadius: 15, borderWidth: 1, borderColor: 'red' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={require('../image/Amzon.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', left: 20 }}>
                        amazon Pay 
                        </Text>
                    </View>
                    <Image resizeMode='cover' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate('CardAdd')} style={{backgroundColor:'red',width:'80%',alignSelf:'center',height:50,justifyContent:'center',borderRadius:20}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold',textAlign:'center' }}>
                Add
            </Text>
            </TouchableOpacity>
        </View>
    );
}

export default PayPament;
