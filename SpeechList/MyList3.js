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


var myDada = [
  {name: 'mici', job: 'FATHER'},
  {name: 'keren', job: 'mother'},
  {name: 'or', job: 'dother'},
  {name: 'shey', job: 'sun'}
];


class MyList3 extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      //declere what will be the data for the list
      dataSource: ds.cloneWithRows(myDada)
    };
  }

  // determine what will be in each row
          //pass the data to the function
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
                  dataSource={this.state.dataSource} // call data form state
                  renderRow={this.renderRow} // call func for each render row
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

module.exports = MyList3;
