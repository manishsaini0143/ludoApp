import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HeaderBar from '../component/HeaderBar';

const Notification = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2b090a', flex: 1, }}>
             <View style={{ flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='cover' style={{ width: 25, height: 25, margin: 5 }} source={require('../image/backarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold',left:100 }}>Notification</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: '#FFFFFF', height: 1 }}></View>
            <View>
                <Image resizeMode='cover' style={{ width: 232, height: 156, alignSelf: 'center', top: 100, position: 'relative' }} source={require('../image/notifectionmn.png')} />
            </View>
            <View style={{ top: 120, width: '70%', alignSelf: 'center' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>No Notification Yet!</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>seems like you haven't done any activity yet</Text>
            </View>
        </View>
    );
}

export default Notification;
