import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, Icons, Images} from '../../constants';
import Separator from '../general/Separator';

const SearchBar = ({width, title, alignSelf}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width ? width : '90%',
          alignSelf: alignSelf ? alignSelf : 'auto',
        },
      ]}>
      <Image source={Icons.search} style={styles.icon} />

      <Separator width={responsiveWidth(2)} />
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchText}
          placeholder={title ? title : 'Search'}
          placeholderTextColor={Colors.DEFAULT_BLACK}
        />
      </View>

      <TouchableOpacity activeOpacity={0.4}>
        <Image source={Icons.mic} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: responsiveHeight(0.5),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    height: responsiveHeight(6),
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  locationIcon: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    resizeMode: 'contain',
  },
  filterIcon: {
    width: responsiveWidth(4.5),
    height: responsiveWidth(4.5),
    resizeMode: 'contain',
  },
  searchText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.POPPINS_MEDIUM,
    height: '100%',
    flex: 1,
    color: Colors.DEFAULT_BLACK,
    marginTop: responsiveWidth(1.4),
  },
  loactionView: {
    backgroundColor: 'white',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
    height: responsiveHeight(5),
    width: responsiveWidth(25),
  },
  locationText: {
    color: Colors.GREY3,
    fontSize: responsiveFontSize(1.5),
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});

export default SearchBar;
