import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import setting from '../Screen/setting';
import Home from '../Screen/Home';
import GameHistory from '../Screen/GameHistory';
import TransactionHistory from '../Screen/TransactionHistory';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import BottomTab from './BottemTab';
import MyProfile from '../Screen/MyProfile';

const Drawers = createDrawerNavigator();
const CustomDrawerItem = ({ label, imageSource, onPress, backgroundColor }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={backgroundColor}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginLeft: 10 }}>
      <Image source={imageSource} style={{ width: 30, height: 30, marginRight: 10, alignContent: 'center' }} />
      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000000' }}>{label}</Text>
    </View>
  </TouchableHighlight>
);

export default function Drawer() {
  const [selectedItem, setSelectedItem] = React.useState('');

  return (
    <Drawers.Navigator
      screenOptions={{ headerShown: false }}
      drawerContentOptions={{
        activeTintColor: '#2b090a',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <View>
              <View style={{ backgroundColor: 'pink', height: 120 }}>
            {/* onPress={() => navigation.navigate('MyProfile')} */}
                <TouchableOpacity  style={{ top: 10 }}>

                  <Image resizeMode='contain' style={{ alignSelf: 'center', width: 50, height: 50 }} source={require('../image/Avatar1.png')} />
                  <TouchableOpacity>

                    <Image resizeMode='contain' style={{ width: 18, height: 18, zIndex: 1, position: 'absolute', bottom: 5, right: 110 }} source={require('../image/pen.png')} />
                  </TouchableOpacity>
                  <Text style={{ color: '#000000', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                    Deepak Pradhan
                  </Text>
                  <Text style={{ color: '#000000', fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>
                    DeepakPradhan123@gamil.com
                  </Text>
                </TouchableOpacity>
              </View>
              
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: 'center', margin: 20 }}>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#bdd9c8', width: '45%', height: 40, alignItems: 'center', justifyContent: 'space-around', borderRadius: 10 }}>
                  <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold', }}>My Wallet</Text>
                  <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../image/wallet2.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#ffb8ba', width: '45%', height: 40, alignItems: 'center', justifyContent: 'space-around', borderRadius: 10 }}>
                  <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>Complete KYC</Text>
                  <Image resizeMode='contain' style={{ width: 15, height: 15 }} source={require('../image/kyc.png')} />
                </TouchableOpacity>
              </View> */}

            </View>

            <CustomDrawerItem
              label="Home"
              imageSource={require('../image/Home3.png')}
              onPress={() => {
                props.navigation.navigate('Home');
                setSelectedItem('Home');
              }}
              backgroundColor={selectedItem === 'Home' ? 'red' : 'red'} />

            <CustomDrawerItem
              label="Profile"
              imageSource={require('../image/Profile3.png')}
              onPress={() => {
                props.navigation.navigate('Profile');
                setSelectedItem('Profile');
              }}
              backgroundColor={selectedItem === 'Profile' ? 'red' : 'red'} />

            <CustomDrawerItem
              label="Setting"
              imageSource={require('../image/Setting3.png')}
              onPress={() => {
                props.navigation.navigate('Setting');
                setSelectedItem('Setting');
              }}
              backgroundColor={selectedItem === 'Setting' ? 'red' : 'red'} />

            <CustomDrawerItem
              label="GameHistory"
              imageSource={require('../image/Game3.png')}
              onPress={() => {
                props.navigation.navigate('GameHistory');
                setSelectedItem('GameHistory');
              }}
              backgroundColor={selectedItem === 'GameHistory' ? 'red' : 'red'} />

            <CustomDrawerItem
              label="TransactionHistory"
              imageSource={require('../image/transaction3.png')}
              onPress={() => {
                props.navigation.navigate('TransactionHistory');
                setSelectedItem('TransactionHistory');
              }}
              backgroundColor={selectedItem === 'TransactionHistory' ? 'red' : 'red'} />

            <CustomDrawerItem
              label="Notification"
              imageSource={require('../image/Notification3.png')}
              onPress={() => {
                props.navigation.navigate('Notification');
                setSelectedItem('Notification');
              }}
              backgroundColor={selectedItem === 'MyProfile' ? 'red' : 'red'} />
            <CustomDrawerItem
              label="MyProfile"
              imageSource={require('../image/Profile3.png')}
              onPress={() => {
                props.navigation.navigate('MyProfile');
                setSelectedItem('MyProfile');
              }}
              backgroundColor={selectedItem === 'MyProfile' ? 'red' : 'red'} />
          </View>
        );
      }}
    >
      <Drawers.Screen name="Home" component={BottomTab} />
      <Drawers.Screen name="Profile" component={Profile} />
      <Drawers.Screen name="Setting" component={setting} />
      <Drawers.Screen name="GameHistory" component={GameHistory} />
      <Drawers.Screen name="TransactionHistory" component={TransactionHistory} />
      <Drawers.Screen name="Notification" component={Notification} />
      <Drawers.Screen name="MyProfile" component={MyProfile} />
    </Drawers.Navigator>
  );
}
