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


  constructor(props){
    super(props)

    this.state = {
      activeIndex:-1,
      data:[
        { key : 'Buttons' ,isSelected : true ,index :0},
        { key: 'Single State Choice Cards' ,isSelected : false,index :1},
        { key: 'Multi State Choice Cards' ,isSelected : false,index :2},
        { key: 'Multi Line Choice Cards' ,isSelected : false,index :3},
        { key: 'Rounded Select' , isSelected : false,index :4},
        { key: 'Top Up Mini Choice Cards' ,isSelected : false,index :5},
        { key: 'CheckBox' ,isSelected : false,index :6},
        { key: 'RadioButton' ,isSelected : true,index :7},
        { key: 'Navigational List' ,isSelected : false,index :8},
      ],
    }
  }


  segmentClicked = (index) =>{
    this.setState({
      activeIndex:index
    })
  }


  _onClickButton = (data,isItemSelecetd,index) => {

    
    this.setState(
       { activeIndex:index}
    //   {data:[
    //   { key : 'Buttons' ,isSelected : isItemSelecetd},
    //   { key: 'Single State Choice Cards' ,isSelected : isItemSelecetd},
    //   { key: 'Multi State Choice Cards' ,isSelected : isItemSelecetd},
    //   { key: 'Multi Line Choice Cards' ,isSelected : isItemSelecetd},
    //   { key: 'Rounded Select' , isSelected : isItemSelecetd},
    //   { key: 'Top Up Mini Choice Cards' ,isSelected : isItemSelecetd},
    //   { key: 'CheckBox' ,isSelected : isItemSelecetd},
    //   { key: 'RadioButton' ,isSelected : isItemSelecetd},
    //   { key: 'Navigational List' ,isSelected : isItemSelecetd},
    // ]}
    
    )
  

    for ( i = 0; i<data.length; i++ ) {
      var p = data[i];

      if (i == this.state.activeIndex) {
         p.isSelected = true ;
      } else {
        p.isSelected = false ;
      }
       
    }
   
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

  renderSection = (isItemSelecetd,index) =>{
    if (isItemSelecetd == false) {
      isItemSelecetd = true;
      <Image source={require("../../src/assets/right.jpg")}  
             style={{width:40,height:40,}}
      />
      } else {
       <Image  source = {null}/>
       isItemSelecetd = false;
      }
  }

    render() {
        return (
          <View style={styles.container}>

            <FlatList
            data={this.state.data}
            
              renderItem={
                ({ item }) =>   
                <TouchableOpacity onPress={() => this._onClickButton(item.key,item.isSelected,item.index)}>
                    <View style={rowStyles.container}>
                       <Text style={rowStyles.textItem}>{item.key} {item.index}</Text>

                       {item.isSelected?  <Text>enabled</Text>:null}
                     
                         {/* {this.renderSection(item.isSelected,item.index)}  */}
                    </View>
                </TouchableOpacity>
            }
            keyExtractor={({id}, index) => id}
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
     borderColor : "gray",
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