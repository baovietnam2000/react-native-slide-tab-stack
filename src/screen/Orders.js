import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MenuButton from '../component/MenuButton';

export default class Orders extends Component{
  static navigationOptions ={
    title: 'Orders'
    
      };
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.welcome}>Orders</Text>
        <Button
        	title = "goto OrderHistory"
        	onPress ={() => {
        		this.props.navigation.navigate('OrderHistory');
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
