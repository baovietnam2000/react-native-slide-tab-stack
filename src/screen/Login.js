import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image, KeyboardAvoidingView,
  Keyboard, TouchableOpacity,
} from 'react-native'; 
import {getpagesample} from '../networking/Server';
import MenuButton from '../component/MenuButton';
import LoginForm from '../component/LoginForm';

export default class Login extends Component{
  static navigationOptions ={
    title: 'Login'
    
      };
 
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.logocontainer}>
          <Image 
          style={styles.logo}
          source={require('../image/login.png')} />
          
          <Text style={styles.title}>please Login here </Text>
        </View>
        
        <View style={styles.formcContainer}>
            <LoginForm />
        </View>
        
      </KeyboardAvoidingView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182C61',
    flexDirection:'column',
  },
  logocontainer: {
    alignItems: 'center',
    flex:1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height:100,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
 
  formcContainer: {
    position: 'absolute',
    left:0,
    right:0,
    bottom:10,
    height:250,
    padding:20,
   
  },
});





