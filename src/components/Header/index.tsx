import React, { useState } from 'react';

import { Container, Button, Image } from './styles';

import user from '../../assets/images/user2.jpg';

import status from '../../assets/svg/status.svg';
import statusNotRead from '../../assets/svg/statusNotRead.svg';
import newChat from '../../assets/svg/newChat.svg';
import menu from '../../assets/svg/menu.svg';

const Header: React.FC = () => {
  const [hasStatusNotRead] = useState(true);

  return (
    <Container>
      <Image>
        <div>
          <img src={user} alt="User" />
        </div>
      </Image>
      <Button>
        {hasStatusNotRead ? (
          <img src={statusNotRead} alt="Status not read" title="Status" />
        ) : (
          <img src={status} alt="status" title="Status" />
        )}
      </Button>
      <Button>
        <img src={newChat} alt="New chat" title="New chat" />
      </Button>
      <Button>
        <img src={menu} alt="menu" title="Menu" />
      </Button>
    </Container>
  );
};

export default Header;
