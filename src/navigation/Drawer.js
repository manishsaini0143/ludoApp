import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableHighlight, TouchableOpacity, ProgressBarAndroid, ScrollView } from 'react-native';
import setting from '../Screen/setting';
import Home from '../Screen/Home';
import GameHistory from '../Screen/GameHistory';
import TransactionHistory from '../Screen/TransactionHistory';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import BottomTab from './BottemTab';
import MyProfile from '../Screen/MyProfile';
import MyStats$Voucher from '../Screen/MyStats$Voucher';
import ResponsibleGaming from '../Screen/ResponsibleGaming';
import Referrals from '../Screen/Referrals';
import Tutorial from '../Screen/Tutorial';
import MyQuiz from '../Screen/MyQuiz';
import Instagrma from '../Screen/Instagrma';
import Telegram from '../Screen/Telegram';

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

export default function Drawer({ navigation }) {
  const [selectedItem, setSelectedItem] = React.useState('');
  const userProgress = 60;

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
              <View style={{ backgroundColor: '#2b090a', height: 120 }}>
                {/* onPress={() => navigation.navigate('MyProfile')} */}
                <TouchableOpacity onPress={() => navigation.navigate('MyProfile')} style={{ top: 10 }}>

                  <Image resizeMode='contain' style={{ alignSelf: 'center', width: 50, height: 50 }} source={require('../image/Avatar1.png')} />
                  <TouchableOpacity>

                    <Image resizeMode='contain' style={{ width: 18, height: 18, zIndex: 1, position: 'absolute', bottom: 5, right: 110 }} source={require('../image/pen.png')} />
                  </TouchableOpacity>
                  <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: 'center',fontFamily:'JosefinSans-Bold' }}>
                    Deepak Pradhan
                  </Text>
                  <Text style={{ color: '#FFFFFF', fontSize: 12, textAlign: 'center',fontFamily:'Poppins-Bold'}}>
                    DeepakPradhan123@gamil.com
                  </Text>
                </TouchableOpacity>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={userProgress / 100} // Adjust the progress value as needed
                  style={{ marginTop: 10 }}
                />
              </View>

            </View>
            <ScrollView>

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
                label="My Profile"
                imageSource={require('../image/Profile3.png')}
                onPress={() => {
                  props.navigation.navigate('MyProfile');
                  setSelectedItem('MyProfile');
                }}
                backgroundColor={selectedItem === ' MyStats$Voucher' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Game History"
                imageSource={require('../image/Game3.png')}
                onPress={() => {
                  props.navigation.navigate('GameHistory');
                  setSelectedItem('GameHistory');
                }}
                backgroundColor={selectedItem === 'GameHistory' ? 'red' : 'red'} />

              <CustomDrawerItem
                label="Transaction History"
                imageSource={require('../image/transaction3.png')}
                onPress={() => {
                  props.navigation.navigate('TransactionHistory');
                  setSelectedItem('TransactionHistory');
                }}
                backgroundColor={selectedItem === 'TransactionHistory' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Referrals"
                imageSource={require('../image/referrals.png')}
                onPress={() => {
                  props.navigation.navigate('Referrals');
                  setSelectedItem('Referrals');
                }}
                backgroundColor={selectedItem === 'Referrals' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Notification"
                imageSource={require('../image/Notification3.png')}
                onPress={() => {
                  props.navigation.navigate('Notification');
                  setSelectedItem('Notification');
                }}
                backgroundColor={selectedItem === 'MyProfile' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="My Played Quiz"
                imageSource={require('../image/Quiz.png')}
                onPress={() => {
                  props.navigation.navigate('MyQuiz');
                  setSelectedItem('MyQuiz');
                }}
                backgroundColor={selectedItem === ' MyStats$Voucher' ? 'red' : 'red'} />
              <CustomDrawerItem
                label=" MyStats $ Voucher"
                imageSource={require('../image/stats.png')}
                onPress={() => {
                  props.navigation.navigate(' MyStats$Voucher');
                  setSelectedItem(' MyStats$Voucher');
                }}
                backgroundColor={selectedItem === 'ResponsibleGaming' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Responsible Gaming"
                imageSource={require('../image/Resgames.png')}
                onPress={() => {
                  props.navigation.navigate('ResponsibleGaming');
                  setSelectedItem('ResponsibleGaming');
                }}
                backgroundColor={selectedItem === ' MyStats$Voucher' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Tutorial"
                imageSource={require('../image/Tutorial.png')}
                onPress={() => {
                  props.navigation.navigate('Tutorial');
                  setSelectedItem('Tutorial');
                }}
                backgroundColor={selectedItem === ' MyStats$Voucher' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Setting"
                imageSource={require('../image/Setting3.png')}
                onPress={() => {
                  props.navigation.navigate('Setting');
                  setSelectedItem('Setting');
                }}
                backgroundColor={selectedItem === 'Setting' ? 'red' : 'red'} />
              <View style={{ height: 2, width: '100%', backgroundColor: 'red' }}></View>
              <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', left: 5 }}>
                Social Media
              </Text>
              <CustomDrawerItem
                label="Instagrma"
                imageSource={require('../image/Insta.png')}
                onPress={() => {
                  props.navigation.navigate('Instagrma');
                  setSelectedItem('Instagrma');
                }}
                backgroundColor={selectedItem === 'Instagrma' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="Telegram"
                imageSource={require('../image/telegram.png')}
                onPress={() => {
                  props.navigation.navigate('Telegram');
                  setSelectedItem('Telegram');
                }}
                backgroundColor={selectedItem === 'Telegram' ? 'red' : 'red'} />
              <CustomDrawerItem
                label="You Tube"
                imageSource={require('../image/youto.png')}
                onPress={() => {
                  props.navigation.navigate('Youtube');
                  setSelectedItem('Youtube');
                }}
                backgroundColor={selectedItem === 'Youtube' ? 'red' : 'red'} />
            </ScrollView>


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
      <Drawers.Screen name=" MyStats$Voucher" component={MyStats$Voucher} />
      <Drawers.Screen name="ResponsibleGaming" component={ResponsibleGaming} />
      <Drawers.Screen name="Referrals" component={Referrals} />
      <Drawers.Screen name="Tutorial" component={Tutorial} />
      <Drawers.Screen name="MyQuiz" component={MyQuiz} />
      <Drawers.Screen name="Instagrma" component={Instagrma} />
      <Drawers.Screen name="Telegram" component={Telegram} />
    </Drawers.Navigator>
  );
}
