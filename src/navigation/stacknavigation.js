import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Loginotp from '../Screen/Loginotp';
import Home from '../Screen/Home';
import BottomTab from './BottemTab';
import Profile from '../Screen/Profile';
import Singin from '../Screen/Singin';
import wallet from '../Screen/wallet';
import Games from '../Screen/Games';
import Drawer from './Drawer';
import Game1 from '../Screen/Game1';
import Game2 from '../Screen/Game2';
import Game3 from '../Screen/Game3';
import AddPayment from '../Screen/AddPayment';
import PayPament from '../Screen/PayPament';
// import CreditCard from '../Screen/CreditCard';
import Creditcard1 from '../Screen/Creditcard1';
import CardAdd from '../Screen/CardAdd';
import ProfileUpdate from '../Screen/ProfileUpdate';
import TermsAndCondition from '../Screen/TermsAndCondition';
import Legality from '../Screen/Legality';
import PrivacyPolicy from '../Screen/PrivacyPolicy';
import Cancellationpolicy from '../Screen/Cancellationpolicy';
import Contactus from '../Screen/Contactus';
import Aboutus from '../Screen/Aboutus';
import UpdateAadahar from '../Screen/UpdateAadahar';
import InviteFriends from '../Screen/InviteFriends';
import Myreferrals from '../Screen/Myreferrals';
import Withdraw from '../Screen/Withdraw';
import Applycopans from '../Screen/Applycopans';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }}>


        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singin" component={Singin} />

        <Stack.Screen name="Loginotp" component={Loginotp} />
        <Stack.Screen name="wallet" component={wallet} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Game2" component={Game2} />
        <Stack.Screen name="Game3" component={Game3} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
        <Stack.Screen name="PayPament" component={PayPament} />
        <Stack.Screen name="Creditcard1" component={Creditcard1} />
        <Stack.Screen name="CardAdd" component={CardAdd} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <Stack.Screen name="Legality" component={Legality} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Cancellationpolicy" component={Cancellationpolicy} />
        <Stack.Screen name="Contactus" component={Contactus} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
        <Stack.Screen name="UpdateAadahar" component={UpdateAadahar} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="Myreferrals" component={Myreferrals} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="Applycopans" component={Applycopans} />
        {/* <Stack.Screen name="CreditCard" component={CreditCard} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;