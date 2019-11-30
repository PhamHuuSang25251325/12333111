 /**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'react-redux'
import './src/i18n';
import AppContainer from './App';
import { name as appName } from './app.json';
import store from './src/store';
import client from './src/lib/Client';

const App = () => (
  <Provider store={store} >
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
