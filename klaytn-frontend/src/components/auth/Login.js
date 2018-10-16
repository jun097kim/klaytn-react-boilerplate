import React, { Component } from 'react';

import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import PasswordInput from 'grommet/components/PasswordInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class Login extends Component {
  state = {
    walletPw: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { walletFile, walletPw } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} pad="medium">
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
                onChange={this.handleChange}
              />
            </FormField>
            <FormField label="지갑 비밀번호">
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
      </Form>
    );
  }
}

export default Login;
