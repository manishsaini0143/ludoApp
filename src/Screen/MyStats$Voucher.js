import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, TextInput } from 'react-native';

const MyStats$Voucher = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);


    const openModa = () => {
        setModalVisible(true);
    };

    const closeModa = () => {
        setModalVisible(false);
    };
    const data = [
        {
            key: '1',
            image: require('../image/ludo1.png'),
            image1: require('../image/ludo2.png'),
            id: 'Contests',
            number: '0',
            wins: 'wins',
            point1: '0',
            loes: 'Losses',
            point2: '0'
        },
        {
            key: '1',
            image: require('../image/ludo2.png'),
            image1: require('../image/ludo3.png'),
            id: 'Contests',
            number: '0',
            wins: 'wins',
            point1: '0',
            loes: 'Losses',
            point2: '0'
        },
        {
            key: '1',
            image: require('../image/ludo1.png'),
            image1: require('../image/ludo2.png'),
            id: 'Contests',
            number: '0',
            wins: 'wins',
            point1: '0',
            loes: 'Losses',
            point2: '0'
        }, {
            key: '1',
            image: require('../image/ludo2.png'),
            image1: require('../image/ludo3.png'),
            id: 'Contests',
            number: '0',
            wins: 'wins',
            point1: '0',
            loes: 'Losses',
            point2: '0'
        },
    ];
    const renderItem1 = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#36090c', width: '45%', margin: 10, borderRadius: 10 }}>
                <Image resizeMode='cover' style={{ width: 100, height: 100, alignSelf: 'center', margin: 10 }} source={item.image} />
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{item.id}</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{item.number}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>

                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{item.wins}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: 'green' }}>{item.point1}</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{item.loes}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: 'red' }}>{item.point2}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#36090c', width: '45%', margin: 10, borderRadius: 10 }}>
                <Image resizeMode='cover' style={{ width: 100, height: 100, alignSelf: 'center', margin: 10 }} source={item.image1} />
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{item.id}</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{item.number}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>

                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{item.wins}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: 'green' }}>{item.point1}</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{item.loes}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: 'red' }}>{item.point2}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );

    return (
        <View style={{ backgroundColor: '#711e21', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>My Stats $ Voucher</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>

                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>

            <FlatList data={data} renderItem={renderItem1} />
            <TouchableOpacity onPress={openModa} style={{ backgroundColor: 'red', width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>
                    REDEEM VOUCHER
                </Text>
            </TouchableOpacity>
            <Modal
                visible={isModalVisible}
                // animationType="slide"
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: 300 }}>
                        <View style={{ width: 210, alignSelf: 'center' }}>

                            <Text style={{ alignSelf: 'center', color: '#000000', fontWeight: 'bold', fontSize: 22, margin: 5 }}>Redeem Voucher</Text>
                        </View>
                        <View style={{ margin: 5, borderWidth: 2, borderRadius: 10 }}>
                            <TextInput style={{ height: 40, left: 5, width: '70%', fontSize: 16, fontWeight: 'bold' }} placeholder='Enter Voucher Number' placeholderTextColor={'#000000'} />
                        </View>
                        <View style={{ margin: 5, borderWidth: 2, borderRadius: 10 }}>
                            <TextInput style={{ height: 40, left: 5, width: '70%', fontSize: 16, fontWeight: 'bold', }} placeholder='Enter Voucher Pin' placeholderTextColor={'#000000'} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>

                            <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 40, justifyContent: 'center' }} onPress={closeModa} >
                                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity disabled style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 100, alignSelf: 'center', height: 40, justifyContent: 'center' }} onPress={closeModa} >
                                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default MyStats$Voucher;
