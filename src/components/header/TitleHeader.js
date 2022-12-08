import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons, Images} from '../../constants';

function TitleHeader({
  fontSize,
  btnPress,
  rightIcon,
  title,
  noPadding,
  ...rest
}) {
  return (
    <View
      style={[
        styles.container,
        {paddingHorizontal: noPadding ? 0 : responsiveWidth(4)},
      ]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={btnPress}
          style={styles.leftIconButton}>
          <Image source={Icons.longArrowLeft} style={styles.rightButton} />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.title,
          {fontSize: fontSize ? fontSize : responsiveFontSize(3)},
        ]}>
        {title}
      </Text>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Image source={rightIcon} style={styles.leftButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  leftButton: {
    width: responsiveWidth(6),
    height: responsiveHeight(5),
    resizeMode: 'contain',
    marginRight: 10,
  },
  rightButton: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
  leftWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    left: 8,
    width: 120,
    height: 44,
  },
  leftIconButton: {
    flexDirection: 'row',
  },
  leftIcon: {
    color: '#007AFF',
    fontSize: 32,
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    lineHeight: 17,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: responsiveFontSize(2.2) * 2.6,
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {},
  rightIcon: {
    backgroundColor: 'transparent',
    color: '#007AFF',
    fontSize: 32,
  },
});
export default TitleHeader;
