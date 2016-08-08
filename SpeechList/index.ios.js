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
  View
} from 'react-native';

var ComicListView = require('./ComicListView');
var MySpeech = require('./MySpeech');
var MyList2 = require('./MyList2');
var DataList = require('./DataList');
var MyList3 = require('./MyList3');
var MyList4 = require('./MyList4');
var MyList5 = require('./MyList5');
var MyList6 = require('./MyList6');
var MyList7 = require('./MyList7');
var ScrollerWithGrid = require('./ScrollerWithGrid');
var ScrollerWithCatSymbol = require('./ScrollerWithCatSymbol');



class SpeechSynthesizer extends Component {
  render() {
    console.log(DataList)
    return (
      <ScrollerWithCatSymbol></ScrollerWithCatSymbol>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SpeechSynthesizer', () => SpeechSynthesizer);
