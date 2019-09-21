import React, {Component} from 'react';
import {StyleSheet,Alert,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class SearchButton extends Component {
clickme(){
		alert('Click me');

		

	}
  render() {
    return (
      <Icon 
          name="ios-search" 
          style={styles.menuicon}
          onPress = {() => this.clickme()}
          
          />
    );
  }
}

const styles = StyleSheet.create({
  menuicon: {
    fontSize: 40,
    color: 'darkblue',
    zIndex:9,
    right :10,
    position: 'absolute',
    top: 10
  },
});
