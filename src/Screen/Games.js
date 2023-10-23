import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import Home from './Home';
import Drawer from '../navigation/Drawer';
import HeaderBar from '../component/HeaderBar';
const data = [

    {
        key: '1',
        name: ' Challenge from',
        name2: 'Deepak Pradhan',
        playbutten: 'Play',
        entry: ' Entry: ₹100',
        image: require('../image/play.png'),
        image1: require('../image/play1.png')
    },
    {
        key: '1',
        name: ' Challenge from',
        name2: 'Deepak Pradhan',
        playbutten: 'Play',
        entry: ' Entry: ₹200',
        image: require('../image/play.png'),
        image1: require('../image/play1.png')
    },
    {
        key: '1',
        name: ' Challenge from',
        name2: 'Deepak Pradhan',
        playbutten: 'Play',
        entry: ' Entry: ₹300',
        image: require('../image/play.png'),
        image1: require('../image/play1.png')
    },
    {
        key: '1',
        name: ' Challenge from',
        name2: 'Deepak Pradhan',
        playbutten: 'Play',
        entry: ' Entry: ₹500',
        image: require('../image/play.png'),
        image1: require('../image/play1.png')
    },
    {
        key: '1',
        name: ' Challenge from',
        name2: 'Deepak Pradhan',
        playbutten: 'Play',
        entry: ' Entry: ₹1000',
        image: require('../image/play.png'),
        image1: require('../image/play1.png')
    },

];
const renderItem = ({ item }) => (
    <View style={{ width: "90%", alignSelf: 'center', margin: 15, borderRadius: 10, overflow: 'hidden' }}>
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <Text style={{ color: '#000000', fontSize: 18, textAlign: 'center', fontWeight: 'bold', padding: 10 }}>
                    {item.name}<Text style={{ color: '#FE0000' }}>{item.name2}</Text>
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image resizeMode='contain' style={{ width: 45, height: 45, backgroundColor: 'red', margin: 10, borderRadius: 20 }} source={item.image} />
                <TouchableOpacity>

                    <Text style={{ color: '#FFFFFF', fontSize: 20, backgroundColor: '#007805', width: 100, textAlign: 'center', borderRadius: 10, fontWeight: 'bold' }}>
                        {item.playbutten}
                    </Text>
                </TouchableOpacity>
                <Image resizeMode='contain' style={{ width: 45, height: 45, backgroundColor: 'red', margin: 10, borderRadius: 20 }} source={item.image1} />
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'red'  }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                {item.entry}
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                {item.entry}
            </Text>
        </View>
    </View>
);

const Games = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: 30, top: 20 }}>Create a Battle!</Text>
            </View>
            <View style={{ margin: 30, borderRadius: 10, backgroundColor: '#FFFFFF', width: '85%', flexDirection: 'row', height: 60 }} >

                <TextInput maxLength={10} style={{ color: '#B3B1B1', width: '70%', fontSize: 20, letterSpacing: 3, marginLeft: 20 }} keyboardType='Number-type' placeholder='Amount' placeholderTextColor='#B3B1B1' />
                <TouchableOpacity>

                <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20, left: 20 }} source={require('../image/amout.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20 }} source={require('../image/swords.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                    Open Battles
                </Text>
            </View>
            <FlatList contentContainerStyle={{paddingBottom:20}}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Games;
