import React, { Component } from 'react';
import {
    FlatList, 
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
 } from 'react-native';

export default class ComponentFlatList extends Component {

  _onPressButton = (data) => {
  //  Alert.alert('You tapped the button!');
    this.props.exportData(data);
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

    render() {
        return (
          <View style={styles.container}>
            <FlatList
            ItemSeparatorComponent={this.renderSeparator}
              data={[
                { key: 'Buttons' },
                { key: 'Single State Choice Cards' },
                { key: 'Multi State Choice Cards' },
                { key: 'Multi Line Choice Cards' },
                { key: 'Rounded Select' },
                { key: 'Top Up Mini Choice Cards' },
                { key: 'CheckBox' },
                { key: 'RadioButton' },
                { key: 'Navigational List' },
              ]}
              renderItem={
                ({ item }) =>   <TouchableOpacity onPress={() => this._onPressButton(item.key)}><View style={rowStyles.container}>
                <Text style={rowStyles.textItem}>{item.key} </Text>
                <Text style={rowStyles.textItem}>> </Text>
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
     paddingTop: 1
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
     // borderWidth: 1,
      justifyContent: "flex-start",
      alignItems : "center",
     // borderColor : 'red',
    },
  });


  const rowStyles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 1,
     flexDirection:"row", 
     justifyContent:"space-between",
     backgroundColor : 'white',
     height : 44
    },
    textItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
      alignItems : "center",
    },
  });