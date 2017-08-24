import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from './source/containers/Application';
import store from './source/redux/store';
 
export default class DiscoveryChurchApplication extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
 