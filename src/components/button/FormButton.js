import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons, Images} from '../../constants';

function FormButton({
  buttonTitle,
  disabled,
  backgroundColor,
  textColor,
  isLoading,
  width,
  height,
  fontSize,
  alignSelf,
  btnPress,
  borderColor,
  borderWidth,
  Icon,
  iconHeight,
  iconWidth,
  activeOpacity,
  fontFamily,
  borderRadius,
  children,
  ...rest
}) {
  return (
    <TouchableOpacity 
    disabled={disabled}
      activeOpacity={activeOpacity ? activeOpacity : 0.7}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : Colors.PRIMARY_COLOUR,
          borderColor: borderColor ? borderColor : 'rgba(74,144,226,1)',
          borderWidth: borderWidth ? borderWidth : 0,
          width: width ? width : '100%',
          height: height ? height : responsiveHeight(6.5),
          borderRadius: borderRadius ? borderRadius : responsiveHeight(1),
        },
      ]}
      onPress={btnPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            styles.btnText,
            {
              color: textColor ? textColor : 'white',
              fontSize: fontSize ? fontSize : responsiveHeight(2),
              fontFamily:fontFamily ? fontFamily : Fonts.POPPINS_SEMI_BOLD
            },
          ]}>
          {buttonTitle}
        </Text>
        {Icon && <Image source={Icon} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(6.5),
    backgroundColor: Colors.PRIMARY_COLOUR,
    borderRadius: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(2),
    marginTop:responsiveWidth(1),
  },
  icon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    resizeMode: 'contain',
    marginLeft:10,
  },
});

export default FormButton;
