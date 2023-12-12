import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import Home from './Home';
import Drawer from '../navigation/Drawer';
import HeaderBar from '../component/HeaderBar';
const data = [

    {
        key: '1',
        image1: require('../image/pubg.jpg'),
        image2: require('../image/freeesfire.jpg'),
        image3: require('../image/freeesfiremax.jpg'),
        name1: 'FREE FIRE',
        name2: 'PUBG/BGMI',
        name3: 'FREE FIRE',
        QUSRY1: 'QUERY',
        QUSRY2: 'QUERY',
        QUSRY3: 'MAX QUERY',
    },
    {
        key: '1',
        image1: require('../image/Actions.jpg'),
        image2: require('../image/Action.jpg'),
        image3: require('../image/Rocket.jpg'),
        name1: 'Action Game',
        name2: 'ACTION',
        name3: 'ROCKET',
        QUSRY1: 'QUERY',
        QUSRY2: 'QUERY',
        QUSRY3: 'SPACE',
    },
    {
        key: '1',
        image1: require('../image/Samuray.jpg'),
        image2: require('../image/Masterludo.jpg'),
        image3: require('../image/INDAIRummy.jpg'),
        name1: 'MONSTER Game',
        name2: 'LUDO MAX',
        name3: 'RUMMY/GAME',
        QUSRY1: 'QUERY',
        QUSRY2: 'QUERY',
        QUSRY3: 'QUERY',
    },
    {
        key: '1',
        image1: require('../image/quizhelp.jpg'),
        image2: require('../image/Desposit.jpg'),
        image3: require('../image/droid.jpg'),
        name1: 'QUIZ Game',
        name2: 'DEPOSIT',
        name3: 'DROID',
        QUSRY1: 'QUERY',
        QUSRY2: 'QUERY',
        QUSRY3: 'QUERY',
    },

];
const renderItem2 = ({ item }) => (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '95%', alignSelf: 'center', margin: 5 }}>

            <View style={{ width: '30%' }}>
                <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20,}} source={item.image1} />
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                    {item.name1}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                    {item.QUSRY1}
                </Text>
            </View>
            <View style={{ width: '30%' }}>
                <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20 }} source={item.image2} />
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                    {item.name2}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                    {item.QUSRY2}
                </Text>
            </View>
            <View style={{ width: '30%' }}>
                <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20 }} source={item.image3} />
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                    {item.name3}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                    {item.QUSRY3}
                </Text>
            </View>
        </View>
    </View>
);

const Game3 = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Help</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={{ paddingBottom: 20 }}
                data={data}
                renderItem={renderItem2}
            />
            {/* <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '95%', alignSelf: 'center', margin: 10 }}>

                    <View style={{ width: '30%' }}>
                        <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20 }} source={require('../image/freeesfire.jpg')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                            FREE FIRE
                        </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                            QUERY
                        </Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20 }} source={require('../image/pubg.jpg')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                            PUBG/BGMI
                        </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                            QUERY
                        </Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Image resizeMode='contain' style={{ width: 110, height: 150, backgroundColor: 'red', borderRadius: 20 }} source={require('../image/freeesfiremax.jpg')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 100 }}>
                            FREE FIRE
                        </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top: 120 }}>
                            MAX QUERY
                        </Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}

export default Game3;
