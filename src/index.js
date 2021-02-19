import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// layouts
import Main from './javascripts/layouts/main';

// store
import configureStore from './javascripts/store/config';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );