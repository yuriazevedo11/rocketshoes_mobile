import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';
import NavigationService from './services/navigation';

import './config/reactotronConfig';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Routes
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    />
  </Provider>
);

export default App;
