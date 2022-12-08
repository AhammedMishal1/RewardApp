import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';


const Card2 = ({heading, subHeading, image}) => {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.cardView}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardTextView}>
        <Text style={styles.cardHeading}>{heading}</Text>
        <Text style={styles.cardSubHeading}>{subHeading}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: responsiveWidth(75),
    height: responsiveWidth(40),
    resizeMode: 'contain',
    borderRadius: responsiveWidth(2.2),
  },
  cardHeading: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: responsiveFontSize(2.8),
  },
  cardSubHeading: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveWidth(-1),
  },
  cardTextView: {
    position: 'absolute',
    paddingLeft: responsiveWidth(5),
    bottom: responsiveWidth(12.5),
  },
});

export default Card2;
