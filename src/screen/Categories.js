import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../component/MenuButton';
import SearchButton from '../component/SearchButton';


export default class Categories extends Component{
  
  static navigationOptions ={
    title: 'Home page'
    
      };
  render() {
    return (
      
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <SearchButton  />
        <Text style={styles.welcome}>Categories</Text>
        <Button
          title = "goto Cart"
          onPress ={() => {
            this.props.navigation.navigate('Cart');
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
