import * as React from 'react';
import { Image, Text, TouchableHighlightComponent, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wellet from '../Screen/wallet';
import setting from '../Screen/setting';
import Home from '../Screen/Home';
import Drawer from './Drawer';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            headerTitle: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 70,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: '#36090c',
                position: 'absolute',
                borderTopWidth: 0,
                borderRadius: 10
            },
        })} initialRouteName='Home'>

            <Tab.Screen name="wellet" component={wellet} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={{ backgroundColor: '#36090c', height: 125, width: 90, alignItems: 'center', borderRadius: 45 }}>

                            <Image resizeMode='contain' style={{ height: 45, width: 45, position: 'absolute', top: 25 }} source={require('../image/wallet3.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, position: 'absolute', top: 70, fontWeight: 'bold' }}>
                                Wallet
                            </Text>
                        </View>
                        :
                        <View style={{ flex: 1 }}>

                            <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'relative', top: 11 }} source={require('../image/wallet3.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 10, position: 'relative', textAlign: 'center', fontWeight: 'bold', top: 17 }}>
                                Wellet
                            </Text>
                        </View>
                )
            }} />
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={{ backgroundColor: '#36090c', height: 125, width: 90, alignItems: 'center', borderRadius: 45 }}>

                            <Image resizeMode='contain' style={{ height: 50, width: 50, position: 'absolute', top: 20 }} source={require('../image/Home2.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, position: 'absolute', top: 65, fontWeight: 'bold' }}>
                                Home
                            </Text>
                        </View>
                        :
                        <View>
                            <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'relative', bottom: 2 }} source={require('../image/Home2.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 10, position: 'relative', textAlign: 'center', fontWeight: 'bold', }}>
                                Home
                            </Text>
                        </View>
                )
            }} />
            <Tab.Screen name="settings" component={setting} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={{ backgroundColor: '#36090c', height: 125, width: 90, alignItems: 'center', borderRadius: 45 }}>

                            <Image resizeMode='contain' style={{ height: 42, width: 42, position: 'absolute', top: 25 }} source={require('../image/Setting1.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, position: 'absolute', top: 70, fontWeight: 'bold' }}>
                                Settings
                            </Text>
                        </View>
                        :
                        <View>
                            <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'relative', bottom: 0, alignSelf: 'center' }} source={require('../image/Setting1.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 10, position: 'relative', textAlign: 'center', fontWeight: 'bold', top: 4 }}>
                                Settings
                            </Text>
                        </View>
                )
            }} />
        </Tab.Navigator>
    );
}