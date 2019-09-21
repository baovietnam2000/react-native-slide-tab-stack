
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Contact from '../screen/Contact';
import ScreenB from '../screen/ScreenB';
import ScreenC from '../screen/ScreenC';
import ScreenD from '../screen/ScreenD';
import Product from '../screen/Product';
import Categories from '../screen/Categories';





const Drawer = createDrawerNavigator({
  Contact: {
  	screen: Contact
  },
  ScreenB: {
  	screen: ScreenB
  },
  ScreenC: {
  	screen: ScreenC
  },
  Product: {
  	screen: Product
  },
  Categories: {
  	screen: Categories
  },


});


export default AppDrawer = createAppContainer(Drawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
