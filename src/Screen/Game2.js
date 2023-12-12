import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView, ProgressBarAndroid } from 'react-native';
import Home from './Home';
import Drawer from '../navigation/Drawer';
import HeaderBar from '../component/HeaderBar';
const data = [
    {
        key: '1',
        image: require('../image/play.png'),
        Win: 'Win: ₹ 180',
        super: 'SUPER 07303',
        playbutten: 'Play',
        entry: 'Participants',
        point: '4/14',
        st: '1st:₹ 44',
        attlem: 'Attempts:0/3',
        entryfee: 'Entry Fee:15',
    },
    {
        key: '1',
        image: require('../image/play.png'),
        Win: 'Win: ₹ 190',
        super: 'SUPER 07303',
        playbutten: 'Play',
        entry: 'Participants',
        point: '6/14',
        st: '1st:₹ 48',
        attlem: 'Attempts:0/5',
        entryfee: 'Entry Fee:25',
    },
    {
        key: '1',
        image: require('../image/play.png'),
        Win: 'Win: ₹ 210',
        super: 'SUPER 07303',
        playbutten: 'Play',
        entry: 'Participants',
        point: '5/14',
        st: '1st:₹ 60',
        attlem: 'Attempts:1/3',
        entryfee: 'Entry Fee:35',
    },
    {
        key: '1',
        image: require('../image/play.png'),
        Win: 'Win: ₹ 240',
        super: 'SUPER 07303',
        playbutten: 'Play',
        entry: 'Participants',
        point: '5/14',
        st: '1st:₹ 60',
        attlem: 'Attempts:1/3',
        entryfee: 'Entry Fee:35',
    },
    {
        key: '1',
        image: require('../image/play.png'),
        Win: 'Win: ₹ 250',
        super: 'SUPER 07303',
        playbutten: 'Play',
        entry: 'Participants',
        point: '5/14',
        st: '1st:₹ 60',
        attlem: 'Attempts:1/3',
        entryfee: 'Entry Fee:35',
    },
];
const userProgress = 25;
const renderItem1 = ({ item, }) => (

    <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: '#417EAD', borderRadius: 15, margin: 5 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>

                <Image resizeMode='contain' style={{ width: 70, height: 70, }} source={require('../image/play.png')} />
                <View style={{ marginLeft: 15 }} >
                    <Text style={{ color: 'yellow', fontSize: 20 }}>
                        {item.Win}
                    </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 14 }}>
                        {item.super}
                    </Text>
                </View>
            </View>
            {/* onPress={() => navigation.navigate('Super')} */}
            <TouchableOpacity style={{ backgroundColor: 'yellow', width: 65, justifyContent: 'center', alignItems: 'center', height: 30, borderRadius: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>
                    {item.playbutten}
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}> {item.entry}</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}> {item.point}</Text>
        </View>
        <View style={{ padding: 10 }}>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={userProgress / 100}
                style={{ color: 'yellow' }}
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderColor: '#417EAD', padding: 10 }}>

            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>
                {item.st}
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>
                {item.attlem}
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 14 }}>
                {item.entryfee}
            </Text>
        </View>
    </View>
);
const Game2 = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Drovid Popular</Text>
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
                <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20 }} source={require('../image/swords.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                    Open Battles
                </Text>
            </View>
            <FlatList contentContainerStyle={{ paddingBottom: 20 }}
                data={data}
                renderItem={renderItem1}
            />
        </View>
    );
}

export default Game2;
