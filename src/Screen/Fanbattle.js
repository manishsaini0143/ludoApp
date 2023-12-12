import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';

const Fanbattle = ({ navigation }) => {
    const data = [
        {
            key: '1',
            time: '12:30 PM | 06 Des,2023',
            image1: require('../image/CAMEROON.jpg'),
            image2: require('../image/trophy.png'),
            image3: require('../image/trophy.png'),
            imagetime4: require('../image/trophy.png'),
            team1: 'CAMEROON',
            team2: 'KENYASS',
            disha: 'EAST-WEST WC',
            tofeeteem: 'AFRICA QUALIFLERS',
            start: 'STARTS IN: 1 :53: 26',
        },
        {
            key: '1',
            time: '12:30 PM | 06 Des,2023',
            image1: require('../image/CAMEROON.jpg'),
            image2: require('../image/trophy.png'),
            image3: require('../image/trophy.png'),
            imagetime4: require('../image/trophy.png'),
            team1: 'CAMEROON',
            team2: 'KENYASS',
            disha: 'EAST-WEST WC',
            tofeeteem: 'AFRICA QUALIFLERS',
            start: 'STARTS IN: 1 :53: 26',
        },
        {
            key: '1',
            time: '12:30 PM | 06 Des,2023',
            image1: require('../image/CAMEROON.jpg'),
            image2: require('../image/trophy.png'),
            image3: require('../image/trophy.png'),
            imagetime4: require('../image/trophy.png'),
            team1: 'CAMEROON',
            team2: 'KENYASS',
            disha: 'EAST-WEST WC',
            tofeeteem: 'AFRICA QUALIFLERS',
            start: 'STARTS IN: 1 :53: 26',
        },
        {
            key: '1',
            time: '12:30 PM | 06 Des,2023',
            image1: require('../image/CAMEROON.jpg'),
            image2: require('../image/trophy.png'),
            image3: require('../image/trophy.png'),
            imagetime4: require('../image/trophy.png'),
            team1: 'CAMEROON',
            team2: 'KENYASS',
            disha: 'EAST-WEST WC',
            tofeeteem: 'AFRICA QUALIFLERS',
            start: 'STARTS IN: 1 :53: 26',
        },
        {
            key: '1',
            time: '12:30 PM | 06 Des,2023',
            image1: require('../image/CAMEROON.jpg'),
            image2: require('../image/trophy.png'),
            image3: require('../image/trophy.png'),
            imagetime4: require('../image/trophy.png'),
            team1: 'CAMEROON',
            team2: 'KENYASS',
            disha: 'EAST-WEST WC',
            tofeeteem: 'AFRICA QUALIFLERS',
            start: 'STARTS IN: 1 :53: 26',
        },
    ];

    const renderItem = ({ item }) => (

        <View style={{ backgroundColor: '#AD808F', width: '90%', alignSelf: 'center', borderRadius: 10, margin: 7 }}>
            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>{item.time}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                <View style={{ alignItems: 'center', }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={item.image1} />
                    <View style={{ width: 75 }}>

                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold', top: 5 }}>{item.team1}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>

                        <Image resizeMode='cover' style={{ height: 30, width: 30, right: 7, top: 5 }} source={item.image2} />
                    </View>
                    <View>

                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>{item.disha}</Text>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>{item.tofeeteem}</Text>
                    </View>


                </View>
                <View style={{ alignItems: 'center', }}>
                    <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../image/KENYA.jpg')} />
                    <View style={{ width: 65 }}>

                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold', top: 5 }}>{item.team2}</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'center', position: 'absolute', top: 105, alignSelf: 'center' }}>VS</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10 }}>
                <Image resizeMode='cover' style={{ height: 20, width: 20, right: 10 }} source={require('../image/time.png')} />
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{item.start}</Text>
            </View>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Fan Bettle</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image resizeMode='cover' style={{ width: 30, height: 30 }} source={require('../image/notifectionmn.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginLeft: 20, top: 10, margin: 10 }}>Fan a Battle !</Text>
            </View>
            <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: '85%', flexDirection: 'row', height: 60, alignSelf: 'center', margin: 10 }} >

                <TextInput maxLength={10} style={{ color: '#B3B1B1', width: '70%', fontSize: 20, letterSpacing: 2, marginLeft: 20 }} keyboardType='Number-type' placeholder='Amount' placeholderTextColor='#B3B1B1' />
                <TouchableOpacity>

                    <Image resizeMode='contain' style={{ width: 40, height: 40, backgroundColor: 'red', margin: 10, borderRadius: 20, left: 20 }} source={require('../image/amout.png')} />
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
            {/* <View style={{ backgroundColor: '#AD808F', width: '90%', alignSelf: 'center', borderRadius: 10, margin: 7 }}>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>12:30 PM | 06 Des,2023</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                    <View style={{ alignItems: 'center', }}>
                        <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../image/CAMEROON.jpg')} />
                        <View style={{width:75}}>

                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold',top:5 }}>CAMEROON</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View>

                            <Image resizeMode='cover' style={{ height: 30, width: 30, right: 7, top: 5 }} source={require('../image/trophy.png')} />
                        </View>
                        <View>

                            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>EAST-WEST WC</Text>
                            <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', }}>AFRICA QUALIFIERS</Text>
                        </View>


                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <Image resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../image/KENYA.jpg')} />
                        <View style={{width:65}}>

                        <Text style={{ color: '#D51D1D', fontSize: 13, fontWeight: 'bold',top:5 }}>KENYASS</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'center', position: 'absolute', top: 105, alignSelf: 'center' }}>VS</Text>
                <View style={{flexDirection:'row',alignSelf:'center',margin:10}}>
                    <Image resizeMode='cover' style={{ height: 20, width: 20,right:10}} source={require('../image/time.png')} />
                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>STARTS IN: 1 :53: 26</Text>
                </View>
            </View> */}

        </View>
    );
}

export default Fanbattle;
