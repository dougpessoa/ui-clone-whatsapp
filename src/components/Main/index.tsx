import React, { useState, useEffect } from 'react';

import Blank from '../Blank';
import Chat from '../Chat';

import { Container } from './styles';

interface Props {
  startChat?: string;
}

interface Intermediate {
  idChat: Function;
  check: Function;
  date: Function;
  preview: Function;
}

type TwoProps = Props & Intermediate;

const Main: React.FC<TwoProps> = ({
  startChat,
  idChat,
  check,
  date,
  preview,
}) => {
  const [isChat, setIsChat] = useState(false);

  useEffect(() => {
    if (startChat) {
      setIsChat(true);
    }
  }, [startChat]);

  return (
    <Container>
      {isChat ? (
        <Chat
          idOfChat={(e: string) => idChat(e)}
          lastCheck={(e: string) => check(e)}
          lastDate={(e: string) => date(e)}
          lastPreview={(e: string) => preview(e)}
        />
      ) : (
        <Blank />
      )}
    </Container>
  );
};

export default Main;
