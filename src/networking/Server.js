import React, {Component} from 'react';
import {AppRegistry,SectionList, StyleSheet, Text, View, Alert, Platform} from 'react-native'; 

const apiGetCategories = 'https://reqres.in/api/users?page=2';
async function getpagesample (){
	try {
		let response = await fetch(apiGetCategories);
		let responseJson = await response.json();
		return responseJson.page;


	}catch (error){
		console.log('error');

	}
}
export default {getpagesample};