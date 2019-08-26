/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SignIn from './src/pages/SignIn'

const App = () => {
  return (
    <Fragment>
      <SignIn/>
    </Fragment>
  );
};


export default App;
