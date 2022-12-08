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
// import AdMobScreen from '../screens/general/AdMob';


const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        {/* <Stack.Screen name="AdMobScreen" component={AdMobScreen} /> */}
        <Stack.Screen name="VpnScreen" component={VpnScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Home" component={Home} />
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
