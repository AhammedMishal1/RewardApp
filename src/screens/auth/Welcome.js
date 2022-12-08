import React, {useState} from 'react';
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
import {FormButton, Separator} from '../../components';

const Welcome = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = () => {
    setIsLoading(true), navigation.navigate('Login');
  };

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
        <Image source={Images.welcomeCats} style={styles.welcomeCats} />
        <Image source={Images.star1} style={styles.star1} />
      </View>

      <Image source={Images.path1} style={styles.path1} />

      {/* Button Container */}
      <View style={styles.secondContainer}>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.secondTitle}>Let’s Get started</Text>
        </View>
        <Separator height={responsiveWidth(23)} />
        <View style={styles.registerImageView}>
          <Image source={Images.register} style={styles.registerImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Register</Text>
        </View>

        <View style={styles.buttonContainer}>
          <FormButton
            buttonTitle={'Login'}
            btnPress={() => navigation.navigate('Login')}
            height={responsiveWidth(11)}
            width={responsiveWidth(80)}
            fontSize={responsiveFontSize(2.1)}
            fontFamily={Fonts.POPPINS_BOLD}
          />
          <Separator height={responsiveWidth(7)} />
          <FormButton
            buttonTitle={'Signup'}
            height={responsiveWidth(11)}
            width={responsiveWidth(80)}
            textColor={Colors.PRIMARY_COLOUR}
            backgroundColor={'white'}
            borderColor={Colors.PRIMARY_COLOUR}
            btnPress={() => navigation.navigate('Signup')}
            borderWidth={responsiveWidth(0.3)}
            fontSize={responsiveFontSize(2.1)}
            fontFamily={Fonts.POPPINS_BOLD}
          />
        </View>
        <Separator height={responsiveWidth(0.1)} />
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
    height: responsiveHeight(23),
    width: responsiveWidth(35),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    borderStartColor: 'green',
  },
  welcomeCats: {
    height: responsiveHeight(20),
    width: responsiveWidth(60),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: responsiveWidth(-10),
    position: 'absolute',
    top: responsiveWidth(17),
    right: responsiveWidth(5),
  },
  star1: {
    height: responsiveHeight(3),
    width: responsiveWidth(3),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: responsiveWidth(-10),
    position: 'absolute',
    bottom: 0,
    right: responsiveWidth(19),
  },
  path1: {
    height: responsiveHeight(4),
    width: responsiveWidth(6),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: responsiveWidth(5),
    marginTop: responsiveWidth(-5),
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
    justifyContent: 'space-evenly',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
  },
  buttonContainer: {
    alignSelf: 'center',
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
  or2: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.LIGHT_GREY2,
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.6),
    marginVertical: responsiveHeight(2),
  },
});

export default Welcome;
