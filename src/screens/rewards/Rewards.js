import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FormButton, Separator} from '../../components';
import {Colors, Fonts, Images} from '../../constants';

const Rewards = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.contentContainer}>
        <Image source={Images.developer} style={styles.deliveryBoy} />
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>App is on Development</Text>
          <Separator height={responsiveWidth(5)} />

          {/* get started btn */}
          <FormButton
            buttonTitle={'Rewards :)'}
            width={responsiveWidth(75)}
            fontSize={responsiveFontSize(2.3)}
            height={responsiveWidth(16)}
            borderRadius={responsiveWidth(15)}
            btnPress={() => navigation.navigate('Welcome')}
          />
        </View>
      </View>
      <Separator height={responsiveWidth(10)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  deliveryBoy: {
    width: responsiveWidth(100),
    height: responsiveWidth(70),
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemContainer: {
    alignItems: 'center',
  },
  heading: {
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: responsiveFontSize(3),
  },
  subHeading: {
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: responsiveFontSize(1.75),
  },
});

export default Rewards;
