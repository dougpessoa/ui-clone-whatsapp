import React, { useState, useEffect } from 'react';

import {
  Container,
  Chat,
  Image,
  IconImage,
  DetailsChat,
  Top,
  Bottom,
  CheckIcon,
  CheckDoubleIcon,
} from './styles';

import fakeData from '../../data/fakeChatList.json';

import arrowDown from '../../assets/svg/arrowDown.svg';

export interface PropsChatList {
  chat: Function;
  idChat: string;
  check: string;
  date: string;
  preview: string;
}

const ChatList: React.FC<PropsChatList> = ({
  chat,
  idChat,
  check,
  date,
  preview,
}) => {
  const [chatSelected, setChatSelected] = useState('');

  const [listOfChat, setListOfChat] = useState(fakeData.data);

  function handleChatSelected(id: string): void {
    setChatSelected(id);
    chat(id);
  }

  /** {
    "id": "1",
    "user": "Bill Gates",
    "photo": "https://lh3.google.com/u/3/d/1XEdKCylZpWEqNzr22M0BdYdFGy64motZ=w1481-h919-iv1",
    "preview": "Alright.",
    "read": false,
    "delivered": false,
    "isOutgoing": false,
    "date_time": "yesterday"
  }, */

  useEffect(() => {
    if (date) {
      const index = listOfChat
        .map((list) => {
          return list.id;
        })
        .indexOf(idChat);

      console.log(listOfChat);
      listOfChat[index].preview = preview;
      console.log(listOfChat);
      setListOfChat(listOfChat);
      console.log(idChat);
    }
  }, [date, listOfChat]);

  return (
    <Container>
      {listOfChat.map((data, index) => (
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
              <p title={data.preview}>
                <CheckDoubleIcon size={21} />
                {data.preview}
              </p>

              <img src={arrowDown} alt="Arrow down" />
            </Bottom>
          </DetailsChat>
        </Chat>
      ))}
    </Container>
  );
};

export default ChatList;
