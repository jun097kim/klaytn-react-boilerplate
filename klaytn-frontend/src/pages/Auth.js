import React from 'react';
import { Route } from 'react-router-dom';
import Login from 'components/auth/Login';

const Auth = () => {
  return <Route path="/auth/login" component={Login} />;
};

export default Auth;
