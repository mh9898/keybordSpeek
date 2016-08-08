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
var Speech = require('react-native-speech');

var THUMB_URLS = [
  require('./Symbols/c.png'),
  require('./Symbols/cafeteria-01.png'),
  require('./Symbols/call-01_1369040493.png'),
  require('./Symbols/camera.png'),
  require('./Symbols/can-not_can-not.png'),
  require('./Symbols/can-you-see.png'),
  require('./Symbols/candy-01.png'),
  require('./Symbols/car-01.png'),
  require('./Symbols/car-sit.png'),
  require('./Symbols/carpet.png'),
  require('./Symbols/carry_on_continue.png'),
  require('./Symbols/cast_1367228636.png'),
];



class MyList5 extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      //declere what will be the data for the list
      dataSource: ds.cloneWithRows(Data.symbols)
    };
  }

    render() {
      return (
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <ListView
                  dataSource={this.state.dataSource} // call data form state
                  renderRow={this.renderRow.bind(this)} // call func for each render row
              />
          </View>
      );
    }

    _startHandler(rowData) {
      Speech.speak({
        text: rowData.image_url,
        voice: 'en-US'
      })
    }

    onSymbolPressed(rowData){
       console.log('Choosing a symbol' + rowData.image_url);
     }

    renderRow(rowData){


      return(
        <TouchableHighlight onPress={() => this._startHandler(rowData)}>
        <View>
        <Image style={styles.image} source={rowData.image_require}/>
        <Text style={styles.welcome}>{rowData.id}</Text>
        <Text style={styles.welcome}>{rowData.text}</Text>
        <Text style={styles.welcome}>{rowData.image_url}</Text>
        </View>
      </TouchableHighlight>
      )
    }

  hashCode(str){
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
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

module.exports = MyList5;