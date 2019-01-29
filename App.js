/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// For navigaton controller
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./src/Components/HomeScreen";
import AboutScreen from "./src/Components/AboutScreen";
import MultilineChoiceCard from './src/Components/MultilineChoiceCard';
import RadioButton from './src/Components/RadioButton';
import RoundedSelected from './src/Components/RoundedSelected';
import SingleStateChoiceCard from './src/Components/SingleStateChoiceCard';
import TopupMiniChoiceCard from './src/Components/TopupMiniChoiceCard';
import CustomButtons from './src/Components/CustomButtons';
import CheckBox from './src/Components/CheckBox';
import NavigationList from './src/Components/NavigationList';
import MultiStateChoiceCard from './src/Components/MultiStateChoiceCard';


const AppNavigator = createStackNavigator(
  {
    HomeScreen : {screen : HomeScreen}, // root view controller
    AboutScreen : {screen : AboutScreen},
    CustomButtons : {screen : CustomButtons},
    CheckBox : {screen : CheckBox},
    MultilineChoiceCard : {screen : MultilineChoiceCard},
    MultiStateChoiceCard : {screen : MultiStateChoiceCard},
    NavigationList : {screen : NavigationList},
    RadioButton : {screen : RadioButton},
    RoundSelected : {screen : RoundedSelected},
    SingleStateChoiceCard : {screen : SingleStateChoiceCard},
    TopupMiniChoiceCard : {screen : TopupMiniChoiceCard},
  }
)

// create a stack using createAppContainer and export this like below
export default createAppContainer(AppNavigator);
