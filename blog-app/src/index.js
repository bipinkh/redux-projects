import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// import routes from './routes';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
