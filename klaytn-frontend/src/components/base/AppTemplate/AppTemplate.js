import React from 'react';

import GrommetApp from 'grommet/components/App';
import Box from 'grommet/components/Box';
import 'grommet/grommet.min.css';

import './AppTemplate.scss';

const AppTemplate = ({ children }) => {
  return (
    <GrommetApp>
      <Box pad="medium" align="center">
        {children}
      </Box>
    </GrommetApp>
  );
};

export default AppTemplate;
