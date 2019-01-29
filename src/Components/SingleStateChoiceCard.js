import React, { Component } from 'react';
import {
    FlatList, 
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight,
    TouchableOpacity,
    Alert,Image,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
 } from 'react-native';

export default class SingleStateChoiceCard extends Component {

  _onPressButton = (data) => {
  //  Alert.alert('You tapped the button!');
    //this.props.exportData(data);
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "0%"
        }}
      />
    );
  };

  renderSection = () =>{
    if (item.isSelected == true) {
      <Image source={require("../../src/assets/right.jpg")}  
             style={{width:40,height:40,}}
      />
      } else {
       <Image  source = {null}/>
      }
  }

    render() {
        return (
          <View style={styles.container}>
            <FlatList
            // ItemSeparatorComponent={this.renderSeparator}
              data={[
                { text1 : 'Buttons' ,isSelected : false },
                { text1: 'Single State Choice Cards' ,isSelected : false},
                { text1: 'Multi State Choice Cards' ,isSelected : false},
                { text1: 'Multi Line Choice Cards' ,isSelected : false},
                { text1: 'Rounded Select' , isSelected : false},
                { text1: 'Top Up Mini Choice Cards' ,isSelected : false},
                { text1: 'CheckBox' ,isSelected : false},
                { text1: 'RadioButton' ,isSelected : false},
                { text1: 'Navigational List' ,isSelected : false},
              ]}
              renderItem={
                ({ item }) =>   
                <TouchableOpacity onPress={() => this._onPressButton(item.text1)}>
                    <View style={rowStyles.container}>
                       <Text style={rowStyles.textItem}>{item.text1} </Text>
                       <View>
                       {/* {this.renderSection()} */}
                       </View>
                    </View>
                </TouchableOpacity>
            }
            />
          </View>
        );
      }
    }


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 10,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderWidth: 1,
      justifyContent: "flex-start",
      alignItems : "center",
      borderColor : 'red',
    },
  });


  const rowStyles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection:"row", 
     justifyContent:"space-between",
     backgroundColor : 'white',
     height : 44,
     borderWidth : 1,
     borderColor : "grey",
     backgroundColor : "white",
     marginBottom : 10,
     marginLeft : 10,
     marginRight : 10,
     
    },
    textItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
      alignItems : "center",
    },
  });