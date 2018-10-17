import React from 'react';
import { Route } from 'react-router-dom';
import AuthTemplate from 'components/auth/AuthTemplate';

const Auth = () => {
  return <Route path="/auth/login" component={AuthTemplate} />;
};

export default Auth;
