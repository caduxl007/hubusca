import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
