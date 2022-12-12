import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
  Button,
  requireNativeComponent,
} from 'react-native';
import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';
import {Checkbox} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../constants';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Separator} from '../../components';

const isIPhone = Platform.OS === 'ios';
const PRIMARY_COLOR = 'skyblue';

const VpnScreen = () => {
  const [log, setLog] = useState('');
  const logScrollView = useRef(null);

  const [checked, setChecked] = React.useState(0);

  const servers = [
    {
      id:1,
      host: '124.123.174.108 50297',
      country: 'India',
    },
    {
      id:2,
      host: '68.101.101.25 1658',
      country: 'UnitedStates',
    },
    {
      id:3,
      host: '79.105.117.154 2721',
      country: 'Russia',
    },
    {
      id:4,
      host: '37.104.191.63 1878',
      country: 'SaudiArabia',
    },
    {
      id:5,
      host: '58.186.68.142 33519',
      country: 'VietNam',
    },
    {
      id:6,
      host: '49.228.246.251 1687',
      country: 'Thailand',
    },
  ];

  const [connectServer, setConnectServer] = useState({
    host: '124.123.174.108 50297',
    country: 'India',
  });

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <Button title="Connect" color={PRIMARY_COLOR} onPress={startOvpn} />
        <Button title="Disconnect" color={PRIMARY_COLOR} onPress={stopOvpn} />
        <Button
          title="Vpn State"
          color={PRIMARY_COLOR}
          onPress={printVpnState}
        />
        <Button
          title="Clean Log"
          color={PRIMARY_COLOR}
          onPress={() => setLog('')}
        />
      </View>
      <View style={styles.logContainer}>
        <ScrollView
          ref={logScrollView}
          style={styles.logScroll}
          onContentSizeChange={() =>
            logScrollView.current.scrollToEnd({animted: true})
          }>
          <Text>{log}</Text>
        </ScrollView>
      </View>

      <Separator height={responsiveWidth(5)} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {servers.map((item, key) => (
          <View key={key}>
            {checked == key ? (
              <TouchableOpacity onPress={()=>{setChecked(key);setConnectServer(item)}} style={styles.countryView}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Icon
                  name="check-circle-fill"
                  size={30}
                  color={Colors.LIGHT_BLUE}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={()=>{setChecked(key);setConnectServer(item)}} style={styles.countryView}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Feather name="circle" size={30} color={Colors.LIGHT_GREY2} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    alignItems: 'center',
  },
  countryName: {
    fontSize: responsiveFontSize(2),
    color: Colors.PRIMARY_COLOUR,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    marginBottom:responsiveWidth(4)
  },
  btnContainer: {
    width: '80%',
    height: '25%',
    justifyContent: 'space-between',
  },
  logContainer: {
    width: '80%',
    height: '30%',
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
  },
  logScroll: {
    flex: 1,
  },
});

export default VpnScreen;
