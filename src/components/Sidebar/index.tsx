import React from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';
import ChatList from '../ChatList';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <ChatList />
    </Container>
  );
};

export default Sidebar;
