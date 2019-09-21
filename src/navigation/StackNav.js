/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator,AppContainer} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Contact from '../screen/Contact';
import ScreenB from '../screen/ScreenB';
import ScreenC from '../screen/ScreenC';
import ScreenD from '../screen/ScreenD';
import Product from '../screen/Product';
import Categories from '../screen/Categories';
const StackHome = createStackNavigator({
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
  initialRouteName: 'ScreenA'
});

const StackProduct = createStackNavigator({
  Product: {
    screen: Product
  },
  Categories: {
    screen: Categories
  },
  
  initialRouteName: 'Product'
});
const AppNavigator= createBottomTabNavigator(
{
  StackHome,
  StackProduct
},
{
  initialRouteName: 'StackHome',
  
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#fff' },
    shifting: true
}
);
export default AppStackHome = createAppContainer(AppNavigator);
/*
export default class AppStore extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        
       
      </View>
    );
  }
}
*/
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
