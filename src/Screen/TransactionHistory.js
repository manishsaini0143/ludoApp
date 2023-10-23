import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import HeaderBar from '../component/HeaderBar';
const TransactionHistory = ({ navigation }) => {
    const data = [

        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },
        {
            key: '1',
            // image1: require('../image/eye.png'),
            payment: 'PAID',
            lost: 'Cash withdrawen in UPI.',
            id: 'Order ID: TX- LMD7GE8A',
            uran: ' (-)',
            image2: require('../image/gamemoney.png'),
            wonn: '185.00',
            time: '20 SEP | 2:10 pm',
        },


    ];
    const renderItem = ({ item }) => (
        <View>

            <View style={{ padding: 16 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: 'center', padding: 10 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 40, height: 40, alignSelf: 'center', marginRight: 15 }} source={require('../image/eye.png')} />
                        <View>

                            <Text style={{ color: '#FFFFFF', fontSize: 18, }}>{item.lost}</Text>
                            <Text style={{ color: '#A5A3A3', fontSize: 14, }}>{item.id}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#069840', height: 23, width: 70, alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{item.payment}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Text style={{ color: '#FE0000', fontSize: 20, marginRight: 10 }}>{item.uran}</Text>
                    <Image resizeMode='cover' style={{ width: 20, height: 18, marginRight: 10, alignSelf: 'center' }} source={item.image2} />
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>{item.wonn}</Text>
                </View>
                <Text style={{ color: '#A5A3A3', marginLeft: 30, padding: 5, fontSize: 16 }}>{item.time}</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 1 }}></View>
        </View>



    );
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
             <HeaderBar/>

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity >

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
            <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 1 }}></View>
            <View>
                <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={data} renderItem={renderItem} />
            </View>

        </View>
    );
}

export default TransactionHistory;

