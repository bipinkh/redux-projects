// mapping for url and components

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './components/app';
import Posts from './components/posts_index';
import PostsNew from './components/posts_new';

const Greeting = () => {
    return <div>Hey there !</div>;
}

// root url to App component
export default(
<Switch>
  <Route exact path="/" component={Posts} />
  <Route exact path="/posts" component={Posts} />
  <Route exact path="/posts/new" component={PostsNew} />
  // <Route exact path="/" component={App} />

</Switch>
);
