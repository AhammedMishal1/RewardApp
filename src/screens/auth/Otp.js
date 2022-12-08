import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FormButton, FormInput, Separator} from '../../components';

const Otp = ({navigation}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
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
          source={Images.resetImage}
          style={styles.authenticationImage}
        />
      </View>

      {/* Button Container */}
      <View style={styles.secondContainer}>
        {/* signup container */}
        <View style={styles.SignupImgContainer}>
          <View style={styles.signupView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Icons.arrowLeft} style={styles.arrowLeft} />
            </TouchableOpacity>
            <Separator width={responsiveWidth(4)} />
            <Text style={styles.signupText}>Enter OTP</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            A 4 digit code has been sent to your registered number +91 - *******
            ***28
          </Text>
        </View>

        <Separator height={responsiveWidth(3)} />

        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              selectionColor={Colors.PRIMARY_BLUE}
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                setOtp({...otp, 1: text});
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              selectionColor={Colors.PRIMARY_BLUE}
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
                setOtp({...otp, 2: text});
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              selectionColor={Colors.PRIMARY_BLUE}
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                setOtp({...otp, 3: text});
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              selectionColor={Colors.PRIMARY_BLUE}
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                setOtp({...otp, 4: text});
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>

        <Separator height={responsiveWidth(9)} />

        {/* bottom container */}
        <View style={styles.buttonContainer}>
          <FormButton
            buttonTitle={'Confirm OTP'}
            btnPress={() => navigation.navigate('ResetPassword')}
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
    bottom: responsiveWidth(-3),
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  otpContainer: {
    marginHorizontal: responsiveWidth(9),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: responsiveHeight(1.4),
    backgroundColor: Colors.LIGHT_GREY4,
  },
  otpText: {
    fontSize: responsiveFontSize(3),
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.6),
  },
});

export default Otp;
