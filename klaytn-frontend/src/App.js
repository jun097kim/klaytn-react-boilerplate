import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppTemplate from 'components/base/AppTemplate';

import { Auth, Wallet, Counter } from 'pages';

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/auth" component={Auth} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/counter" component={Counter} />
      </AppTemplate>
    );
  }
}

export default App;
