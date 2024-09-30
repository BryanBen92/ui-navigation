import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Settings from './Settings';

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <Switch>
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default Admin;