import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  FocusAwareStatusBar,
  Separator,
  TitleHeader,
} from '../../components';

const Wallet = ({navigation}) => {

  const data = [1,2,3,4]

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.PRIMARY_COLOUR}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={{flex: 1 / 7}}>
        <TitleHeader title={'Wallet'} />
      </View>
      {/*  Container */}
      <View style={styles.secondContainer}>
        <View style={styles.walletContainer}>
          <View style={styles.pointContainer}>
            <Text style={styles.pointText}>Your Points</Text>
            <Separator height={responsiveWidth(4)} />
            <Text style={styles.points}>4600</Text>
          </View>

          <View style={styles.estimateContainer}>
            <Text style={styles.estimateText}>Estimated Value</Text>
            <Separator height={responsiveWidth(4)} />
            <Text style={styles.estimatePrice}>$35.42</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Separator height={responsiveWidth(28)} />
          <Text style={styles.heading}>Total Stats</Text>
          <Separator height={responsiveWidth(5)} />
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image source={Images.ads} style={styles.boxIcon} />
              <Separator height={responsiveWidth(2)} />
              <Text style={styles.boxText}>No of Ads</Text>
              <Text style={styles.boxPoints}>120</Text>
            </View>
            <Separator width={responsiveWidth(8)} />
            <View style={[styles.box, {backgroundColor: '#5DDA7E'}]}>
              <Image source={Images.trophy} style={styles.boxIcon} />
              <Separator height={responsiveWidth(2)} />
              <Text style={styles.boxText}>Points Earned</Text>
              <Text style={styles.boxPoints}>1200</Text>
            </View>
          </View>
          </View>
          <Separator height={responsiveWidth(3)} />
          <ScrollView contentContainerStyle={styles.scrollContainer}  showsVerticalScrollIndicator={false} >
          <Separator height={responsiveWidth(7)} />
            <Text style={styles.heading}>Recent Stats</Text>
            <Separator height={responsiveWidth(5)} />
            {
              data.map((item,index)=>(
                <View key={index} style={styles.recentStatsView}>
                <View style={styles.recentStatsItem}>
                  <Image source={Icons.clock} style={styles.recentIcons} />
                  <Text style={styles.recentHeading}>Time range</Text>
                  <Text style={styles.recentSubheading}>15:00-16:00</Text>
                </View>
                <Separator width={responsiveWidth(5)}/>
                <View style={styles.recentStatsItem}>
                  <Image source={Icons.computer} style={styles.recentIcons} />
                  <Text style={styles.recentHeading}>No.of Ads</Text>
                  <Text style={styles.recentSubheading}>8</Text>
                </View>
                <Separator width={responsiveWidth(5)}/>
                <View style={styles.recentStatsItem}>
                  <Image source={Icons.badge} style={styles.recentIcons} />
                  <Text style={styles.recentHeading}>Points earned</Text>
                  <Text style={styles.recentSubheading}>45</Text>
                </View>
              </View>
              ))
            }
               <Separator height={responsiveWidth(8)} />
          </ScrollView>
   
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOUR,
  },
  signupView: {
    flexDirection: 'row',
    padding: responsiveWidth(7),
    alignItems: 'center',
  },
  arrowLeft: {
    height: responsiveWidth(5.3),
    width: responsiveWidth(3.3),
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(2.7),
    marginTop: responsiveWidth(1),
  },
  secondTitle: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_GREY,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(1),
  },
  secondContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    width: '100%',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  onIconView: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    backgroundColor: 'rgba(172, 78, 78, 0.25)',
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: responsiveWidth(0.3),
    borderColor: '#deb8b8',
  },
  notificationIcon: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
  onIcon: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    resizeMode: 'contain',
  },
  serverImage: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  serverText: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREY4,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveWidth(1),
  },
  serverBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  walletContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    width: responsiveWidth(80),
    height: responsiveWidth(30),
    position: 'absolute',
    top: responsiveWidth(-10),
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
  },
  pointContainer: {
    backgroundColor: Colors.SECONDARY_COLOUR2,
    width: '50%',
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    paddingVertical: responsiveWidth(2),
  },
  pointText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  points: {
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  estimateText: {
    color: Colors.SECONDARY_COLOUR2,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  estimatePrice: {
    color: Colors.SECONDARY_COLOUR2,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  estimateContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '50%',
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    paddingVertical: responsiveWidth(2),
  },
  heading: {
    color: Colors.SECONDARY_COLOUR2,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.POPPINS_BOLD,
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(6),
  },
  scrollContainer: {
    paddingHorizontal: responsiveWidth(6),
  },
  boxContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#FE3EAA',
    width: responsiveWidth(40),
    height: responsiveWidth(33),
    borderRadius: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  boxPoints: {
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(3.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  boxIcon: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    resizeMode: 'contain',
  },
  recentStatsView: {
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    height: responsiveWidth(36),
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    paddingVertical:responsiveWidth(5),
    marginBottom:responsiveWidth(6)
  },
  recentIcons: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    resizeMode: 'contain',
  },
  recentStatsItem: {
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
  recentHeading: {
    color: '#6B6C6C',
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.POPPINS_BOLD,
  },
  recentSubheading: {
    color: Colors.BLACK1,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.POPPINS_BOLD,
  },
});
export default Wallet;
