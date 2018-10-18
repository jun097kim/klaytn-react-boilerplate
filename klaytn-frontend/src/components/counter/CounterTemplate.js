import React, { Component } from 'react';
import caver from 'lib/caver';
import counterABI from 'abi/counter_abi';
import { inject } from 'mobx-react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';

@inject(stores => ({
  walletInstance: stores.wallet.walletInstance
}))
class CounterTemplate extends Component {
  constructor() {
    super();

    this.counterContract = new caver.klay.Contract(
      counterABI,
      '0xc9a2ac818eaabb33d8932e9d410dc6f8a312006c'
    );
    this.state = {
      count: null
    };
  }

  getCount = async () => {
    const count = await this.counterContract.methods.count().call();
    this.setState({ count });
  };

  setCount = direction => {
    const { walletInstance } = this.props;
    this.counterContract.methods[direction]()
      .send({
        from: walletInstance.address,
        gas: 200000
      })
      .once('confirmation', () => {
        this.getCount();
      });
  };

  componentDidMount() {
    this.getCount();
  }

  render() {
    const { count } = this.state;

    return (
      <Box pad="medium" colorIndex="light-2">
        <Value value={count} />
        <Box direction="row" pad={{ between: 'medium' }}>
          <Button label="+" onClick={() => this.setCount('plus')} primary />
          <Button label="-" onClick={() => this.setCount('minus')} primary />
        </Box>
      </Box>
    );
  }
}

export default CounterTemplate;
