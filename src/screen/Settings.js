import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MenuButton from '../component/MenuButton';

export default class Settings extends Component{
  static navigationOptions ={
    title: 'Settings'
    
      };
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.welcome}>Settings</Text>
        <Button
        	title = "Go to Home page"
        	onPress ={() => {
        		this.props.navigation.navigate('Categories');
        	}}
        /> 
        <Button
          title = "Change information"
          onPress ={() => {
            this.props.navigation.navigate('ChangeInfo');
          }}
        /> 
        <Button
          title = "go to search"
          onPress ={() => {
            this.props.navigation.navigate('SearchView');
          }}
        /> 
        <Button
          title = "go to Contact"
          onPress ={() => {
            this.props.navigation.navigate('Contact');
          }}
        /> 
        <Button
          title = "Login"
          onPress ={() => {
            this.props.navigation.navigate('Login');
          }}
        /> 
        <Button
          title = "Sign Up"
          onPress ={() => {
            this.props.navigation.navigate('SignUp');
          }}
        /> 
      </View>
    );
  }
}

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
