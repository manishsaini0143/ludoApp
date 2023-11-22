import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const Winners = ({ navigation }) => {
    const [selectedGame, setSelectedGame] = useState('FREE FIRE');

    const handleGameClick = (game) => {
        setSelectedGame(game);
    };

    // Separate arrays for each game category
    const freeFireData = [
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Aashis Pardhan',
            prize: 'Won:₹ 2999.00',
            rank: '#4'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Aman Pardhan',
            prize: 'Won:₹ 1999.00',
            rank: '#5'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Sonu Pardhan',
            prize: 'Won:₹ 1496.00',
            rank: '#6'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Ajay Pardhan',
            prize: 'Won:₹ 1499.00',
            rank: '#7'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Nitesh Pardhan',
            prize: 'Won:₹ 1679.00',
            rank: '#8'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Karan saini',
            prize: 'Won:₹ 1559.00',
            rank: '#9'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Rahul Pardhan',
            prize: 'Won:₹ 1939.00',
            rank: '#10'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Vikash Pardhan',
            prize: 'Won:₹ 1929.00',
            rank: '#11'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Sudir Pardhan',
            prize: 'Won:₹ 1909.00',
            rank: '#12'
        },

    ];

    const ludoData = [
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Kamal Pardhan',
            prize: 'Won:₹ 1909.00',
            calej: '7779 Challenges',
            rank: '#4'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Kamlesh choudhary',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#5'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'niluesh bagda',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#6'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Kalu bagda',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#7'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Nisha Bhaker',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#8'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Brath Morye',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#9'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Ravi Jangid',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#10'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Manish saini',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#11'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Kader Parjapti',
            prize: 'Won:₹ 1909.00', calej: '7779 Challenges',
            rank: '#12'
        },
    ];

    const fanBattleData = [
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Rohit nitarwal',
            prize: 'Won:₹ 2999.00',
            rank: '#4'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'NIkaml jaat',
            prize: 'Won:₹ 2099.00',
            rank: '#5'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Mohit Patan',
            prize: 'Won:₹ 1559.00',
            rank: '#6'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Rohit nitarwal',
            prize: 'Won:₹ 1389.00',
            rank: '#7'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Deepak Shrama',
            prize: 'Won:₹ 1299.00',
            rank: '#8'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Dinesh Saini',
            prize: 'Won:₹ 1199.00',
            rank: '#9'
        },
        {
            key: '1',
            image1: require('../image/Avatar1.png'),
            id1: 'Anil Saini',
            prize: 'Won:₹ 1199.00',
            rank: '#9'
        },
    ];

    const moreData = [
        // More winners data
        // ...
    ];

    const renderFlatListData = () => {
        switch (selectedGame) {
            case 'FREE FIRE':
                return freeFireData;
            case 'LUDO':
                return ludoData;
            case 'FAN BATLE':
                return fanBattleData;
            case 'More':
                return moreData;
            default:
                return [];
        }
    };

    const renderItem = ({ item }) => (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View>
                        <Image resizeMode='cover' style={{ width: 50, height: 50 }} source={item.image1} />
                    </View>
                    <View style={{ left: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>{item.id1}</Text>
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>{item.prize}</Text>
                        {/* <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{item.calej}</Text> */}
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 15 }}>{item.rank}</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 2, backgroundColor: 'red', opacity: 0.6 }}></View>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#B91515E8' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Winners</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#B91515E8', padding: 10, borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/king.png')} />
                            <Image resizeMode='cover' style={{ width: 70, height: 70 }} source={require('../image/Avatar1.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>1.Sunil Pardhan</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>Won:₹ 8999.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/king2.png')} />
                            <Image resizeMode='cover' style={{ width: 70, height: 70 }} source={require('../image/Avatar1.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>2.Deepak Pardhan</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>Won:₹ 6999.00</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/king3.png')} />
                            <Image resizeMode='cover' style={{ width: 70, height: 70 }} source={require('../image/Avatar1.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>3.Dinesh Pardhan</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>Won:₹ 4999.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    width: '90%',
                    alignSelf: 'center',
                    margin: 10,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: selectedGame === 'FREE FIRE' ? 'red' : '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        height: 30,
                        width: 80,
                        margin: 5,
                    }}
                    onPress={() => handleGameClick('FREE FIRE')}
                >
                    <Text style={{ color: selectedGame === 'FREE FIRE' ? '#FFFFFF' : '#000000', fontSize: 13, fontWeight: 'bold' }}>FREE FIRE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: selectedGame === 'LUDO' ? 'red' : '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        height: 30,
                        width: 80,
                        margin: 5,
                    }}
                    onPress={() => handleGameClick('LUDO')}
                >
                    <Text style={{ color: selectedGame === 'LUDO' ? '#FFFFFF' : '#000000', fontSize: 13, fontWeight: 'bold' }}>LUDO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: selectedGame === 'FAN BATLE' ? 'red' : '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        height: 30,
                        width: 80,
                        margin: 5,
                    }}
                    onPress={() => handleGameClick('FAN BATLE')}
                >
                    <Text style={{ color: selectedGame === 'FAN BATLE' ? '#FFFFFF' : '#000000', fontSize: 13, fontWeight: 'bold' }}>FAN BATLE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: selectedGame === 'More' ? 'red' : '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        height: 30,
                        width: 80,
                        margin: 5,
                        flexDirection: 'row',
                    }}
                    onPress={() => handleGameClick('More')}
                >
                    <Text style={{ color: selectedGame === 'More' ? '#FFFFFF' : '#000000', fontSize: 14, fontWeight: 'bold' }}>More</Text>
                    <Image resizeMode='contain' style={{ width: 10, height: 10, alignSelf: 'center', left: 4, top: 2 }} source={require('../image/rightarrrow.png')} />
                </TouchableOpacity>
            </View>
            <FlatList data={renderFlatListData()} renderItem={renderItem} />
        </View>
    );
};

export default Winners;
