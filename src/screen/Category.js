import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MenuButton from '../component/MenuButton';

export default class Category extends Component{
  static navigationOptions ={
    title: 'Category'
    
      };
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.welcome}>Category</Text>
        <Button
          title = "goto Settings"
          onPress ={() => {
            this.props.navigation.navigate('Categories');
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
