import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export default class ScreenB extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen B</Text>
        <Button
          title = "goto ScreenC"
          onPress ={() => {
            this.props.navigation.navigate('ScreenC');
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
