import React ,{Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ComponentFlatList from './ComponentFlatList';


const CustomButton2 = (props) => {

   return (
       <Button title = "Add Product"
       onPress = {() => props.onClick()} // assigning props.onClick to onPress from Calling class
       />
   )

  }

  export default CustomButton2;