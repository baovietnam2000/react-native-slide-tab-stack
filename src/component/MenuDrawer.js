import React, {Component} from 'react';
import {View, Text, ScrollView, Platform, Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height; 

export default class MenuDrawer extends Component {
	navLink(nav,text){
		return (
			<TouchableOpacity style={{height:50}} onPress = { () => this.props.navigation.navigate(nav) }>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
			)
	}
  render() {
    return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
    		<View style={styles.toplink}>
          <View style={styles.profile}>
            <View style={styles.imgView}>
    			     <Image style={styles.img} source={require('../image/logo.png')} />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.name}>Developer </Text>
            </View>
          </View>
    		</View>
    		<View style={styles.bottomlink}>
    			{this.navLink('AppTabNavigator','Home')}
          		{this.navLink('Categories','Categories')}
          		{this.navLink('SettingsStack','Settings')}
    		</View>
        <View style={styles.footer}>
          <Text style={styles.description}> Fashion theme</Text>
          <Text style={styles.version}> v1.0.0</Text>
        </View>
      </ScrollView>
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  scroller: {
    flex:1,
  },
  profile: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:25,
    borderBottomWidth:1,
    borderBottomColor: '#777777',
  },
  profileText: {
    flex:3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imgView: {
    flex:1,
    paddingLeft: 20,
    paddingRight:20,

  },
  name: {
    fontSize: 30,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },
  img: {
    height : 70,
    width : 70,
    borderRadius: 50,
  },
  link: {
  	flex:1,
  	fontSize: 20,
  	padding:6,
  	paddingLeft:14,
  	margin:5,
  	textAlign:'left',

  },
  toplink: {
  	height: 160,
  	backgroundColor: 'black',

  },
  bottomlink: {
  	flex:1,
  	backgroundColor: 'white',
  	paddingTop:10,
  	paddingBottom: 450

  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth:1,
    borderTopColor:'lightgrey',
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight:20,
    color: 'gray',
  },
  description: {
    flex:1,
    marginLeft:20,
    fontSize: 16,
  },
});
