import React, { useState } from 'react';

import Blank from '../Blank';
import Chat from '../Chat';

import { Container } from './styles';

const Main: React.FC = () => {
  const [isChat] = useState(true);
  return <Container>{isChat ? <Chat /> : <Blank />}</Container>;
};

export default Main;
