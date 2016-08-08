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
  TouchableHighlight,
  View
} from 'react-native';

// var Speech = require('react-native-speech');
//
// class SpeechSynthesizer extends Component {
//   render() {

    //var Speech = require('react-native-speech');
    var MySpeech = require('./MySpeech');
    var ComicListView = require('./ComicListView');
    import api  from './util/api';


    class SpeechSynthesizer extends Component {

      constructor(props){
        super(props);
        this.state = {
          symbols: []
        }
      }

      componentWillMount(){
        api.getSymbols().then((res) => {
          this.setState({
            symbols: res.symbols
          })
        })
      }

      render() {
        console.log("symbols: ", this.state.symbols);
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              NASA!
            </Text>
          </View>
        )
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
