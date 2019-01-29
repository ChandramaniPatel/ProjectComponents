
import React ,{Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ComponentFlatList from './ComponentFlatList';


export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };

    getData = (data) =>{
      if (data == "Buttons"){
        this.props.navigation.navigate('CustomButtons',{
          val:data
        })
      } 
      
     else if (data == "Single State Choice Cards"){
        this.props.navigation.navigate('SingleStateChoiceCard',{
          val:data
        })
      } 
      else if (data == "Multi State Choice Cards"){
        this.props.navigation.navigate('MultiStateChoiceCard',{
          val:data
        })
      } 
      else if (data == "Multi Line Choice Cards"){
        this.props.navigation.navigate('MultilineChoiceCard',{
          val:data
        })
      } 
      else if (data == "Rounded Select"){
        this.props.navigation.navigate('RoundedSelected',{
          val:data
        })
      } 
      else if (data == "Top Up Mini Choice Cards"){
        this.props.navigation.navigate('TopupMiniChoiceCard',{
          val:data
        })
      } 
      else if (data == "CheckBox"){
        this.props.navigation.navigate('CheckBox',{
          val:data
        })
      } 
      else if (data == "RadioButton"){
        this.props.navigation.navigate('RadioButton',{
          val:data
        })
      } 

      else if (data == "Navigational List"){
        this.props.navigation.navigate('NavigationList',{
          val:data
        })
      } 

      else {
        this.props.navigation.navigate('AboutScreen',{
          val:data
        })
      }
    
    }
    
    render() {
      return (
        <View style={{flex:1}}>
            <ComponentFlatList exportData={(data) => this.getData(data)}/>
        </View>
      );
    }
  }
  