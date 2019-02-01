import React ,{Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ComponentFlatList from './ComponentFlatList';
import CustomButton2 from "../Components/CustomButton2";


export default class RadioButton extends Component {

       static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.val : 'A Nested Details Screen'
                 }
       }

       constructor(){
         super()
         this.state = {
           productCount : 0
         }
       }

       addProduct = () =>{
         this.setState({productCount: this.state.productCount+1})
       }

    render() {
      const {navigate} = this.props.navigation; 
      return (
          <View>
               <CustomButton2 onClick = {this.addProduct}/> 
             <Text>{this.state.productCount}</Text>
          </View>
        
      );
    }
}