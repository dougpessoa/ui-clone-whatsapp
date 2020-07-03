import React, { useState } from 'react';

import {
  Container,
  Chat,
  Image,
  IconImage,
  DetailsChat,
  Top,
  Bottom,
} from './styles';

import fakeData from '../../data/fakeChatList.json';

import arrowDown from '../../assets/svg/arrowDown.svg';

const ChatList: React.FC = () => {
  const [chatSelected, setChatSelected] = useState('');

  function sliceString(string: string): string {
    return string.slice(0, 45);
  }

  function handleChatSelected(id: string): void {
    setChatSelected(id);
  }

  return (
    <Container>
      {fakeData.data.map((data) => (
        <Chat
          key={data.id}
          onClick={() => handleChatSelected(data.id)}
          bgColor={data.id === chatSelected}
        >
          <IconImage>
            <Image src={data.photo} alt={data.user} />
          </IconImage>
          <DetailsChat>
            <Top>
              <h5 title={data.user}>{data.user}</h5>

              <span>{data.date_time}</span>
            </Top>
            <Bottom>
              <p title={data.preview}>{sliceString(data.preview)}</p>

              <img src={arrowDown} alt="Arrow down" />
            </Bottom>
          </DetailsChat>
        </Chat>
      ))}
    </Container>
  );
};

export default ChatList;
