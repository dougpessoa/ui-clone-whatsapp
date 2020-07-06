import React, { useState } from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';
import ChatList from '../ChatList';

import { Container } from './styles';

interface Props {
  chat?: string;
  openChat: Function;
  idChat: string;
  check: string;
  date: string;
  preview: string;
}

const Sidebar: React.FC<Props> = ({
  chat,
  openChat,
  idChat,
  check,
  date,
  preview,
}) => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <ChatList
        chat={(e: string) => openChat(e)}
        idChat={idChat}
        check={check}
        date={date}
        preview={preview}
      />
    </Container>
  );
};

export default Sidebar;
