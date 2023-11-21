import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const MyQuiz = ({ navigation }) => {
    const data = [
        {
            key: '1',
            image1: require('../image/ludo1.png'),
            image2: require('../image/game.jpg'),
            image3: require('../image/pubg.jpg'),
            image4: require('../image/king.png'),
            image5: require('../image/entry.png'),
            id1: 'Ludo Games',
            id2: 'Multi Games',
            id3: 'Pubg Games',
            pize: 'Prize :180.0 Coins',
            enter: 'Enter : 6.0 Conis'
        },
        {
            key: '1',
            image1: require('../image/ludo2.png'),
            image2: require('../image/Samuray.jpg'),
            image3: require('../image/cheaj.jpg'),
            image4: require('../image/king.png'),
            image5: require('../image/entry.png'),
            id1: 'Ludo Classic',
            id2: 'Monster Games',
            id3: 'Free Fire ',
            pize: 'Prize :180.0 Coins',
            enter: 'Enter : 6.0 Conis'
        },
        {
            key: '1',
            image1: require('../image/luDo5.png'),
            image2: require('../image/cricket.jpg'),
            image3: require('../image/game1.jpg'),
            image4: require('../image/king.png'),
            image5: require('../image/entry.png'),
            id1: 'Populer Ludo ',
            id2: 'Cricket Games',
            id3: 'Samuray Games',
            pize: 'Prize :180.0 Coins',
            enter: 'Enter : 6.0 Conis'
        },
        {
            key: '1',
            image1: require('../image/Candychash.jpg'),
            image2: require('../image/mupakcard.jpg'),
            image3: require('../image/Rocket.jpg'),
            image4: require('../image/king.png'),
            image5: require('../image/entry.png'),
            id1: 'Candy Crush',
            id2: 'Multipal Card',
            id3: 'Rocket Games',
            pize: 'Prize :180.0 Coins',
            enter: 'Enter : 6.0 Conis'
        },
    ];
    const renderItem1 = ({ item }) => (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'red', width: '30%', margin: 6 }}>
                <Image resizeMode='cover' style={{ width: 123, height: 120 }} source={item.image1} />
                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', alignSelf: 'center' }}>{item.id1}</Text>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image4} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.pize}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image5} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.enter}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'red', width: '30%', margin: 6 }}>
                <Image resizeMode='cover' style={{ width: 123, height: 120 }} source={item.image2} />
                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', alignSelf: 'center' }}>{item.id2}</Text>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image4} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.pize}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image5} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.enter}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'red', width: '30%', margin: 6 }}>
                <Image resizeMode='cover' style={{ width: 123, height: 120 }} source={item.image3} />
                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold', alignSelf: 'center' }}>{item.id3}</Text>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image4} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.pize}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='cover' style={{ width: 17, height: 17, margin: 3 }} source={item.image5} />
                        <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 'bold', margin: 3 }}>{item.enter}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Quizzes</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <FlatList data={data} renderItem={renderItem1} />
        </View>
    );
}
export default MyQuiz;
