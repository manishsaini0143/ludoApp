import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const Applycopans = ({ navigation }) => {
    const data = [
        {
            key: '1',
            image1: require('../image/bookmy.jpg'),
            image2: require('../image/Geeksforgeeks.jpg'),
            id1: 'Bookmyshow',
            id2: 'Geeksforgeeks',
            off1: 'Get ? 50 off on your..',
            off2: 'Exclusive: Flat 45 %...',
            money: 'Worth',
            pize1: '₹ 50',
            pize2: '₹ 100',
            enter: 'View'
        },
        {
            key: '1',
            image1: require('../image/myntra.jpg'),
            image2: require('../image/Ajio.jpg'),
            id1: 'Myntra',
            id2: 'AJIO',
            off1: 'Get ? 50 off on your..',
            off2: 'Exclusive: Flat 65 %...',
            money: 'Worth',
            pize1: '₹ 50',
            pize2: '₹50',
            enter: 'View'
        },
        {
            key: '1',
            image1: require('../image/Amzone.jpg'),
            image2: require('../image/Shyakay.jpg'),
            id1: 'Amazon',
            id2: 'Shyaway',
            off1: 'Get ? 75 off on your..',
            off2: 'Exclusive: Flat 45 %...',
            money: 'Worth',
            pize1: '₹ 399',
            pize2: '₹ 100',
            enter: 'View'
        },
        {
            key: '1',
            image1: require('../image/Bilaa.jpg'),
            image2: require('../image/flipkart.jpg'),
            id1: 'Bella vita',
            id2: 'Shyaway',
            off1: 'Get ? 75 off on your..',
            off2: 'Exclusive: Flat 45 %...',
            money: 'Worth',
            pize1: '₹ 70',
            pize2: '₹ 299',
            enter: 'View'
        },
    ];
    const renderItem2 = ({ item }) => (
        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: '45%', borderWidth: 1, borderColor: '#FFFFFF', margin: 10 }}>

                <Image resizeMode='cover' style={{ width: 164, height: 100 }} source={item.image1} />
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.id1}</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.off1}</Text>
                <View style={{ width: '100%', height: 2, backgroundColor: 'red', opacity: 0.5 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.money}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.pize1}</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.enter}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '45%', borderWidth: 1, borderColor: '#FFFFFF', margin: 10 }}>

                <Image resizeMode='cover' style={{ width: 164, height: 100 }} source={item.image2} />
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.id2}</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.off2}</Text>
                <View style={{ width: '100%', height: 2, backgroundColor: 'red', opacity: 0.5 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.money}</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.pize2}</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', padding: 5 }}>{item.enter}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', padding: 10, width: '60%', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', bottom: 2.5 }}>Copans</Text>
            </View>
            <FlatList data={data} renderItem={renderItem2} />
        </View>
    );
}

export default Applycopans;
