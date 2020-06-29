import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home/Home'
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducer/globalReducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// pembuatan store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}><Home /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
