
import React, {Component} from 'react';
import {Dimensions,StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator,DrawerOpen} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Contact from '../screen/Contact';
import ScreenB from '../screen/ScreenB';
import ScreenC from '../screen/ScreenC';
import ScreenD from '../screen/ScreenD';
import Product from '../screen/Product';
import SearchView from '../screen/SearchView';
import Categories from '../screen/Categories';
import Category from '../screen/Category';
import Cart from '../screen/Cart';
import Orders from '../screen/Orders';
import OrderHistory from '../screen/OrderHistory';
import Settings from '../screen/Settings';
import ChangeInfo from '../screen/ChangeInfo';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import MenuButton from '../component/MenuButton';

const CategoryStack = createStackNavigator({
  Product: {screen: Product},
  Categories: {screen: Categories},
  Category : {screen: Category},
  Login: {screen:Login}

});

CategoryStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-home" color={tintColor} size={24}/>
    )
};

const CartStack = createStackNavigator({
  Product: {
    screen: Product
  },
  Cart: {
    screen: Cart
  },

});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-cart" color={tintColor} size={24}/>
    )
};

const OrdersStack = createStackNavigator({
  Orders: {
    screen: Orders

  },
  OrderHistory:{
    screen: OrderHistory
  }
});

OrdersStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-options" color={tintColor} size={24}/>
    )
};

const LoginStack = createStackNavigator({Login});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-login" color={tintColor} size={24}/>
    )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings
  },
  ChangeInfo: {
    screen: ChangeInfo
  },
  SearchView: {
    screen: SearchView
  },
  Contact: {
    screen: Contact
  },
  Login: {
    screen:Login
  },
  SignUp: {
    screen:SignUp
  },
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-settings" color={tintColor} size={24}/>
    )
};


const AppTabNavigator = createBottomTabNavigator(
{
  CategoryStack,
  CartStack,
  OrdersStack,
  SettingsStack
},
{
  initialRouteName: 'CategoryStack',
  //order: ['CategoryStack','CartStack','OrdersStack','SettingsStack'],
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#fff' },
    shifting: true
}
);
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  /*
  contentComponent: ({navigation}) => {
    return (<MenuButton navigation={navigation} />)
  }
  */
}
const Drawer = createDrawerNavigator(
{
  
  HomeScreen: {
  	screen: AppTabNavigator
  },
  Cart: {
    screen: CartStack
  },
  Orders: {
    screen: OrdersStack
  },
  Login: {
    screen: LoginStack
  },
  SignUp: {
    screen:SignUp
  },
  Settings: {
    screen: SettingsStack
  },
},
DrawerConfig
);


export default AppMixNav = createAppContainer(Drawer);

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
