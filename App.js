/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes';
import { persistor, store } from './src/store';
import GeneralStatusBarColor from './src/component/GeneralStatusBarColor';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GeneralStatusBarColor backgroundColor="#BCBF00" barStyle="light-content"/>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;