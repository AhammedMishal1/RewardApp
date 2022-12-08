import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Separator from '../general/Separator';

const Card1 = ({image, title}) => {
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity activeOpacity={.6} style={{margin: responsiveWidth(2.5), alignItems: 'center'}}>
        <Image style={styles.categoryIcon} source={image} />
        <Separator height={responsiveWidth(2.5)} />
        <Text style={styles.categoryText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    color: Colors.CINDER,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: responsiveFontSize(1.7),
  },
  categoryIcon: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    resizeMode: 'contain',
  },
});

export default Card1;
