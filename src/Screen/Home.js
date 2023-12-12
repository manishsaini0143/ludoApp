import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderBar from '../component/HeaderBar';
import Swiper from 'react-native-swiper';

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
            <HeaderBar navigation={navigation} />
            <Swiper autoplay={true} dotColor='#FFFFFF' dotStyle={{ top: 50 }} activeDotStyle={{ top: 50 }}>
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Freefirebanner.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/ludobaner.png')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/banerlucocllise.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Rummybanner.jpg')} />
                <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../image/Cricketbanner.jpg')} />
            </Swiper>
            <ScrollView>
                <Text style={{ color: '#FFFFFF', fontSize: 24, margin: 15, left: 20, fontFamily: 'JosefinSans-Bold' }}>
                    Game Tournaments
                </Text>
                <ScrollView horizontal contentContainerStyle={{ paddingRight: 35 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 33 }}>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Games')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo1.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Ludo Auto Classics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Game2')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/Drovid.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Drovid Popular</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Game1')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/Rummy.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Rummy Classic </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Game3')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo4.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>About Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 33 }}>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Cricketgame')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/crickete.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Cricket Classic</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Clashx')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/Clashx.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>C Lash X</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Fanbattle')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/fanbattle.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Fan Battle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('MyQuiz')} style={{ margin: 10, alignItems: 'center' }}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/quizess.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'JosefinSans-Bold', margin: 10 }}>MY QUIZ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {/* <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>

                            <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo1.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', marginTop: 15, fontFamily: 'JosefinSans-Bold' }}>Ludo Auto Classics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Game1')}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/Rummy.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', marginTop: 15, fontFamily: 'JosefinSans-Bold' }}>Rummy Classic Manual</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Game2')}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/Drovid.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', marginTop: 15, fontFamily: 'JosefinSans-Bold' }}>Drovid Popular</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Game3')}>
                                <Image resizeMode='cover' style={{ width: 150, height: 150, }} source={require('../image/ludo4.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 13, alignSelf: 'center', marginTop: 15, fontFamily: 'JosefinSans-Bold' }}>About Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', margin: 10 }}>

                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, width: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
                        <Image resizeMode='cover' style={{ width: 20, height: 20 }} source={require('../image/youtube.png')} />
                        <Text style={{ color: '#000000', fontSize: 13, fontFamily: 'JosefinSans-Bold', marginLeft: 10, bottom: 2 }}>YouTube</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Referrals')} style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, width: 130, alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
                        <Image resizeMode='cover' style={{ width: 20, height: 20, }} source={require('../image/share.png')} />
                        <Text style={{ color: '#000000', fontSize: 13, fontFamily: 'JosefinSans-Bold', marginLeft: 10, bottom: 1.5 }}>Refer & Earn</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default Home;
