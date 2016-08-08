/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var Data = require('./Data');


class MyList4 extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      //declere what will be the data for the list
      dataSource: ds.cloneWithRows(Data.symbols)
    };
  }

  // determine what will be in each row
          //pass the data to the function




   _printTouch(){
      console.log('click a butoon');
   }


    render() {
      return (
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
                  <TouchableHighlight onPress={this._printTouch} >
                  <Text style={styles.button}>
                  button
                  </Text>
                  </TouchableHighlight>

              <ListView
                  dataSource={this.state.dataSource} // call data form state
                  renderRow={this.renderRow.bind(this)} // call func for each render row
              />
          </View>
      );
    }

    onSymbolPressed(rowData){
       console.log('Choosing a symbol' + rowData.image_url);
     }

    renderRow(rowData){
      return(
        <TouchableHighlight onPress={() => this.onSymbolPressed(rowData)}>
        <View>
        <Text style={styles.welcome}>{rowData.id}</Text>
        <Text style={styles.welcome}>{rowData.text}</Text>
        <Text style={styles.welcome}>{rowData.image_url}</Text>
        </View>
      </TouchableHighlight>
      )
    }




  }

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
  },

  sc: {
   flex: 1,
   backgroundColor: '#F5FCFF',

    flexDirection: 'row',
  //  flexDirection: 'column',
   //paddingTop: 540,

   //flexWrap: 'wrap',
 },
 content: {
   marginTop: 20,
   //paddingHorizontal: 40,
    alignSelf: 'flex-end',
    alignItems: 'center',

   //flex: 1,
   //flexDirection: 'row',
 },
 card: {
   flex: 1,
   backgroundColor: '#ccc',
   width: 300,
   height: 300,
   margin: 25,
   justifyContent: 'space-around',
   alignItems: 'center',
 },
  list: {
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
},
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 40,
    justifyContent: 'space-around',
  },

viewImage: {
  flex: 1,
  justifyContent: 'center',
},
  image: {
    width: 156,
    height: 156,
  },
  input:{
    flex: 1,
    height: 50,
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'stretch'
  },
  button: {
      borderColor: 'blue',
      borderWidth: 2,
      backgroundColor: '#eeeeee',
      padding: 10,
      marginRight: 5,
      marginLeft: 5,
      marginTop: 20,
      textAlign: 'center',
  },

});

module.exports = MyList4;
