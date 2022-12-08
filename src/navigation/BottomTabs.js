import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Fonts, Icons} from '../constants';
import {
  Chat,
  Companies,
  FindJobs,
  Home,
  HomeScreen,
  Profile,
  Rewards,
  Wallet,
} from '../screens';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Separator} from '../components';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const BottomTabs = () => {
  // animated tab indicator
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get('window').width;
    width = responsiveWidth(100);
    return width / 5;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let activeIcon, inActiveIcon, name;
            if (route.name === 'Home') {
              inActiveIcon = Icons.home;
              activeIcon = Icons.homeFilled;
              name = 'Home';
            } else if (route.name === 'Rewards') {
              inActiveIcon = Icons.reward;
              activeIcon = Icons.rewardfilled;
              name = 'Rewards';
            } else if (route.name === 'Wallet') {
              inActiveIcon = Icons.wallte;
              activeIcon = Icons.walletfilled;
              name = 'Wallet';
            } else if (route.name === 'Profile') {
              inActiveIcon = Icons.profile;
              activeIcon = Icons.profileFilled;
              name = 'Profile';
            }
            return (
              <View
                style={{
                  alignItems: 'center',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems:'center',
                  width: getWidth(),
                  paddingTop:responsiveWidth(4)
                }}>
                <Image
                  style={{
                    height: responsiveWidth(5),
                    width: responsiveWidth(5),
                    tintColor: focused ? Colors.DEFAULT_WHITE : Colors.LIGHT_WHITE,
                  }}
                  source={focused ? activeIcon : inActiveIcon}
                />
                <Separator height={responsiveWidth(2)} />
                <Text
                  style={{
                    color: focused ? Colors.DEFAULT_WHITE : Colors.LIGHT_WHITE,
                    fontFamily: Fonts.POPPINS_SEMI_BOLD,
                    fontSize: responsiveFontSize(1.4),
                  }}>
                  {name}
                </Text>
              </View>
            );
          },
          tabBarStyle: {
            backgroundColor: Colors.SECONDARY_COLOUR2,
            height: responsiveWidth(17),
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          gestureEnabled: false,
        })}>
        <Tab.Screen
          listeners={({navigation, route}) => ({
            // On Press Update
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            // On Press Update
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.25,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Rewards"
          component={Rewards}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            // On Press Update
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2.5,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Wallet"
          component={Wallet}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            // On Press Update
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.75,
                useNativeDriver: true,
              }).start();
            },
          })}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() / 2.5,
          height: responsiveHeight(1),
          backgroundColor: Colors.DEFAULT_WHITE,
          left: responsiveWidth(8),
          transform: [{translateX: tabOffsetValue}],
          bottom: responsiveWidth(15),
          position: 'absolute',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomTabs;
