import React ,{Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ComponentFlatList from './ComponentFlatList';


export default class MultiStateChoiceCard extends Component {

       static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.val : 'A Nested Details Screen'
                 }
       }


    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={{flex:1,flexDirection:'column',alignItems:"center",marginTop:100}}>
             <Button
          title="Go to Jane's profile"
          onPress={() => navigate('AboutScreen')}
        />
          </View>
        
      );
    }
  }