import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Reports from '../pages/Reports';

import UserList from '../pages/UserList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Reports} />
    <Route path="/list" component={UserList} />
  </Switch>
);

export default Routes;
