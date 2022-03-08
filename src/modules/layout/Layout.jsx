import * as React from 'react';
import Header from './Header/index.jsx';
import MainContent from './MainContent';
import { styled } from '@mui/styles';

const MainContents = styled(MainContent)`
  padding: 0px !important;
`
const Layout = ({ children }) => {

  return (
    <React.Fragment>
        <div className="background">
          <Header />
          <MainContents>{children}</MainContents>
        </div>
    </React.Fragment>
  );
};

export default Layout;
