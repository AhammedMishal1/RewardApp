import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {FormButton, FormInput, HomeHeader, Separator, Timer} from '../../components';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

const _size = responsiveWidth(30);

const Connected = ({onConnected}) => {

  return (
    <View>
      {/* Vpn enable container */}
      <View style={styles.titleContainer}>
        <Separator width={responsiveWidth(6)} />
        <Image source={Images.shieldCheck} style={styles.shieldCheck} />
        <Separator height={responsiveWidth(1)} />
        <Text style={styles.title}>Connected</Text>
        <Separator height={responsiveWidth(3)} />
        <Timer/>
      </View>

      <Separator height={responsiveWidth(8)} />

      <TouchableOpacity
        onPress={onConnected}
        activeOpacity={0.6}
        style={[styles.onIconView]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 0.5, scale: 1}}
              animate={{opacity: 0, scale: 3}}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                loop: true,
                delay: index * 400,
                repeatReverse: false,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.onIconView]}
            />
          );
        })}
        <Image source={Images.onIconWhite} style={styles.onIcon} />
      </TouchableOpacity>

      <Separator height={responsiveWidth(13)} />

      {/* indicator (upload/download) */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View activeOpacity={0.5} style={styles.serverBtnView}>
          <Image source={Images.download} style={styles.indicatorImage} />
          <Separator width={responsiveWidth(3)} />
          <View>
            <Text style={styles.subText}>DOWNLOAD</Text>
            <Text style={styles.subText}>
              <Text
                style={{
                  color: Colors.BLACK1,
                  fontFamily: Fonts.POPPINS_SEMI_BOLD,
                }}>
                40.3{'\t'}
              </Text>
              Mbps
            </Text>
          </View>
        </View>
        <Separator width={responsiveWidth(10)} />
        <View activeOpacity={0.5} style={styles.serverBtnView}>
          <Image source={Images.upload} style={styles.indicatorImage} />
          <Separator width={responsiveWidth(4)} />
          <View>
            <Text style={styles.subText}>UPLOAD</Text>
            <Text style={styles.subText}>
              <Text style={styles.numberText}>28.5{'\t'}</Text>
              Mbps
            </Text>
          </View>
        </View>
      </View>

      <Separator height={responsiveWidth(10)} />

      {/* connected country btn container */}
      <TouchableOpacity activeOpacity={0.6} style={styles.countryContainer}>
        <View style={styles.countryView}>
          <Image source={Images.italy} style={styles.countryFlag} />
          <Separator width={responsiveWidth(4)} />
          <View>
            <Text style={styles.location}>Paris, France</Text>
            <Text style={styles.ipAddress}>11.240..5549.52</Text>
          </View>
        </View>
        <Image source={Icons.longArrowRight} style={styles.longArrowRight} />
      </TouchableOpacity>

      <Separator height={responsiveWidth(8)} />

      <View style={styles.buttonContainer}>
        {/* disconnect btn */}
        <FormButton
          buttonTitle={'Disconnect'}
          btnPress={onConnected}
          height={responsiveWidth(12)}
          width={responsiveWidth(80)}
          borderRadius={responsiveWidth(2.5)}
          fontSize={responsiveFontSize(2)}
          fontFamily={Fonts.POPPINS_BOLD}
          borderWidth={responsiveWidth(0.3)}
          borderColor={Colors.PRIMARY_ORANGE}
          backgroundColor={Colors.DEFAULT_WHITE}
          textColor={Colors.PRIMARY_ORANGE}
        />
      </View>
      <Separator height={responsiveWidth(5)} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.PRIMARY_GREEN,
    fontSize: responsiveFontSize(2.4),
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
  onIcon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    resizeMode: 'contain',
  },
  shieldCheck: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    resizeMode: 'contain',
  },
  indicatorImage: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    resizeMode: 'contain',
  },
  subText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.GREY6,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveWidth(1),
  },
  numberText: {
    color: Colors.BLACK1,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  serverBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  countryContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.GREY5,
    height: responsiveWidth(14),
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: responsiveWidth(2.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(6),
  },
  countryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: responsiveFontSize(1.9),
    color: Colors.DEFAULT_WHITE,
    marginTop: responsiveWidth(0.5),
  },
  ipAddress: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: responsiveFontSize(1.7),
    color: Colors.DEFAULT_WHITE,
    marginTop: responsiveWidth(-1),
  },
  countryFlag: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    resizeMode: 'contain',
  },
  longArrowRight: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
  time: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.BLACK1,
    fontFamily: Fonts.POPPINS_BOLD,
  },
});

export default Connected;
