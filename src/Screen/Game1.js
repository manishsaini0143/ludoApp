import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView, Modal } from 'react-native';
// import Swiper from 'react-native-swiper';
import Home from './Home';
import Drawer from '../navigation/Drawer';
import HeaderBar from '../component/HeaderBar';

const Game1 = ({ navigation }) => {
    const [isModalVisible1, setModalVisible1] = useState(false);

    const openModal2 = () => {
        setModalVisible1(true);
    };
    const closeModal2 = () => {
        setModalVisible1(false);
    };
    const data = [

        {
            key: '1',
            point: 'Points value',
            pointpize: 'Max Buying prize',
            money: ' ₹0.02',
            live: 'LIve',
            image: require('../image/usres.png'),
            userruk: '329',
            playmoney: ' ₹8.44',
            p: '2 P',
            p1: '2-6 P',
            image1: require('../image/eentry.png'),
            entry: ' Entry: ₹4.00',
            image2: require('../image/discount.png'),
            discount: 'Use 5% Bonus'

        },
        {
            key: '1',
            point: 'Points value',
            pointpize: 'Max Buying prize',
            money: ' ₹1.20',
            live: 'LIve',
            image: require('../image/usres.png'),
            userruk: '399',
            playmoney: ' ₹12.00',
            p: '2 P',
            p1: '2-6 P',
            image1: require('../image/eentry.png'),
            entry: ' Entry: ₹2.00',
            image2: require('../image/discount.png'),
            discount: 'Use 12% Bonus'

        },
        {
            key: '1',
            point: 'Points value',
            pointpize: 'Max Buying prize',
            money: ' ₹2.20',
            live: 'LIve',
            image: require('../image/usres.png'),
            userruk: '386',
            playmoney: ' ₹15.00',
            p: '2 P',
            p1: '2-6 P',
            image1: require('../image/eentry.png'),
            entry: ' Entry: ₹6.00',
            image2: require('../image/discount.png'),
            discount: 'Use 7% Bonus'

        },
        {
            key: '1',
            point: 'Points value',
            pointpize: 'Max Buying prize',
            money: ' ₹4.20',
            live: 'LIve',
            image: require('../image/usres.png'),
            userruk: '350',
            playmoney: ' ₹14.00',
            p: '2 P',
            p1: '2-6 P',
            image1: require('../image/eentry.png'),
            entry: ' Entry: ₹9.00',
            image2: require('../image/discount.png'),
            discount: 'Use 2% Bonus'

        },
        {
            key: '1',
            point: 'Points value',
            pointpize: 'Max Buying prize',
            money: ' ₹6.20',
            live: 'LIve',
            image: require('../image/usres.png'),
            userruk: '410',
            playmoney: ' ₹16.00',
            p: '2 P',
            p1: '2-6 P',
            image1: require('../image/eentry.png'),
            entry: ' Entry: ₹7.00',
            image2: require('../image/discount.png'),
            discount: 'Use 9% Bonus'

        },

    ];

    const renderItem0 = ({ item }) => (
        <View style={{ backgroundColor: '#CF6969', width: '90%', alignSelf: 'center', borderRadius: 10, margin: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Text style={{ color: '#2D242A', fontSize: 18, fontWeight: 'bold' }}>{item.point}</Text>
                <Text style={{ color: '#2D242A', fontSize: 18, fontWeight: 'bold' }}>{item.pointpize}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>{item.money}</Text>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'green', width: 10, height: 10, alignSelf: 'center', margin: 5, borderRadius: 30 }}></View>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>{item.live}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 17, height: 17, alignSelf: 'center', }} source={item.image} />
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', left: 5 }}>{item.userruk}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={openModal2} style={{ backgroundColor: 'red', width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 10, opacity: 0.8 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>{item.playmoney}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderWidth: 1, padding: 5, margin: 5, borderRadius: 7 }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>
                            {item.p}
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, padding: 5, margin: 5, borderRadius: 7 }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>
                            {item.p1}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image resizeMode='contain' style={{ width: 15, height: 15, alignSelf: 'center', margin: 2 }} source={item.image1} />
                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', alignSelf: 'center', margin: 2 }}>{item.entry}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image resizeMode='contain' style={{ width: 15, height: 15, alignSelf: 'center', margin: 2 }} source={item.image2} />
                    <Text style={{ color: 'red', fontSize: 14, fontWeight: 'bold', alignSelf: 'center', margin: 2 }}>{item.discount}</Text>
                </View>
            </View>
        </View>
    );
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Rummy Classic</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: 20, top: 10 }}>Create a Battle!</Text>
            </View>
            <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '85%', flexDirection: 'row', height: 60, alignSelf: 'center', margin: 10 }} >

                <TextInput maxLength={10} style={{ color: '#B3B1B1', width: '70%', fontSize: 20, letterSpacing: 2, marginLeft: 20 }} keyboardType='Number-type' placeholder='Amount' placeholderTextColor='#B3B1B1' />
                <TouchableOpacity>

                    <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20, left: 20 }} source={require('../image/amout.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20 }} source={require('../image/rummytable.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                    All Open Battles
                </Text>
            </View>
            <FlatList contentContainerStyle={{ paddingBottom: 20 }}
                data={data}
                renderItem={renderItem0}
            />
            <Modal
                visible={isModalVisible1}
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', top: 275 }}>
                    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, width: '100%' }}>
                        <Text style={{ alignSelf: 'center', padding: 5, color: '#000000', fontWeight: 'bold', fontSize: 18 }}>Confirm Buy-in</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, width: '40%', borderRadius: 10 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center' }}>2 Player</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, width: '40%', borderRadius: 10 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center' }}>4 Player</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View>
                                <Text style={{ color: '#000000', fontSize: 18 }}>Winning Amount</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>Entry Fee</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>Total Wallet Balance</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>Deposit + Winning</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>Bonus Coins</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#000000', fontSize: 18 }}>₹ 7.04</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>₹ 4.00</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>₹ 6.39</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>₹ 3.80</Text>
                                <Text style={{ color: '#000000', fontSize: 18 }}>₹ 0.20</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1 }}>
                            <TouchableOpacity onPress={closeModal2} style={{ width: '50%', padding: 10 }}>
                                <Text style={{ color: '#000000', fontSize: 18, textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '50%', backgroundColor: 'red', padding: 10 }}>
                                <Text style={{ color: '#000000', fontSize: 18, textAlign: 'center' }}>Play Now</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity style={{ backgroundColor: '#2b090a', alignItems: 'center', borderRadius: 10, width: 60, alignSelf: 'center', height: 30, justifyContent: 'center' }} onPress={closeModal2} >
                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}>OK</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
        </View>
    );
}
export default Game1;
