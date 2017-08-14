import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, NavigatorIOS, TouchableOpacity, StatusBar} from 'react-native'
import { Provider } from 'redux'
import Main from './source/components/main'
export default class App extends Component {
  render() {
    return (
        <Main/>
    );
  }
}
