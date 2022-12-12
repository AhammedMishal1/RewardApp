import React, {useEffect, useCallback, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Advertisement = ({navigation}) => {
  const url ='https://biteable.com/watch/3808938/9f96192e0c4a30f39dd4ec1916874a92'
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Skip" onPress={navigation.goBack}/>
      <WebView
        source={{
          uri: url,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
  },
});

export default Advertisement;
