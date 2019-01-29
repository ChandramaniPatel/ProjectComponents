import React, { Component } from 'react';
import {
View,
Alert,
StyleSheet,
TouchableHighlight,
TouchableOpacity,
TouchableNativeFeedback,
TouchableWithoutFeedback,
Platform,
Text
} from 'react-native';


export default class CustomButtons extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

       static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.val : 'A Nested Details Screen'
                 }
       }


    
       render() {
        return (
          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor="green">
              {/* <View style={styles.button}> */}
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              {/* </View> */}
            </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>  
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>  
            <TouchableWithoutFeedback
                onPress={this._onPressButton}
                >
              <View style={anotherStyles.button}>
                <Text style={anotherStyles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
              <View style={anotherStyles.button}>
                <Text style={anotherStyles.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>
          </View>
        );
      }
    }



  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center',
      // backgroundColor : "#23FFAA",
      flex : 1,
    },
    button: {
      marginBottom: 30,
      width: 260,
      height: 40,
      alignItems: 'center',
      backgroundColor: 'magenta',
      borderRadius : 25.0,
      borderColor : "black",
      borderWidth: 1,
    },
    buttonText: {
      padding: 12,
      color: 'white'
    }
  });


  const anotherStyles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      height: 40,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius : 25.0,
      borderColor: "magenta",
      borderWidth: 1,
     
    },
    buttonText: {
      padding: 12,
      color: 'magenta'
    }
  });
