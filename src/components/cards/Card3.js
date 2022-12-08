import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from '../../constants';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Card3 = ({image}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: responsiveWidth(44.9),
          alignItems: 'center',
        }}>
        <Image source={image} style={styles.cardImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cardImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    resizeMode: 'contain',
    marginBottom: responsiveWidth(10),
  },
});

export default Card3;
