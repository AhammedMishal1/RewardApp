import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  FocusAwareStatusBar,
  FormButton,
  FormInput,
  HomeHeader,
  Separator,
} from '../../components';
import EnableVpn from './EnableVpn';
import Connected from './Connected';

const Home = ({navigation}) => {
  const [connected, setConnected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.PRIMARY_COLOUR}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={{flex: 1 / 7}}>
        <HomeHeader badgeCount={4} />
      </View>
      {/*  Container */}
      <View style={styles.secondContainer}>
        <Separator height={responsiveWidth(6)} />

        {/* Vpn enable container */}
        {!connected ? (
          <EnableVpn onConnected={() => setConnected(!connected)} />
        ) : (
          <Connected onConnected={() => setConnected(!connected)} />
        )}

        <Separator height={responsiveWidth(8)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOUR,
  },
  signupView: {
    flexDirection: 'row',
    padding: responsiveWidth(7),
    alignItems: 'center',
  },
  arrowLeft: {
    height: responsiveWidth(5.3),
    width: responsiveWidth(3.3),
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveWidth(1),
  },
  secondTitle: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(1),
  },
  secondContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  onIconView: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    backgroundColor: 'rgba(172, 78, 78, 0.25)',
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: responsiveWidth(0.3),
    borderColor: '#deb8b8',
  },
  notificationIcon: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
  onIcon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    resizeMode: 'contain',
  },
  serverImage: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  serverText: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREY4,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveWidth(1),
  },
  serverBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Home;
