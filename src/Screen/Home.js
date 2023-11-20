import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderBar from '../component/HeaderBar';

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <HeaderBar navigation={navigation} />
            <ScrollView>
                <Text style={{ color: '#FFFFFF', fontSize: 24, margin: 15, left: 20 }}>
                    Game Tournaments
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo1.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15 }}>Ludo Auto Classics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Game1')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo2.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15, }}>Ludo Classic Manual</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Game2')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo3.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15,fontFamily:'Poppins-Medium' }}>Ludo Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Game3')}>
                        <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo4.png')} />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15,fontFamily:'Poppins-Medium'}}>About Us</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', margin: 10 }}>

                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, width: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 10,margin:10}}>
                        <Image resizeMode='cover' style={{ width: 20, height: 20 }} source={require('../image/youtube.png')} />
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold',marginLeft:10}}>YouTube</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Referrals')} style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, width: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 10,margin:10}}>
                        <Image resizeMode='cover' style={{ width: 20, height: 20, }} source={require('../image/share.png')} />
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold',marginLeft:10 }}>Refer & Earn</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default Home;
