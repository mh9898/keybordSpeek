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
  Image,
  ScrollView
} from 'react-native';

class MyList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
      this.state = {
        dataSource: ds.cloneWithRows(Data.symbols)([
        ])
      };
  }

  renderSymbol(symbol){
    return(
      <View>

        <Text style={styles.text}> {symbol.text}</Text>
      </View>
    )}


  render() {
    return (
      <View style={styles.container}>

       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderSymbol.bind(this)}
         contentContainerStyle={styles.list}
         pageSize={10} // should be a multiple of the no. of visible cells per row
         scrollRenderAheadDistance={500}
       />


</View>
    );
  }
}

// renderSymbol(symbol){
//   <View>
//     <Image> source={symbol.image_url}</Image>
//     <Text> {symbol.text}</Text>
//
//   </View>
// }

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  sc: {
   flex: 1,
   backgroundColor: '#F5FCFF',

    flexDirection: 'row',
  //  flexDirection: 'column',
   //paddingTop: 540,

   //flexWrap: 'wrap',
 },
 text: {
   color: 'green',
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

module.exports = MyList;
