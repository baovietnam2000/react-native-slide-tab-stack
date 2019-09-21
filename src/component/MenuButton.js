import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends Component {
  render() {
    return (
      <Icon 
          name="ios-menu" 
          style={styles.menuicon}
          onPress = {() => this.props.navigation.toggleDrawer()}
          
          />
    );
  }
}

const styles = StyleSheet.create({
  menuicon: {
    fontSize: 45,
    color: 'black',
    zIndex:9,
    left :15,
    position: 'absolute',
    top: 5
  },
});
