import React from 'react';
import Wallet from 'components/Wallet';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import 'grommet/grommet.min.css';

import './AppTemplate.scss';

const AppTemplate = () => {
  return (
    <GrommetApp>
      <Box pad="medium" align="center">
        <Wallet />
      </Box>
    </GrommetApp>
  );
};

export default AppTemplate;
