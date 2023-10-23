import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Home from './Home';
import HeaderBar from '../component/HeaderBar';

const GameHistory = () => {
    
    const data = [
    
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            image: require('../image/gamehistory.png'),
            lost: ' Lost against kapil',
            id: 'battle ID: LMD7GE8A',
            uran: ' (-)',
            image1: require('../image/gamemoney.png'),
            wonn: '57',
            time: '20 SEP | 2:10 pm',
        },
    
    ];
    const renderItem1 = ({ item }) => (
        <View>
    
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', padding: 10 }}>
    
                <View style={{ flexDirection: 'row' }}>
                    <Image resizeMode='cover' style={{ width: 42, height: 40, alignSelf: 'center', marginRight: 15 }} source={item.image} />
                    <View>
    
                        <Text style={{ color: '#FFFFFF', fontSize: 20, }}>{item.lost}</Text>
                        <Text style={{ color: '#A5A3A3', fontSize: 14, }}>{item.id}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: '#FE0000', fontSize: 25, marginRight: 10 }}>{item.uran}</Text>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, marginRight: 10 }} source={item.image1} />
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>{item.wonn}</Text>
                </View>
            </View>
            <Text style={{ color: '#A5A3A3', marginLeft: 30, padding: 10, fontSize: 16 }}>{item.time}</Text>
            <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 2, margin: 10 }}></View>
        </View>
    
    );

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
              <HeaderBar/>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>

                        <Image resizeMode='cover' style={{ width: 46, height: 26, margin: 10 }} source={require('../image/menu.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} >

                        <Image resizeMode='cover' style={{ width: 42, height: 40, }} source={require('../image/Men.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', alignItems: 'center', width: 140, justifyContent: 'center' }}>
                    <Image resizeMode='cover' style={{ width: 40, height: 26, }} source={require('../image/coin.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 5 }}>
                        ₹200
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: '#FE0000', width: 30, height: 30, alignItems: 'center', borderRadius: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <FlatList contentContainerStyle={{paddingBottom:70}} style={{ top: 40 }} data={data} renderItem={renderItem1} />
        </View>
    );
}

export default GameHistory;
