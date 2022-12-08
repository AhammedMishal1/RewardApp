import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {Colors, Icons} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const TextInputBox = ({
  placeholder,
  placeholderTextColor,
  keyboardType,
  width,
  height,
  multiline,
  textAlignVertical,
  secureTextEntry,
  isIcon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Colors.GREY12
        }
        secureTextEntry={secureTextEntry}
        style={[
          styles.container,
          {
            width: width ? width : '100%',
            height: height ? height : responsiveHeight(5),
            textAlignVertical: textAlignVertical ? textAlignVertical : 'auto',
          },
        ]}
      />
      {isIcon && (
        <Image
          source={Icons.checkBlue}
          style={{
            width: responsiveWidth(5),
            height: responsiveWidth(5),
            resizeMode: 'contain',
            right: responsiveWidth(8),
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_WHITE,
    height: responsiveHeight(5),
    paddingLeft: responsiveWidth(3),
    color: Colors.BLACK2,
  },
});

export default TextInputBox;
