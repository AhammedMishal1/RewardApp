import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FormButton, FormInput, Separator} from '../../components';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={{flex: 1}}>
        {/*eclipse1 with app name  */}
        <View>
          <Image source={Images.Ellipse1} style={styles.eclipse1} />
          <Text style={styles.appName}>App name</Text>
        </View>
        {/*eclipse2  */}
        <View style={{marginTop: responsiveWidth(-8)}}>
          <Image source={Images.Ellipse2} style={styles.eclipse2} />
        </View>

        <Image
          source={Images.forgotPassword}
          style={styles.authenticationImage}
        />
      </View>

      {/* Button Container */}
      <View style={styles.secondContainer}>
        <Separator height={responsiveWidth(0.5)} />
        {/* signup container */}
        <View style={styles.SignupImgContainer}>
          <View style={styles.signupView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Icons.arrowLeft} style={styles.arrowLeft} />
            </TouchableOpacity>
            <Separator width={responsiveWidth(4)} />
            <Text style={styles.signupText}>Forgot Password?</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Dont worry It happens. Please enter the email address / mobile
            number registered with your account
          </Text>
        </View>

        <Separator height={responsiveWidth(3)} />

        <FormInput
          leftIcon={Icons.user}
          placeholderText={'Email ID/ Mobile number'}
          borderColor={Colors.LIGHT_GREY5}
        />
        <Separator height={responsiveWidth(17)} />

        {/* bottom container */}
        <View style={styles.buttonContainer}>
          <FormButton
            buttonTitle={'Get OTP'}
            btnPress={() => navigation.navigate('Otp')}
            height={responsiveWidth(11)}
            width={responsiveWidth(80)}
            borderRadius={responsiveWidth(2.5)}
            fontSize={responsiveFontSize(2)}
            fontFamily={Fonts.POPPINS_BOLD}
          />
        </View>
        <Separator height={responsiveWidth(8)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOUR,
  },
  appName: {
    position: 'absolute',
    top: responsiveWidth(10),
    left: responsiveWidth(8),
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: responsiveFontSize(2.4),
  },
  eclipse1: {
    height: responsiveWidth(23),
    width: responsiveWidth(22),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  eclipse2: {
    height: responsiveWidth(43),
    width: responsiveWidth(36),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: responsiveWidth(-7),
  },
  SignupImgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupView: {
    flexDirection: 'row',
    padding: responsiveWidth(7),
    alignItems: 'center',
  },
  signupText: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveWidth(1),
  },
  arrowLeft: {
    height: responsiveWidth(5.3),
    width: responsiveWidth(3.3),
    resizeMode: 'contain',
  },
  titleContainer: {
    paddingHorizontal: responsiveWidth(7),
  },
  title: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.GREY3,
    fontSize: responsiveFontSize(1.6),
  },
  secondTitle: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(1),
  },
  registerImageView: {
    backgroundColor: Colors.SECONDARY_COLOUR,
    height: responsiveWidth(14),
  },
  content: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.LIGHT_GREY2,
    fontSize: responsiveFontSize(2),
  },
  secondContainer: {
    flex: 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
    justifyContent: 'space-between',
  },
  authenticationImage: {
    height: responsiveWidth(61),
    width: responsiveWidth(92),
    position: 'absolute',
    right: responsiveWidth(2),
    bottom: 0,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default ForgotPassword;
