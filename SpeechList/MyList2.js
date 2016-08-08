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
} from 'react-native';


var THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
];

var myDada = [
  {name: 'mici', job: 'father'},
  {name: 'keren', job: 'mother'},
  {name: 'or', job: 'dother'},
  {name: 'shey', job: 'sun'}
];
var superheroArray = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'];

class MyList2 extends Component {
  //setup your data
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(myDada)
    };
  }

  renderRow(rowData){
    return(
    <View>
      <Text style={styles.welcome}>{rowData.name}</Text>
      <Text style={styles.welcome}>{rowData.job}</Text>
    </View>
    )
  }

    render() {
      return (
          <View style={{flex: 1, justifyContent: 'flex-start'}}>

              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
              />

          </View>
      );
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
    fontSize: 20,
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

  }

});

module.exports = MyList2;
