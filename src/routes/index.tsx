import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';
import EditNaver from '../pages/EditNaver';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={SignUp} />

    <Route path="/home" component={Home} isPrivate />
    <Route path="/new-naver" component={NewNaver} isPrivate />
    <Route path="/edit-naver/:id" component={EditNaver} isPrivate />
  </Switch>
);

export default Routes;
