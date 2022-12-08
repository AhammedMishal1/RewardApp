import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {Badge} from 'react-native-paper';
const HomeHeader = ({badgeCount,btnPress,badgeClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>

        <Text style={styles.heroTitle}>Hi, Jenny!</Text>
        <TouchableOpacity onPress={badgeClick}>
          <Image source={Icons.bell} style={styles.leftImage} />
          <Badge
            size={responsiveWidth(4.5)}
            style={styles.badge}>
            {badgeCount}
          </Badge>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(9),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(8),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge:{
    position: 'absolute',
    top: -responsiveHeight(1),
    right: -responsiveWidth(1),
    backgroundColor: Colors.SECONDARY_COLOUR1,
    color: Colors.DEFAULT_WHITE,
  },
  leftImage: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  rightImage: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    resizeMode: 'contain',
  },
  heroTitle:{
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(1),
  },
});

export default HomeHeader;
