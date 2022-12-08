import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons} from '../../constants';

const RightIcon = ({showPassword, btnPress, ...rest}) => {
  return (
    <TouchableOpacity onPress={btnPress}>
      <Image
        source={showPassword ? Icons.eyeOn : Icons.eyeOff}
        style={styles.ButtonLogo}
      />
    </TouchableOpacity>
  );
};

function FormInput({
  placeholderText,
  leftIcon,
  secureTextEntry,
  isPassword,
  borderWidth,
  borderRadius,
  lineMode,
  borderColor,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: borderWidth ? borderWidth : 0,
          borderRadius: borderRadius ? borderRadius : 0,
          paddingHorizontal: lineMode ? 0 : responsiveWidth(4),
          borderColor: borderColor ? borderColor : Colors.LIGHT_UNDERLINE,
        },
      ]}>
      <Image source={leftIcon} style={styles.ButtonLogo} />
      <TextInput
        placeholderTextColor={Colors.LIGHT_GREY2}
        placeholder={placeholderText}
        style={styles.inputStyle}
        secureTextEntry={isPassword ? showPassword : false}
      />
      {isPassword && (
        <RightIcon
          btnPress={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: responsiveWidth(0.3),
    borderColor: Colors.LIGHT_UNDERLINE,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    width: responsiveWidth(85),
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(4),
    height: responsiveWidth(11),
  },
  ButtonLogo: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    resizeMode: 'contain',
  },
  inputStyle: {
    flex: 1,
    color: Colors.DEFAULT_BLACK,
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'stretch',
    paddingLeft: responsiveWidth(2),
    fontFamily: Fonts.POPPINS_MEDIUM,
    height: responsiveWidth(12),
    paddingLeft: responsiveWidth(2.5),
  },
});

export default FormInput;
