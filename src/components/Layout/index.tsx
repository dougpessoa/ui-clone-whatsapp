import React from 'react';

import { Window, Container } from './styles';

import Sidebar from '../Sidebar';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <Window>
          <Sidebar />
          <Main />
        </Window>
      </Container>
    </>
  );
};

export default Layout;
