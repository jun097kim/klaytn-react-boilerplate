import React from 'react';

import GrommetApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import 'grommet/grommet.min.css';
import './AppTemplate.scss';

const AppTemplate = ({ children }) => {
  return (
    <GrommetApp className="AppTemplate">
      <Header>
        <Title>Klaytn Boilerplate</Title>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Menu direction="row" size="small" dropAlign={{ right: 'right' }}>
            <Anchor path="/auth/login">로그인</Anchor>
            <Anchor path="/counter">카운터</Anchor>
          </Menu>
        </Box>
      </Header>
      <Box className="Sections" pad="medium" align="center">
        {children}
      </Box>
      <Footer justify="between">
        <Box direction="row" align="center" pad={{ vertical: 'medium' }}>
          <Paragraph margin="none">© 2018 Klaytn Boilerplate</Paragraph>
        </Box>
      </Footer>
    </GrommetApp>
  );
};

export default AppTemplate;
