import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const ProfileUpdate = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [gender, setGender] = useState('');

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const openModal2 = () => {
        setModalVisible1(true);
    };
    const closeModal2 = () => {
        setModalVisible1(false);
    };
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22,fontFamily:'JosefinSans-Bold',bottom:5}}>Profile Update</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <TouchableOpacity>
                    <Image resizeMode='cover' style={{ width: 100, height: 100 }} source={require('../image/Avatar1.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 16,fontFamily:'JosefinSans-SemiBold', alignSelf: 'center', top: 10 }}>Click Above</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openModal} style={{ backgroundColor: 'blue', width: 95, alignSelf: 'center', borderRadius: 10, height: 40, borderWidth: 1, borderColor: '#FFFFFF', justifyContent: 'center' }} >
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFFFFF', fontFamily:'JosefinSans-Bold' }}>
                        UPLOAD
                    </Text>
                </TouchableOpacity>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                            <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Please select a profile image first!</Text>
                            <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal} >
                                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput style={{ color: '#000000', width: '90%', fontSize: 16, letterSpacing: 2, left: 5, fontFamily: 'JosefinSans-Bold', }} keyboardType='name-type' placeholder='User Name' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput style={{ color: '#000000', width: '90%', fontSize: 16, letterSpacing: 2, left: 5, fontFamily: 'JosefinSans-Bold', }} keyboardType='name-type' placeholder='State' placeholderTextColor='#B3B1B1' />
                </View>
                <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row', height: 50, alignSelf: 'center', margin: 10 }} >
                    <TextInput style={{ color: '#000000', width: '90%', fontSize: 16, letterSpacing: 2, left: 5,fontFamily:'JosefinSans-Bold',}} keyboardType='name-type' placeholder='Country' placeholderTextColor='#B3B1B1' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, left: 15, top: 7,fontFamily:'JosefinSans-SemiBold' }}>Gender</Text>
                    <RadioForm formHorizontal={true} animation={true}>
                        <RadioButton style={{ margin: 15 }} labelHorizontal={true}>
                            <RadioButtonInput
                                obj={{ label: 'Female', value: 'female' }}
                                index={0}
                                isSelected={gender === 'female'}
                                onPress={() => setGender('female')}
                                borderWidth={5}
                                buttonInnerColor={'#FE0000'}
                                buttonOuterColor={gender === 'female' ? '#FE0000' : '#FFFFFF'}
                            />
                            <RadioButtonLabel
                                obj={{ label: 'Female', value: 'female' }}
                                index={0}
                                labelStyle={{ fontSize: 18, color: '#FFFFFF', left: 10,fontFamily:'JosefinSans-Bold' }}
                                onPress={() => setGender('female')}
                            />
                        </RadioButton>
                        <RadioButton style={{ margin: 15 }} labelHorizontal={true}>
                            <RadioButtonInput
                                obj={{ label: 'Male', value: 'male' }}
                                index={1}
                                isSelected={gender === 'male'}
                                onPress={() => setGender('male')}
                                borderWidth={5}
                                buttonInnerColor={'#FE0000'}
                                buttonOuterColor={gender === 'male' ? '#FE0000' : '#FFFFFF'}
                            />
                            <RadioButtonLabel
                                obj={{ label: 'Male', value: 'male' }}
                                index={1}
                                labelStyle={{ fontSize: 18, color: '#FFFFFF', left: 10,fontFamily:'JosefinSans-Bold'}}
                                onPress={() => setGender('male')}
                            />
                        </RadioButton>
                        <RadioButton style={{ margin: 15 }} labelHorizontal={true}>
                            <RadioButtonInput
                                obj={{ label: 'Other', value: 'Other' }}
                                index={2}
                                isSelected={gender === 'Other'}
                                onPress={() => setGender('Other')}
                                borderWidth={5}
                                buttonInnerColor={'#FE0000'}
                                buttonOuterColor={gender === 'Other' ? '#FE0000' : '#FFFFFF'}
                            />
                            <RadioButtonLabel
                                obj={{ label: 'Other', value: 'Other' }}
                                index={2}
                                labelStyle={{ fontSize: 18, color: '#FFFFFF', left: 10,fontFamily:'JosefinSans-Bold'}}
                                onPress={() => setGender('Other')}
                            />
                        </RadioButton>
                    </RadioForm>
                </View>
            </View>
            <TouchableOpacity onPress={openModal2} style={{ backgroundColor: '#FE0000', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: '70%', alignSelf: 'center', margin: 15 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20,fontFamily:'JosefinSans-Bold' }}>UPDATE</Text>
            </TouchableOpacity>
            <Modal
                visible={isModalVisible1}
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                        <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Profile Update Unsuccessful!</Text>
                        <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal2} >
                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default ProfileUpdate;
