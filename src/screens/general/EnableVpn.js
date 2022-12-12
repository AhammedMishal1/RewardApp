import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {FormButton, FormInput, HomeHeader, Separator} from '../../components';
import {MotiView} from 'moti'
import { Easing } from 'react-native-reanimated';
import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';

const _size = responsiveWidth(30);

const EnableVpn = ({onConnected,navigation,serverBtn,serverName,connectBtn}) => {
  const onHandleConnected = () =>{
    connectBtn()
    onConnected()
    setTimeout(() => {
      navigation.navigate('Advertisement')
    }, 8000);  
  }

  return (
    <View>
      {/* Vpn enable container */}
      <View style={styles.titleContainer}>
        <Separator width={responsiveWidth(6)} />
        <Text style={styles.title}>Enable VPN</Text>
      </View>

      <Separator height={responsiveWidth(20)} />

      <TouchableOpacity onPress={onConnected} activeOpacity={0.6} style={[styles.onIconView]}>
        <Image source={Images.onIcon} style={styles.onIcon} />
      </TouchableOpacity>

      <Separator height={responsiveWidth(5)} />
      <Separator height={responsiveWidth(10)} />

      {/* bottom container */}
      <View style={styles.buttonContainer}>
        {/* connect btn */}
        <FormButton 
          btnPress={onHandleConnected}
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
      <TouchableOpacity onPress={serverBtn} activeOpacity={0.5} style={styles.serverBtnView}>
        <Image source={Images.server} style={styles.serverImage} />
        <Separator width={responsiveWidth(4)} />
        <Text style={styles.serverText}>{serverName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(172, 78, 78, 0.25)',
    borderRadius: _size,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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

export default EnableVpn;
