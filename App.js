import React from 'react';
import Navigators from './src/navigation';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
export default () => <Navigators />;


LogBox.ignoreAllLogs();//Ignore all log notifications