import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import * as CaverWalletAPI from 'lib/caver/wallet';

import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import PasswordInput from 'grommet/components/PasswordInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

@inject(stores => ({
  integrateWallet: stores.wallet.integrateWallet
}))
@observer
class Login extends Component {
  state = {
    keystore: null,
    keystoreMsg: '',
    walletPw: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImport = e => {
    const keystore = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = ({ target }) => {
      this.setState({
        keystore: target.result
      });
    };
    fileReader.readAsText(keystore);
  };

  handleLogin = e => {
    e.preventDefault();

    const { keystore, walletPw } = this.state;
    const { integrateWallet } = this.props;

    try {
      // keystore에서 프라이빗 키를 가져와서 지갑 인스턴스 생성
      const { privateKey: privateKeyFromKeystore } = CaverWalletAPI.decrypt(
        keystore,
        walletPw
      );
      integrateWallet(privateKeyFromKeystore);
    } catch (e) {
      this.setState({ keystoreMsg: '비밀번호가 일치하지 않습니다.' });
    }
  };

  render() {
    const { walletFile, walletPw, keystoreMsg } = this.state;

    return (
      <Form onSubmit={this.handleLogin} pad="medium">
        <FormFields>
          <Box align="center">
            <Heading strong>Klaytn Boilerplate</Heading>
          </Box>
          <fieldset>
            <FormField label="지갑 파일">
              <input
                type="file"
                name="walletFile"
                value={walletFile}
                onChange={this.handleImport}
              />
            </FormField>
            <FormField label="지갑 비밀번호" error={keystoreMsg}>
              <PasswordInput
                name="walletPw"
                value={walletPw}
                onChange={this.handleChange}
              />
            </FormField>
          </fieldset>
        </FormFields>
        <Footer pad={{ vertical: 'medium' }}>
          <Button label="로그인" type="submit" primary fill />
        </Footer>
        <Box align="center">
          <Anchor href="/wallet" label="회원가입" />
        </Box>
      </Form>
    );
  }
}

export default Login;
