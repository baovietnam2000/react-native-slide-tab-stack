import React, {Component} from 'react';
import {
	StyleSheet, TextInput, View, TouchableOpacity, Text, 
} from 'react-native'; 


export default class LoginForm extends Component{
    static navigationOptions ={
    title: 'Login'
    
    };
   constructor(props){
    super(props);
    this.state={
      username : "",
      password : "",
      result : "Not login yet",
      token: "..."
      }
    }
    
    Login(){
      fetch("http://new.bannhanh.org/api/createToken.php",{
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content_Type": "application/json"
        },
        body: JSON.stringify({
          "USER": this.state.username,
          "PASS": this.state.password
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          result: "Logged",
          token: responseJson.token
        })
      })
      .catch((error) =>{
        console.log(error);
      });
      
    }
  
  render() {
    return (
      <View style={styles.container}>
      
        <TextInput 
        onChangeText={(username) => this.setState({username})} value={this.state.username}
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
        onChangeText={(password) => this.setState({password})} value={this.state.password}
        placeholder = "password"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="go"
        secureTextEnry={true}
        autoCorrect={false}
        style={styles.input}
        ref={(input) => this.passwordInput=input}
        />
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={() => {this.Login()}}
        >
        	<Text style={styles.buttonText}> LOGIN</Text>
        </TouchableOpacity>
        
          <Text style={styles.textResult}> {this.state.result} : {this.state.token}</Text>
          
        
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
  textResult:{
    fontSize: 18,
    color: 'white',
    fontWeight:"500",
    textAlign: 'center',
  },
});





