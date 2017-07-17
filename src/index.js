import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import AppContainer from './app/AppContainer';
import reducer from './app/reducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
