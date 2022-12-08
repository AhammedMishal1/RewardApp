import React, {useState} from 'react';
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
import {FormButton, FormInput, HomeHeader, Separator} from '../../components';
import {MotiView} from 'moti'
import { Easing } from 'react-native-reanimated';

const _size = responsiveWidth(30);
const HomeTest = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
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

        <View style={styles.titleContainer}>
          <Separator width={responsiveWidth(6)} />
          <Text style={styles.title}>Enable VPN</Text>
        </View>

        <Separator height={responsiveWidth(20)} />

        <TouchableOpacity activeOpacity={0.6} style={[styles.onIconView]}>
          {[...Array(3).keys()].map((index) => {
            return (
              <MotiView
                from={{opacity:0.5,scale:1}}
                animate={{opacity:0,scale:4}}
                transition={{
                    type:'timing',
                    duration:2000,
                    easing: Easing.out(Easing.ease),
                    loop:true,
                    delay: index * 400,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.onIconView]}
              />
            );
          })}
          <Image source={Images.onIconWhite} style={styles.onIcon} />
        </TouchableOpacity>

        <Separator height={responsiveWidth(5)} />
        <Separator height={responsiveWidth(10)} />

        {/* bottom container */}
        <View style={styles.buttonContainer}>
          {/* connect btn */}
          <FormButton
            buttonTitle={'Connect'}
            height={responsiveWidth(12)}
            width={responsiveWidth(80)}
            borderRadius={responsiveWidth(2.5)}
            fontSize={responsiveFontSize(2)}
            fontFamily={Fonts.POPPINS_BOLD}
          />
        </View>
        <Separator height={responsiveWidth(5)} />

        {/* server btn */}
        <TouchableOpacity activeOpacity={0.5} style={styles.serverBtnView}>
          <Image source={Images.server} style={styles.serverImage} />
          <Separator width={responsiveWidth(4)} />
          <Text style={styles.serverText}>Servers</Text>
        </TouchableOpacity>
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
    height: _size,
    width: _size,
    backgroundColor: Colors.PRIMARY_COLOUR,
    borderRadius: _size,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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

export default HomeTest;
