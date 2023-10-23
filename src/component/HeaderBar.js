import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = (props) => {
    const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>{openDrawer()}}>

                    <Image resizeMode='cover' style={{ width: 46, height: 26, margin: 10 }} source={require('../image/menu.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity >

                    <Image resizeMode='cover' style={{ width: 42, height: 40, }} source={require('../image/Men.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 2, borderColor: '#FFFFFF', alignItems: 'center', width: 140, justifyContent: 'center' }}>
                    <Image resizeMode='contain' style={{ width: 40, height: 35, }} source={require('../image/coin.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 20, margin: 5 }}>
                        ₹200
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddPayment')} style={{ backgroundColor: '#FE0000', width: 30, height: 30, alignItems: 'center', borderRadius: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> 
  );
}

export default HeaderBar;
