import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppTemplate from 'components/base/AppTemplate';

import Auth from 'pages/Auth';
import Wallet from 'pages/Wallet';

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/auth" component={Auth} />
        <Route path="/wallet" component={Wallet} />
      </AppTemplate>
    );
  }
}

export default App;
