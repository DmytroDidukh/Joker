import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from './components';
import createStore from './store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

