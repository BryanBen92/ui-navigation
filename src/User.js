import React from 'react';
import { Switch, Route } from 'react-router-dom';

function User() {
  return (
    <Switch>
      <Route path="/users/:id" component={UserComponent} />
    </Switch>
  );
}

function UserComponent() {
  return <h1>User Component</h1>;
}

export default User;