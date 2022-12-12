import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Signup,
  Login,
  Welcome,
  Profile,
  Home,
  ForgotPassword,
  ResetPassword,
  Otp,
  Wallet,
  WelcomeScreen,
} from '../screens';
import BottomTabs from './BottomTabs';
import HomeTest from '../screens/general/HomeTest';
import VpnScreen from '../screens/general/VpnScreen';
import AdMobScreen from '../screens/general/AdMob';
import InterstitialAdsScreen from '../screens/ads/InterstitialAdsScreen';
import BrowserScreen from '../screens/general/BrowserScreen';
import Advertisement from '../screens/ads/Advertisement';



const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VpnScreen" component={VpnScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabs} />
        <Stack.Screen name="Advertisement" component={Advertisement} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="BrowserScreen" component={BrowserScreen} />
        <Stack.Screen name="AdMobScreen" component={AdMobScreen} />
        <Stack.Screen name="InterstitialAdsScreen" component={InterstitialAdsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="HomeTest" component={HomeTest} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
