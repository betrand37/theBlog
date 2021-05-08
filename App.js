import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './ShoppingCart';
import {Provider } from 'react-redux';
import store from './store'


export default class App extends Component {
  render(){
  return(
    <Provider store={store}>
    <ShoppingCart/>
    </Provider>
  );
  }
};