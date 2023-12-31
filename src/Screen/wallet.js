import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import HeaderBar from '../component/HeaderBar';
const wellet = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <HeaderBar navigation={navigation} />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

                <View style={{ backgroundColor: '#bdd9c8', width: '90%', alignSelf: 'center', overflow: 'hidden', borderRadius: 10, margin: 10, }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, margin: 10 }}>
                        <View>

                            <Text style={{ color: '#000000', fontSize: 26,fontFamily:'JosefinSans-Bold'}}>₹200</Text>
                            <Text style={{ color: '#000000', fontSize: 23,fontFamily:'JosefinSans-Bold'}}>DEPOSIT CASH</Text>
                        </View>
                        <Image resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/wallet2.png')} />
                    </View>
                    <Text style={{ color: '#000000', fontSize: 16,fontFamily:'JosefinSans-SemiBold', margin: 10, padding: 10 }}>Can be used to play Tournaments & Battles.
                        Cannot be withdrawn to Paytm or Bank.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddPayment')} style={{ backgroundColor: '#89bf9e', padding: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 25,fontFamily:'JosefinSans-Bold',bottom:2, textAlign: 'center' }}>ADD CASH</Text>
                        {/* <Text style={{ fontSize: 30, }}>+</Text> */}
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#bdd9c8', width: '90%', alignSelf: 'center', overflow: 'hidden', borderRadius: 10, margin: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, margin: 10 }}>
                        <View>
                            <Text style={{ color: '#000000', fontSize: 26,fontFamily:'JosefinSans-Bold' }}>₹200</Text>
                            <Text style={{ color: '#000000', fontSize: 23,fontFamily:'JosefinSans-Bold'}}>WINNING CASH</Text>
                        </View>
                        <Image resizeMode='contain' style={{ width: 30, height: 30, alignSelf: 'center' }} source={require('../image/wallet2.png')} />
                    </View>
                    <Text style={{ color: '#000000', fontSize: 16,fontFamily:'JosefinSans-SemiBold', margin: 10, padding: 10 }}>Can be used to play Tournaments & Battles.
                        Cannot be withdrawn to Paytm or Bank.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Withdraw')} style={{ backgroundColor: '#d73a3f', padding: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 25,fontFamily:'JosefinSans-Bold',bottom:2, textAlign: 'center' }}>WITHDRAW</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')} style={{ flexDirection: 'row', justifyContent: 'space-between', width: "90%", backgroundColor: '#36090c', alignSelf: 'center', margin: 10, padding: 10, borderRadius: 10 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 30, height: 30 }} source={require('../image/wallclock.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 18,fontFamily:'JosefinSans-Bold',bottom:2.5, alignSelf: 'center', left: 20 }}>Recent transactions</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 15 }}>

                        <Image resizeMode='contain' style={{ width: 18, height: 18, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('GameHistory')} style={{ flexDirection: 'row', justifyContent: 'space-between', width: "90%", backgroundColor: '#36090c', alignSelf: 'center', margin: 10, padding: 10, borderRadius: 10 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 30, height: 30 }} source={require('../image/wallet.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 18,fontFamily:'JosefinSans-Bold',bottom:2.5,alignSelf: 'center', left: 20 }}>My winnings</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 15 }}>

                        <Image resizeMode='contain' style={{ width: 18, height: 18, alignSelf: 'center' }} source={require('../image/rightarrow.png')} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default wellet;
