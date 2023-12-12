import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';

const Clashx = ({ navigation }) => {
    const data = [
        {
            key: '1',
            name: 'LUDO_LPTIQWU',
            clissie: ' CLASSIC',
            image1: require('../image/soutafica.jpg'),
            image2: require('../image/american.jpg'),
            team1: 'CAMEROON',
            team2: 'Waiting..',
            challeng: 'has challenged for',
            coin: '5300.o Coin',
            winning: 'Winning 9644.0 Coin',
            Accept: 'Accept'
        },
        {
            key: '1',
            name: 'LUDO_LPTIQWU',
            clissie: ' CLASSIC',
            image1: require('../image/soutafica.jpg'),
            image2: require('../image/american.jpg'),
            team1: 'CAMEROON',
            team2: 'Waiting..',
            challeng: 'has challenged for',
            coin: '5300.o Coin',
            winning: 'Winning 9644.0 Coin',
            Accept: 'Accept'
        },
        {
            key: '1',
            name: 'LUDO_LPTIQWU',
            clissie: ' CLASSIC',
            image1: require('../image/soutafica.jpg'),
            image2: require('../image/american.jpg'),
            team1: 'CAMEROON',
            team2: 'Waiting..',
            challeng: 'has challenged for',
            coin: '5300.o Coin',
            winning: 'Winning 9644.0 Coin',
            Accept: 'Accept'
        },
        {
            key: '1',
            name: 'LUDO_LPTIQWU',
            clissie: ' CLASSIC',
            image1: require('../image/soutafica.jpg'),
            image2: require('../image/american.jpg'),
            team1: 'CAMEROON',
            team2: 'Waiting..',
            challeng: 'has challenged for',
            coin: '5300.o Coin',
            winning: 'Winning 9644.0 Coin',
            Accept: 'Accept'
        },
        {
            key: '1',
            name: 'LUDO_LPTIQWU',
            clissie: ' CLASSIC',
            image1: require('../image/soutafica.jpg'),
            image2: require('../image/american.jpg'),
            team1: 'CAMEROON',
            team2: 'Waiting..',
            challeng: 'has challenged for',
            coin: '5300.o Coin',
            winning: 'Winning 9644.0 Coin',
            Accept: 'Accept'
        },
    ];

    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: '#AF7070', width: '90%', alignSelf: 'center', borderRadius: 10, margin: 7 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#000000', fontSize: 13, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>{item.name}</Text>
                <View style={{ backgroundColor: 'red', padding: 5, borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold', }}>
                        {item.clissie}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ alignItems: 'center', }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={item.image1} />
                    <View style={{ width: 75 }}>
                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold', top: 5 }}>{item.team1}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>{item.challeng}</Text>
                        <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>{item.coin}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={item.image2} />
                    <View style={{ width: 65 }}>
                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold', top: 5 }}>{item.team2}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity style={{ backgroundColor: '#30A54E', width: '50%', alignItems: 'center', borderBottomLeftRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', padding: 5 }}>{item.winning}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'blue', width: '50%', alignItems: 'center', borderBottomRightRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', padding: 5 }}>{item.Accept}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>CX Lash</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: 20, top: 10, margin: 10 }}>CX Lasha Battle !</Text>
            </View>
            <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '85%', flexDirection: 'row', height: 60, alignSelf: 'center', margin: 10 }} >

                <TextInput maxLength={10} style={{ color: '#B3B1B1', width: '70%', fontSize: 20, letterSpacing: 2, marginLeft: 20 }} keyboardType='Number-type' placeholder='Amount' placeholderTextColor='#B3B1B1' />
                <TouchableOpacity>
                    <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20, left: 20 }} source={require('../image/amout.png')} />
                </TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={{ paddingBottom: 20 }}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default Clashx;
