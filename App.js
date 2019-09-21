/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppStackNav from './src/navigation/StackNav';
import AppDrawer from './src/navigation/DrawerNav';
import AppMixNav from './src/navigation/MixNav';
export default class AppStore extends Component{
  render() {
    return (
      //<AppStackNav />
      //<AppDrawer />
      <AppMixNav />
    );
  }
}


