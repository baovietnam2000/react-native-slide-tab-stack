import React, {Component} from 'react';
import {
	StyleSheet, TextInput, View, TouchableOpacity, 
	Text, 
} from 'react-native'; 


export default class SignUpForm extends Component{
  static navigationOptions ={
    title: 'Sign Up'
    
      };
  render() {
    return (
      <View style={styles.container}>
      
        <TextInput 
        placeholder = "username or email"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="next"
        onSubmitEditing = {() => this.passwordInput.focus()}
        secureTextEnry
        keyboardType="email-address"
        autoCapitalize ="none"
        autoCorrect={false}
        style={styles.input}/>

        <TextInput 
        placeholder = "password"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="go"
        secureTextEnry={true}
        autoCorrect={false}
        style={styles.input}
        ref={(input) => this.passwordInput=input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
        	<Text style={styles.buttonText}> SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
  },
  input: {
  	height: 40,
  	backgroundColor: 'rgba(255,255,255,0.2)',
  	marginBottom: 20,
  	color: '#FFF',
  	paddingHorizontal: 10,
  	borderRadius: 10,
  },
  buttonContainer: {
  	backgroundColor: '#3867d6',
  	paddingVertical: 15,
  	borderRadius: 20,
  },
  buttonText: {
  	textAlign: 'center',
  	color: '#FFFFFF',
  	fontWeight:'700',
  },
});





