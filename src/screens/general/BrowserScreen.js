import React, {useEffect, useCallback, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  StatusBarStyle,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {Linking, Alert} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import { WebView } from 'react-native-webview';
// import {WebView,openLink} from './Utils';

const BrowserScreen = () => {
  const [url, setUrl] = useState('https://facebook.com');

  useEffect(() => {
    InAppBrowser.mayLaunchUrl('https://facebook.com', []);
  }, []);

  const onOpenLink = useCallback(async () => {
    // await openLink(url);
    return(
      <WebView url={url}/>
    )
  }, [url]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#ffffff',
    flex: 1,
    height: '100%',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
        <Button title='Skip'/>
        <WebView
             source={{uri: "https://biteable.com/watch/3808938/9f96192e0c4a30f39dd4ec1916874a92"}}
         />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={backgroundStyle}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {'Welcome InAppBrowser\nfor React Native!'}
          </Text>
          <Text>Type the url</Text>
          <TextInput
            style={styles.urlInput}
            onChangeText={text => setUrl(text)}
            value={url}
          />

          <View style={styles.openButton}>
            <Button title="Open link" onPress={onOpenLink} />
          </View>
          <Text>Hii</Text>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  urlInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  openButton: {
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
});

export default BrowserScreen;
