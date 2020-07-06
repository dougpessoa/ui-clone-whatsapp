import React, { useState } from 'react';

import { Window, Container } from './styles';

import Sidebar from '../Sidebar';
import Main from '../Main';

interface Props {
  openChat?: string;
  startChat?: string;
}

const Layout: React.FC<Props> = ({ openChat, startChat }) => {
  const [chat, setChat] = useState('');
  const [id, setId] = useState('');
  const [checked, setChecked] = useState('');
  const [dated, setDated] = useState('');
  const [previewed, setPreviewed] = useState('');

  return (
    <>
      <Container>
        <Window>
          <Sidebar
            openChat={(e: string) => setChat(e)}
            idChat={id}
            check={checked}
            date={dated}
            preview={previewed}
          />
          <Main
            startChat={chat}
            idChat={(e: string) => setId(e)}
            check={(e: string) => setChecked(e)}
            date={(e: string) => setDated(e)}
            preview={(e: string) => setPreviewed(e)}
          />
        </Window>
      </Container>
    </>
  );
};

export default Layout;
