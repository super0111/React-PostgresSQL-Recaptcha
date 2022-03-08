import * as React from 'react';
import { Box, Container } from '@mui/material';
import styled from '@emotion/styled';


const Containers = styled(Container)`
  padding: 0 !important;
`

const MainContent = ({ children }) => {
  return (
    <Box component="main">
      <div>{children}</div>
    </Box>
  );
};

export default MainContent;
