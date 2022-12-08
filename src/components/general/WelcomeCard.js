import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Separator from './Separator';

const WelcomeCard = ({title, content, image, backgroundColor, index, list}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <ImageBackground
        source={Images.splashContainer}
        style={{
          width: responsiveWidth(100),
          flexWrap: 'wrap',
          height: responsiveHeight(73),
          alignItems: 'center',
          paddingLeft: 0,
          paddingVertical: 20,
        }}
        resizeMode="stretch">
        <View>
          {index === 2 ? (
              <View style={styles.buttonContainer}>
                <Text style={styles.getStartedText}>
                  Get Started in 3 steps
                </Text>
              </View>
          ) : (
            <View style={styles.buttonContainer}>
              <Text style={styles.appName}>App Name</Text>
              <TouchableOpacity
                onPress={() => list.current.scrollToEnd()}
                style={{zIndex: 1}}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>
          )}
          <Separator height={responsiveWidth(3)}/>
          <Image
            resizeMode="contain"
            style={[styles.image, {marginTop: -70}]}
            source={Images[image]}
          />
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
  },
  image: {
    height: responsiveHeight(80),
    width: responsiveWidth(100),
  },
  titleText: {
    fontSize: responsiveFontSize(3.2),
    color: Colors.BLACK6,
    marginBottom: responsiveHeight(2),
    fontFamily: Fonts.POPPINS_BOLD,
  },
  contentText: {
    fontSize: responsiveFontSize(2),
    color: Colors.GREY3,
    fontFamily: Fonts.POPPINS_REGULAR,
    textAlign:'center'
  },
  textContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:responsiveWidth(5)
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.DEFAULT_WHITE,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  appName: {
    color: Colors.PRIMARY_COLOUR,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: responsiveFontSize(2.2),
  },
  skipText: {
    color: Colors.GREY3,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: responsiveFontSize(2),
  },
  getStartedText:{
    color: Colors.LIGHT_UNDERLINE,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: responsiveFontSize(2.6),
  }
});

export default WelcomeCard;
