// mapping for url and components

import React from 'react';
import {Route} from 'react-router-dom';

import App from './components/app';

// root url to App component
export default(
  <Route>
    <Route path="/" component={App} />
  </Route>
);
