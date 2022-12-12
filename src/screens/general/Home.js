import React, {useEffect, useState} from 'react';
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
} from '../../components';
import EnableVpn from './EnableVpn';
import Connected from './Connected';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { servers } from '../../models/servers';

import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';
const isIPhone = Platform.OS === 'ios';

const Home = ({navigation}) => {
  const [connected, setConnected] = useState(false);
  const [checked, setChecked] = React.useState(0);
  const [log, setLog] = useState('');
  const [connectServer, setConnectServer] = useState({
    host: '124.123.174.108 50297',
    country: 'India',
  });

  bs = React.createRef();
  fall = new Animated.Value(1);

  useEffect(() => {
    console.log(connectServer);
    async function observeVpn() {
      if (isIPhone) {
        await RNSimpleOpenvpn.observeState();
      }

      addVpnStateListener(e => {
        updateLog(JSON.stringify(e), undefined, 2);
      });
    }
    observeVpn();
    return async () => {
      if (isIPhone) {
        await RNSimpleOpenvpn.stopObserveState();
      }
      removeVpnStateListener();
    };
  });

  
  async function startOvpn() {
    try {
      await RNSimpleOpenvpn.connect({
        remoteAddress: connectServer.host,
        ovpnFileName: connectServer.country,
        notificationTitle:'REWARD APP',
        assetsPath: 'ovpn/',
        compatMode: RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER,
        providerBundleIdentifier: 'com.your.network.extension.bundle.id',
        localizedDescription: 'TestRNSimpleOvpn',
      });
    } catch (error) {
      updateLog(error);
    }
  }

  async function stopOvpn() {
    try {
      await RNSimpleOpenvpn.disconnect();
    } catch (error) {
      updateLog(error);
    }
  }

  function printVpnState() {
    updateLog(JSON.stringify(RNSimpleOpenvpn.VpnState, undefined, 2));
  }

  function updateLog(newLog) {
    const now = new Date().toLocaleTimeString();
    // setLog(`${log}\n[${now}] ${newLog}`);
    setLog(`${newLog}`);
  }


  renderInner = () => (
    <View
      style={{
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 16,
        height: 450,
        alignItems: 'center',
      }}>
      <Text style={styles.bottomSheetHeading}>Pick your Server</Text>
      <Separator height={responsiveWidth(6)} />
      {/* server list */}
      {servers.map((item, key) => (
          <View key={key}>
            {checked == key ? (
              <TouchableOpacity onPress={()=>{setChecked(key);setConnectServer(item)}} style={styles.countryView}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Icon
                  name="check-circle-fill"
                  size={responsiveWidth(6)}
                  color={Colors.LIGHT_BLUE}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={()=>{setChecked(key);setConnectServer(item)}} style={styles.countryView}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Feather name="circle" size={responsiveWidth(6)} color={Colors.LIGHT_GREY2} />
              </TouchableOpacity>
            )}
          </View>
        ))}
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

      <View style={{flex: 1 / 7}}>
        <HomeHeader badgeCount={4} />
      </View>
      {/*  Container */}
      <Animated.View
        style={[
          styles.secondContainer,
          {opacity: Animated.add(0.2, Animated.multiply(fall, 1.0))},
        ]}>  
        <Separator height={responsiveWidth(6)} />

        {/* Vpn enable container */}
        {!connected ? (
          <EnableVpn connectBtn={()=>startOvpn()} serverName={connectServer.country} serverBtn={() => bs.current.snapTo(0)} navigation={navigation} onConnected={() => setConnected(!connected)} />
        ) : (
          <Connected disconnectBtn={()=>stopOvpn()}  onConnected={() => setConnected(!connected)} />
        )}

        <Separator height={responsiveWidth(8)} />
      </Animated.View>
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
    backgroundColor: Colors.DEFAULT_WHITE,
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
// bottomSheet
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

  // server list 
  countryName: {
    fontSize: responsiveFontSize(2),
    color: Colors.PRIMARY_COLOUR,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    marginBottom:responsiveWidth(4)
  },
});

export default Home;
