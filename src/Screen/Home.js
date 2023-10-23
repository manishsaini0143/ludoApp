import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderBar from '../component/HeaderBar';

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <HeaderBar navigation={navigation} />
            <ScrollView>
                <Text style={{ color: '#FFFFFF', fontSize: 25, margin: 30 }}>
                    Game Tournaments
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo1.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15 }}>Ludo Auto Classics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Game1')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo2.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15 }}>Ludo Classic Manual</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Game2')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo3.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15 }}>Ludo Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Game3')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo4.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15 }}>About Us</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>

                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 50, width: 160, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/youtube.png')} />
                        <Text style={{ color: '#000000', fontSize: 16, margin: 5, fontWeight: 'bold' }}>YouTube</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 50, width: 160, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/share.png')} />
                        <Text style={{ color: '#000000', fontSize: 16, margin: 5, fontWeight: 'bold' }}>Refer & Earn</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default Home;
