import React, {createRef, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Colors, Fonts, Icons, Images} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  FocusAwareStatusBar,
  FormButton,
  FormInput,
  HomeHeader,
  Separator,
  TitleHeader,
} from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const Profile = ({navigation}) => {
  const [image, setImage] = useState();
  bs = React.createRef();
  fall = new Animated.Value(1);

  const details = [
    {id: 1, icon: Icons.person, title: 'Account Details'},
    {id: 2, icon: Icons.settings, title: 'Settings'},
    {id: 3, icon: Icons.contactus, title: 'Contact us'},
  ];

  const contactDetails = [
    {id: 1, icon: Icons.mail, title: 'jenny@gmail.com'},
    {id: 2, icon: Icons.phonenumber, title: '+91-98621331626'},
    {id: 3, icon: Icons.location, title: 'Jaipur, India'},
  ];

  // take Photo From Camera
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxHeight: 300,
      compressImageMaxWidth: 300,
      height: 300,
      width: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };
  // choose Photo From Library
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      height: 300,
      width: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View
      style={{
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 16,
        height: 450,
        alignItems: 'center',
      }}>
      <Text style={styles.bottomSheetHeading}>Upload Photo</Text>
      <Text style={styles.bottomSheetSubHeading}>choose your profile pic</Text>
      <Separator height={responsiveWidth(6)} />

      <FormButton buttonTitle={'Take Photo'} btnPress={takePhotoFromCamera} />
      <Separator height={responsiveWidth(3)} />
      <FormButton
        buttonTitle={'Choose From Library'}
        btnPress={choosePhotoFromLibrary}
      />
      <Separator height={responsiveWidth(3)} />
      <FormButton
        btnPress={() => bs.current.snapTo(1)}
        buttonTitle={'Cancel'}
      />
    </View>
  );
  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.pannelHeader}>
        <View style={styles.pannelHandle}></View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* bottomSheet */}
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />

      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.PRIMARY_COLOUR}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={{flex: 1 / 9}}>
        <TitleHeader title={'Profile'} />
      </View>
      {/*  Container */}
      <Animated.View
        style={[
          styles.secondContainer,
          {opacity: Animated.add(0.2, Animated.multiply(fall, 1.0))},
        ]}> 
        <Separator height={responsiveWidth(5)} />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {/* user view */}
          <View style={styles.userDetails}>
            <View style={styles.userProfile}>
              <Image source={image ? {uri: image} : Images.avatar1} style={styles.userImage} />
              <Image source={Images.dashedCircle} style={styles.dashedCircle} />
              <TouchableOpacity onPress={() => bs.current.snapTo(0)} style={styles.editIconView}>
                <Image source={Icons.edit} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
            <Separator height={responsiveWidth(3)} />
            <Text style={styles.userName}>Jenny Richard</Text>
            <Separator height={responsiveWidth(1)} />
            <Text style={styles.age}>28 yrs / Male</Text>
          </View>

          <Separator height={responsiveWidth(4)} />

          {/* contact view */}
          <View style={styles.box}>
            {contactDetails.map((contact, index) => (
              <View key={index} style={styles.contactView}>
                <Separator width={responsiveWidth(4)} />

                <Image source={contact.icon} style={styles.boxIcon} />
                <Separator width={responsiveWidth(4)} />
                <Text style={styles.boxText} numberOfLines={1}>
                  {contact.title}
                </Text>
              </View>
            ))}
          </View>

          <Separator height={responsiveWidth(10)} />

          {/* detail's button */}
          {details.map((detail, index) => (
            <TouchableOpacity key={index} style={styles.detailsView}>
              <View style={styles.detailsIconsView}>
                <Image source={detail.icon} style={styles.detailsIcon} />
                <Separator width={responsiveWidth(3.5)} />
                <Text style={styles.detailsHeading}>{detail.title}</Text>
              </View>
              <Image source={Icons.arrowRight} style={styles.detailsIcon} />
            </TouchableOpacity>
          ))}
          <Separator height={responsiveWidth(6)} />

          {/* Logout btn */}
          <View style={styles.btnView}>
            <FormButton
              buttonTitle={'Logout'}
              btnPress={()=>navigation.navigate('Login')}
              backgroundColor={Colors.LIGHT_RED}
              fontFamily={Fonts.POPPINS_BOLD}
              fontSize={responsiveFontSize(2)}
              width={responsiveWidth(80)}
              borderRadius={responsiveWidth(2.5)}
            />
          </View>
          <Separator height={responsiveWidth(10)} />
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOUR,
  },
  secondContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
  },
  userProfile: {
    backgroundColor: Colors.DEFAULT_WHITE,
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: responsiveWidth(28),
    resizeMode: 'contain',
  },
  dashedCircle: {
    width: responsiveWidth(29.5),
    height: responsiveWidth(29.5),
    borderRadius: responsiveWidth(29.5),
    resizeMode: 'contain',
    position: 'absolute',
  },
  editIconView: {
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
  },
  editIcon: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(8),
    resizeMode: 'contain',
  },
  userDetails: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  userName: {
    color: Colors.SECONDARY_COLOUR2,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.POPPINS_BOLD,
  },
  age: {
    color: Colors.SECONDARY_COLOUR2,
    fontSize: responsiveFontSize(1.7),
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  scrollContainer: {
    paddingHorizontal: responsiveWidth(6),
  },
  box: {
    backgroundColor: Colors.LIGHT_GREY7,
    width: '80%',
    borderRadius: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: responsiveWidth(2),
  },
  boxText: {
    color: Colors.BLACK1,
    fontSize: responsiveFontSize(1.7),
    fontFamily: Fonts.POPPINS_BOLD,
    marginTop: responsiveWidth(1),
  },
  boxPoints: {
    color: Colors.DEFAULT_WHITE,
    fontSize: responsiveFontSize(3.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  boxIcon: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    resizeMode: 'contain',
  },
  detailsView: {
    backgroundColor: Colors.LIGHT_GREY6,
    width: '100%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(7),
    flexDirection: 'row',
    marginBottom: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsIcon: {
    width: responsiveWidth(4.5),
    height: responsiveWidth(4.5),
    resizeMode: 'contain',
  },
  detailsIconsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsHeading: {
    color: Colors.BLACK1,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.POPPINS_BOLD,
    marginTop: responsiveWidth(1.5),
  },
  btnView: {
    alignSelf: 'center',
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    width: '80%',
  },
  pannelHeader: {
    alignItems: 'center',
  },
  pannelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  header: {
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: Colors.LIGHT_GREY11,
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.LIGHT_GREY3,
  },
  bottomSheetHeading: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.BLACK2,
    fontSize: responsiveFontSize(2),
  },
  bottomSheetSubHeading: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.GREY2,
    fontSize: responsiveFontSize(1.7),
  },
});

export default Profile;
