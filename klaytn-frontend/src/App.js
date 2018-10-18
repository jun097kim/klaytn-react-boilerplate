import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { Route } from 'react-router-dom';
import AppTemplate from 'components/base/AppTemplate';

import { Auth, Wallet, Counter } from 'pages';

@inject(stores => ({
  loadWallet: stores.wallet.loadWallet
}))
class App extends Component {
  componentDidMount() {
    const { loadWallet } = this.props;
    const walletFromSession = sessionStorage.getItem('walletInstance');

    if (walletFromSession) {
      loadWallet(JSON.parse(walletFromSession));
    }
  }
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
