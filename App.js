import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, NavigatorIOS, TouchableOpacity, StatusBar} from 'react-native';
import { Provider } from 'redux';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.listHeader}>
          <Text style={styles.header}>
            WonderList
          </Text>
        </View>
        <View>
            <Text style={styles.subheader}>
              Choose a list:
            </Text>
          <View style={styles.listContainer}>
            <TouchableOpacity>
              <View style={styles.border}>
                <Text style={styles.list}>
                  Favorite Movies
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}>
              <View>
                <Text style={styles.list}>
                  Favorite Candies
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}>
              <View style={styles.border}>
                <Text style={styles.list}>
                  Vacation Packing List
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.border}>
                <Text style={styles.list}>
                  Learn Redux
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#fff',
  },
  listHeader: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1abc9c'
  },
  listView: {
    flex:6,
  },
  header: {
    fontFamily: 'American Typewriter',
    fontWeight:'bold',
    fontSize:50,
    color:'#E8D6CB',
  },
  subheader: {
    fontWeight:'bold',
    justifyContent:'center',
    alignSelf:'center',
    lineHeight:60,
  },
  listview: {
    flex:2,
  },
  list: {
    textAlign: 'center',
    backgroundColor:'#ecf0f1',
    color:'#2980b9',
    fontSize:25,
    margin:10,
    fontWeight: 'bold',
    lineHeight:50,
    alignItems:'center',
    justifyContent:'center',
  },
  border: {
    borderRadius:10,
  }
});
