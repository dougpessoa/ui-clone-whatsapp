import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  Chat,
  Image,
  IconImage,
  DetailsChat,
  Top,
  Bottom,
  CheckIcon
} from './styles';

import { uuid } from 'uuidv4';

import fakeData from '../../data/fakeChatList.json';

import arrowDown from '../../assets/svg/arrowDown.svg';
import doubleChecked from '../../assets/svg/doubleCheck.svg';
import doubleCheckedRead from '../../assets/svg/doubleCheckRead.svg';
import checked from '../../assets/svg/check.svg';

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

  useEffect(() => {
    if (date) {
      const index = listOfChat
        .map((list) => {
          return list.id;
        })
        .indexOf(idChat);

      listOfChat[index].preview = preview;
      listOfChat[index].read = false;
      listOfChat[index].delivered = false;
      listOfChat[index].isOutgoing = true;

      const id = listOfChat[index].id;

      const imgID = id.split("-")[0];
      const spanID = id.replace(/-/g, '');
      const timeID = id.split("-").slice(0, 2).join("");

      const newDate = `${date.split(":")[0]}:${date.split(":")[1]}`;

      (document.getElementById(imgID) as HTMLImageElement ).style.display = 'none';
      (document.getElementById(timeID) as HTMLSpanElement ).innerText = newDate;
      (document.getElementById(spanID) as HTMLSpanElement ).innerText = preview;
      setListOfChat(listOfChat);
    }
  }, [date, listOfChat]);



  return (
    <Container>
      {listOfChat.map(data => (
        <Chat
          key={data.id}
          onClick={() => data.user === "Bill Gates" && handleChatSelected(data.id)}
          bgColor={data.id === chatSelected}
        >
          <IconImage>
            <Image src={data.photo} alt={data.user} />
          </IconImage>
          <DetailsChat>
            <Top>
              <h5 title={data.user}>{data.user}</h5>

              <span id={data.id.split("-").slice(0, 2).join("")}>{data.date_time}</span>
            </Top>
            <Bottom>
              <div title={data.preview}>
                {
                  data.read ?
                    <CheckIcon id={data.id.split("-")[0]} src={doubleCheckedRead} size={18} className="checkIcon" />
                  :
                  data.delivered ?
                    <CheckIcon id={data.id.split("-")[0]} src={doubleChecked} size={18} className="checkIcon" />
                  :
                  data.isOutgoing && <CheckIcon id={data.id.split("-")[0]} src={checked} size={18} className="checkIcon" />
                }
                <span id={data.id.replace(/-/g, '')}>{data.preview}</span>
              </div>

              <img src={arrowDown} alt="Arrow down" />
            </Bottom>
          </DetailsChat>
        </Chat>
      ))}
    </Container>
  );
};

export default ChatList;
