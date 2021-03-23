import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Recents from '../pages/Recents';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/recentes" component={Recents} />
    <Route path="/profile/:id+" component={Profile} />
  </Switch>
);

export default Routes;
