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
  ScrollView
} from 'react-native';

var dataList = require('./DataList')

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



class MyList1 extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dataSource)
    };
  }



  render() {
    return (
      <View style={styles.container}>


       <ListView

         dataSource={this.state.dataSource}
         renderRow={(dataList) => <Text style = {styles.welcome}>{dataList}</Text>}
         contentContainerStyle={styles.list}
         pageSize={10} // should be a multiple of the no. of visible cells per row
         scrollRenderAheadDistance={500}
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

});

module.exports = MyList1;
