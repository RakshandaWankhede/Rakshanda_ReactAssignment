import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// eslint-disable-next-line import/imports-first
import { createStore } from 'redux';
// eslint-disable-next-line import/imports-first
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Reducer from './Reducer/Reducer';

const store = createStore(Reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
