import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export default class ScreenC extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen C</Text>
        <Button
          title = "goto Product in other group"
          onPress ={() => {
            this.props.navigation.navigate('Product');
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
