import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const Cricketgame = ({ navigation }) => {
    const data = [
        {
            key: '1',
            name: 'AUDSRALIA TOUR OF INDIA',
            image1: require('../image/India.jpg'),
            image2: require('../image/AUSTRALIA.jpg'),
            team1: 'INDIA',
            team2: 'AUSTRALIA',
            time: '01 Des 07:00 PM',
            start: 'Starts in 07:06:05',
            wine: 'Win upto ₹ 9000',

        },
        {
            key: '1',
            name: 'AUDSRALIA TOUR OF INDIA',
            image1: require('../image/India.jpg'),
            image2: require('../image/AUSTRALIA.jpg'),
            team1: 'INDIA',
            team2: 'AUSTRALIA',
            time: '01 Des 07:00 PM',
            start: 'Starts in 07:06:05',
            wine: 'Win upto ₹ 9000',

        },
        {
            key: '1',
            name: 'AUDSRALIA TOUR OF INDIA',
            image1: require('../image/India.jpg'),
            image2: require('../image/AUSTRALIA.jpg'),
            team1: 'INDIA',
            team2: 'AUSTRALIA',
            time: '01 Des 07:00 PM',
            start: 'Starts in 07:06:05',
            wine: 'Win upto ₹ 9000',

        },
        {
            key: '1',
            name: 'AUDSRALIA TOUR OF INDIA',
            image1: require('../image/India.jpg'),
            image2: require('../image/AUSTRALIA.jpg'),
            team1: 'INDIA',
            team2: 'AUSTRALIA',
            time: '01 Des 07:00 PM',
            start: 'Starts in 07:06:05',
            wine: 'Win upto ₹ 9000',

        },
        {
            key: '1',
            name: 'AUDSRALIA TOUR OF INDIA',
            image1: require('../image/India.jpg'),
            image2: require('../image/AUSTRALIA.jpg'),
            team1: 'INDIA',
            team2: 'AUSTRALIA',
            time: '01 Des 07:00 PM',
            start: 'Starts in 07:06:05',
            wine: 'Win upto ₹ 9000',

        },
    ];

    const renderItem = ({ item }) => (

        <View style={{ backgroundColor: '#B59B7E', width: '90%', alignSelf: 'center', borderRadius: 10, margin: 7 }}>
            <View style={{ backgroundColor: 'green', padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={item.image1} />
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>{item.team1}</Text>
                </View>
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', margin: 5 }}>{item.time}</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', margin: 5 }}>{item.start}</Text>
                    <TouchableOpacity style={{ backgroundColor: '#185718', padding: 7, borderRadius: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>{item.wine}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={item.image2} />
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>{item.team2}</Text>
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
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Cricket Classic</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>


            {/* <Swiper>

                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Freefirebanner.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/ludobaner.png')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/banerlucocllise.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Rummybanner.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Cricketbanner.jpg')} />
            </Swiper> */}

            <FlatList contentContainerStyle={{ paddingBottom: 20 }}
                data={data}
                renderItem={renderItem}
            />
            {/* <View style={{ backgroundColor: '#B59B7E', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                <View style={{ backgroundColor: 'green', padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>AUDSRALIA TOUR OF INDIA</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../image/India.jpg')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>INDIA</Text>
                    </View>
                    <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', margin: 5 }}>01 Des 07:00 PM</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', margin: 5 }}>Starts in 07:06:05</Text>
                        <View style={{ backgroundColor: '#185718', padding: 7, borderRadius: 10 }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>Win upto ₹ 9000</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../image/AUSTRALIA.jpg')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>AUSTRALIA</Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}

export default Cricketgame;
