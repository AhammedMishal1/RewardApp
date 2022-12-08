import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FormButton, Separator, WelcomeCard} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, General, Icons, Images} from '../../constants';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {
        ...styles.page,
        backgroundColor: Colors.LIGHT_GREY1,
        width: responsiveWidth(4),
      };

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pagescroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  const ListFooter = () => {
    return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.welcomeListConatiner}>

        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode={'never'}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => (
            <WelcomeCard
              {...item}
              list={welcomeList}
              index={welcomeListIndex}
            />
          )}
          ListHeaderComponent={ListFooter}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: responsiveWidth(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: responsiveWidth(4.5),
          height: responsiveHeight(4),
        }}>
        {/* <Pagination index={welcomeListIndex} /> */}

        {welcomeListIndex === 2 ? (
          <View style={{alignSelf: 'center', width: '100%'}}>
            <FormButton
              btnPress={() => navigation.navigate('Welcome')}
              buttonTitle="GET STARTED"
              backgroundColor={Colors.PRIMARY_COLOUR}
              fontFamily={Fonts.POPPINS_BOLD}
              fontSize={responsiveFontSize(2)}
              width={responsiveWidth(90)}
              borderRadius={responsiveWidth(3)}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={()=>pagescroll()} style={styles.nextBtn}>
            <Text style={styles.nextText}>Next</Text>
            <Image
              source={Images.longRightArrow}
              style={styles.longRightArrow}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: responsiveHeight(1.5),
    width: responsiveHeight(9),
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: responsiveHeight(1),
    marginHorizontal: responsiveWidth(1.3),
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.DEFAULT_WHITE,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(8),
    width: responsiveWidth(15),
    height: responsiveWidth(15),
  },
  nextBtn: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOUR,
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    flexDirection: 'row',
    borderRadius: responsiveWidth(3),
  },
  ButtonIcon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    resizeMode: 'contain',
  },
  nextText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: responsiveFontSize(2),
    color: Colors.DEFAULT_WHITE,
  },
  longRightArrow: {
    width: responsiveWidth(55),
    height: responsiveWidth(10),
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
