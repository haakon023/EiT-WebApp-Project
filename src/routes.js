import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={PageOne} />
      <Route path="/Pagetwo" component={PageTwo} />
    </Route>
  );

