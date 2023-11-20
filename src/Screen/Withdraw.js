import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';

const Withdraw = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [Show1, setShow1] = useState(false);
    const [Show2, setShow2] = useState(false);
    const [Show3, setShow3] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const openModal1 = () => {
        setModalVisible1(true);
    };
    const closeModal1 = () => {
        setModalVisible1(false);
    };
    const openModal2 = () => {
        setModalVisible2(true);
    };
    const closeModal2 = () => {
        setModalVisible2(false);
    };



    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Withdraw</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>Select a method</Text>
            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-around', margin: 15 }}>
                <TouchableOpacity onPress={() => {
                    setShow1(true),
                        setShow2(false),
                        setShow3(false)
                }} style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10 }}>

                    <Image resizeMode='contain' style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('../image/paytm.png')} />
                    <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Paytm Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setShow1(false),
                        setShow2(true),
                        setShow3(false)
                }} style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10 }}>

                    <Image resizeMode='contain' style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('../image/UPI.png')} />
                    <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>BHIM UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setShow1(false),
                        setShow2(false),
                        setShow3(true)
                }} style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10 }}>

                    <Image resizeMode='contain' style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('../image/banktresfer.png')} />
                    <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }}>Bank Tresfer</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {Show1 == true
                    ?
                    <View style={{ width: '90%', alignSelf: 'center' }}>

                        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', }}>Account Detalis </Text>
                        <TextInput
                            placeholder="Paytm Beneficiary"
                            placeholderTextColor={'#FFFFFF'}
                            style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                        />
                        <TextInput
                            placeholder="Paytm Number"
                            placeholderTextColor={'#FFFFFF'}
                            style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                        />
                        <TouchableOpacity onPress={openModal} style={{ backgroundColor: 'red', alignItems: 'center', padding: 10, borderRadius: 10, width: '60%', alignSelf: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
                                Add Account
                            </Text>
                        </TouchableOpacity>
                        <Modal
                            visible={isModalVisible}
                            transparent={true}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                                    <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Enter Paytm Number</Text>
                                    <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal} >
                                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View> :
                    Show2 == true ?

                        <View style={{ width: '90%', alignSelf: 'center' }}>

                            <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', }}>Account Detalis </Text>
                            <TextInput
                                placeholder="Account Holder Name"
                                placeholderTextColor={'#FFFFFF'}
                                style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                            />
                            <TextInput
                                placeholder="UPI Address"
                                placeholderTextColor={'#FFFFFF'}
                                style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                            />
                            <TouchableOpacity onPress={openModal1} style={{ backgroundColor: 'red', alignItems: 'center', padding: 10, borderRadius: 10, width: '60%', alignSelf: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
                                    Add Account
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                visible={isModalVisible1}
                                transparent={true}
                            >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                    <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                                        <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Enter UPI Address to link</Text>
                                        <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal1} >
                                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View> :
                        Show3 == true ?

                            <View style={{ width: '90%', alignSelf: 'center' }}>

                                <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', }}>Account Detalis </Text>
                                <TextInput
                                    placeholder="Account Holder's Name"
                                    placeholderTextColor={'#FFFFFF'}
                                    style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                                />
                                <TextInput
                                    placeholder="Bank Account Number"
                                    placeholderTextColor={'#FFFFFF'}
                                    style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                                />
                                <TextInput
                                    placeholder=" Bank IFSC Code"
                                    placeholderTextColor={'#FFFFFF'}
                                    style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                                />
                                <TextInput
                                    placeholder="Bank Name"
                                    placeholderTextColor={'#FFFFFF'}
                                    style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                                />
                                <TextInput
                                    placeholder="Address"
                                    placeholderTextColor={'#FFFFFF'}
                                    style={{ borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 16, borderRadius: 10, color: '#FFFFFF' }}
                                />
                                <TouchableOpacity onPress={openModal2} style={{ backgroundColor: 'red', alignItems: 'center', padding: 10, borderRadius: 10, width: '60%', alignSelf: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
                                        Add Account
                                    </Text>
                                </TouchableOpacity>
                                <Modal
                                    visible={isModalVisible2}
                                    transparent={true}
                                >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                                            <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Enter Bank Name</Text>
                                            <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal2} >
                                                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            </View> : null
                }
                <View style={{ width: '100%', height: 2, backgroundColor: 'red' ,marginTop:15}}></View>
                <View style={{margin:10}}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18,opacity:0.7 }}>Already linked accounts</Text>
                </View>
                <View style={{alignSelf:'center',marginTop:15}}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18}}>No Account Linked</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Withdraw;
