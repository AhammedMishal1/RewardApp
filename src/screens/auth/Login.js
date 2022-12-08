import React,{useState} from 'react';
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
import LottieView from 'lottie-react-native';

const Login = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () =>{
      setIsLoading(true);
      setTimeout(() => {
        navigation.navigate('BottomTab')
      }, 2000);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/*eclipse1 with app name  */}
      <View>
        <Image source={Images.Ellipse1} style={styles.eclipse1} />
        <Text style={styles.appName}>App name</Text>
      </View>
      {/*eclipse2  */}
      <View style={{marginTop: responsiveWidth(-10)}}>
        <Image source={Images.Ellipse2} style={styles.eclipse2} />
        {/*cat welcome image  */}
        <Image source={Images.loginImage} style={styles.authenticationImage} />
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
            <Text style={styles.signupText}>Welcome Back!</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.signupText}>Login</Text>
        </View>

        <Separator height={responsiveWidth(3)} />

        <FormInput
          leftIcon={Icons.user}
          placeholderText={'User name/email ID'}
          borderWidth={responsiveWidth(0.3)}
          borderRadius={responsiveWidth(2)}
        />
        <Separator height={responsiveWidth(8)} />
        <FormInput
          isPassword
          leftIcon={Icons.lock}
          placeholderText={'Enter Password'}
          borderWidth={responsiveWidth(0.3)}
          borderRadius={responsiveWidth(2)}
        />
        <Separator height={responsiveWidth(3)} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Separator height={responsiveHeight(3)} />
        <Text style={styles.orLoginWith}>or Logiin with</Text>

        <Separator height={responsiveHeight(2)} />

        <View style={{flex: 1, justifyContent: 'space-around'}}>
          {/* social container */}
          <View style={styles.socailContainer}>
            <TouchableOpacity style={styles.socailIconContainer}>
              <Image source={Icons.Google} style={styles.SocilIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socailIconContainer}>
              <Image source={Icons.facebook} style={styles.SocilIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socailIconContainer}>
              <Image source={Icons.apple} style={styles.SocilIcon} />
            </TouchableOpacity>
          </View>
          <Separator height={responsiveHeight(2)} />
        </View>

        {/* bottom container */}
        <View style={styles.buttonContainer}>
        
          <FormButton
            buttonTitle={'Login'}
            btnPress={() =>  navigation.navigate('BottomTab')}
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
    height: responsiveHeight(12),
    width: responsiveWidth(22),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  eclipse2: {
    height: responsiveHeight(20),
    width: responsiveWidth(30),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
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
    height: responsiveHeight(3.3),
    width: responsiveWidth(3.3),
    resizeMode: 'contain',
  },
  titleContainer: {
    marginLeft: responsiveWidth(7),
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(2.5),
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
  registerImage: {
    height: responsiveHeight(19),
    width: responsiveWidth(90),
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    bottom: responsiveWidth(5),
  },
  content: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.LIGHT_GREY2,
    fontSize: responsiveFontSize(2),
  },
  secondContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
  },
  authenticationImage: {
    height: responsiveHeight(15),
    width: responsiveWidth(45),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: responsiveWidth(7),
    top: responsiveWidth(6.5),
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  orLoginWith: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.LIGHT_GREY2,
    fontSize: responsiveFontSize(1.4),
    alignSelf: 'center',
  },
  socailContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  socailIconContainer: {
    width: responsiveWidth(17),
    height: responsiveWidth(11),
    backgroundColor: Colors.DEFAULT_WHITE,
    borderWidth: responsiveHeight(0.15),
    borderColor: Colors.LIGHT_GREY3,
    borderRadius: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  SocilIcon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    resizeMode: 'contain',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottomText1: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.LIGHT_GREY2,
    fontSize: responsiveFontSize(1.6),
  },
  bottomText2: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.PRIMARY_BLUE,
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(1.6),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingRight: responsiveWidth(6),
  },
  forgotPasswordText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.PRIMARY_COLOUR,
    fontSize: responsiveFontSize(1.5),
  },
});

export default Login;
