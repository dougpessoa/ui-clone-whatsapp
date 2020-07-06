import React, { useRef, useEffect, useState } from 'react';

import { uuid } from 'uuidv4';
import {
  Container,
  Header,
  Image,
  Status,
  Footer,
  Icons,
  Input,
  Messenger,
  SkinMessage,
  Message,
  InfoMessage,
  CheckIcon,
  CheckDoubleIcon,
  TimeIcon,
} from './styles';

import attachmentIcon from '../../assets/svg/attachmentIcon.svg';
import searchIcon from '../../assets/svg/searchIcon.svg';
import optionsIcon from '../../assets/svg/optionsIcon.svg';
import emojis from '../../assets/svg/emojis.svg';
import microphone from '../../assets/svg/microphone.svg';

import clock from '../../assets/svg/timing.svg';

import fakeConversation from '../../data/fakeConversation.json';
import fakeChatList from '../../data/fakeChatList.json';

export { CheckIcon, CheckDoubleIcon } from './styles';

export interface Props {
  isFirst?: boolean;
  bgColor?: string;
  isOutgoing?: boolean;
  resize?: boolean;
  isInfo?: boolean;
}

interface Messages {
  id: string;
  isOutgoing: boolean;
  isFirst: boolean;
  message: string;
  time: string;
  read: boolean;
  delivered: boolean;
  userName: string;
  info: boolean;
  date: string;
}

interface Intermediate {
  lastPreview: Function;
  lastCheck: Function;
  lastDate: Function;
  idOfChat: Function;
}

type TwoProps = Props & Intermediate;

const Chat: React.FC<TwoProps> = ({
  lastPreview,
  lastCheck,
  lastDate,
  idOfChat,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [makeResize, setMakeResize] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [status, setStatus] = useState('');

  const [messagesInChat, setMessagesInChat] = useState<Messages[]>(
    fakeConversation.conversation,
  );

  const [id] = useState('dcbfeef4-be11-11ea-b3de-0242ac130004');

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '40px';
      const { scrollHeight } = textareaRef.current;
      if (scrollHeight > 119) {
        textareaRef.current.style.height = `119px`;
        setMakeResize(true);
      } else {
        textareaRef.current.style.height = `${scrollHeight}px`;
        setMakeResize(false);
      }
    }

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } `;

    setStatus(`last seen today at ${time}`);
  }, [currentValue]);

  function systemResponse(): any {
    messagesInChat[0].delivered = true;
    setMessagesInChat(messagesInChat);

    setTimeout(() => {
      setStatus('online');
      messagesInChat[0].read = true;
      setMessagesInChat(messagesInChat);
    }, 2000);

    setTimeout(() => {
      setStatus('typing...');
    }, 4000);

    setTimeout(() => {
      setStatus('online');

      const date = new Date();
      const hour =
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      const minutes =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      const currentTime = `${hour}:${minutes}`;

      const userResponse = messagesInChat[0].message;
      let billGatesAnswer = '';
      if (userResponse.includes('hello')) {
        billGatesAnswer = 'Hello friend! How are you going?';
      } else if (userResponse.includes('fine')) {
        billGatesAnswer = "That's nice! So I need to go now. See you later";
      } else {
        billGatesAnswer = "excuse me! but I didn't understand what you said";
      }

      const newMessage = {
        id: uuid(),
        isOutgoing: false,
        userName: 'Bill Gates',
        message: billGatesAnswer,
        time: currentTime,
        delivered: true,
        read: true,
        isFirst: true,
        info: false,
        date: 'today',
      };

      messagesInChat.unshift(newMessage);
      setMessagesInChat(messagesInChat);
    }, 9000);

    setTimeout(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const time = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      } `;

      setStatus(`last seen today at ${time}`);
    }, 11000);
  }

  function handleKeyEvent(e: any): void {
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10)) {
      setCurrentValue(`${currentValue}\n`);
      return;
    }

    if (e.key !== 'Enter') return;

    e.preventDefault();

    if (!currentValue) return;

    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const currentTime = `${hour}:${minutes}`;

    if (messagesInChat[0].date === 'yesterday') {
      const newMessage = {
        id: uuid(),
        isOutgoing: false,
        userName: '',
        message: 'Today',
        time: '00:00',
        delivered: false,
        read: false,
        isFirst: false,
        info: true,
        date: 'today',
      };

      messagesInChat.unshift(newMessage);
    }

    let isFirstCheck = true;

    if (messagesInChat[0].isOutgoing) {
      isFirstCheck = false;
    }

    lastPreview(currentValue.trim());
    lastCheck('time');
    lastDate(`${currentTime}:${date.getSeconds()}:${date.getMilliseconds()}`);
    idOfChat(id);

    const newMessage = {
      id: uuid(),
      isOutgoing: true,
      userName: 'me',
      message: currentValue.trim(),
      time: currentTime,
      delivered: false,
      read: false,
      isFirst: isFirstCheck,
      info: false,
      date: 'today',
    };

    messagesInChat.unshift(newMessage);

    setMessagesInChat(messagesInChat);
    setCurrentValue('');

    setTimeout(() => {
      systemResponse();
    }, 500);
  }

  function formatMessage(message: string): Array<Element> {
    const html: Array<any> = [];

    const msg = message.split('\n');

    for (let i = 0; i < msg.length; i += 1) {
      html.push(
        <p>
          {msg[i]}
          <br />
        </p>,
      );
    }

    return html;
  }

  return (
    <Container>
      <Header>
        <div>
          <Image>
            <div>
              <img
                src="https://lh3.google.com/u/3/d/1XEdKCylZpWEqNzr22M0BdYdFGy64motZ=w1481-h919-iv1"
                alt="User"
              />
            </div>
          </Image>
          <div className="info">
            <h5>Bill Gates</h5>
            <Status>{status}</Status>
          </div>
        </div>
        <div>
          <img src={searchIcon} alt="search icon" />
          <img src={attachmentIcon} alt="attachment icon" />
          <img src={optionsIcon} alt="options icon" />
        </div>
      </Header>

      <Messenger>
        {messagesInChat.map((msg) => (
          <SkinMessage
            isInfo={msg.info}
            isOutgoing={msg.isOutgoing}
            isFirst={msg.isFirst}
            key={msg.id}
          >
            <Message
              bgColor={msg.isOutgoing ? 'outgoing' : 'incoming'}
              isFirst={msg.isFirst}
              isInfo={msg.info}
            >
              <span>{formatMessage(msg.message)}</span>
              <InfoMessage isOutgoing={msg.isOutgoing} isInfo={msg.info}>
                <span>{msg.time}</span>
                {/* eslint-disable-next-line no-nested-ternary */}
                {msg.isOutgoing && msg.read ? (
                  <CheckDoubleIcon />
                ) : msg.delivered ? (
                  <CheckIcon />
                ) : (
                  <TimeIcon src={clock} />
                )}
              </InfoMessage>
            </Message>
          </SkinMessage>
        ))}
      </Messenger>

      <Footer>
        <Icons>
          <img src={emojis} alt="Emojis" />
        </Icons>
        <Input
          ref={textareaRef}
          placeholder="Type a message"
          value={currentValue}
          onKeyDown={(e) => handleKeyEvent(e)}
          onChange={(e) => setCurrentValue(e.target.value)}
          resize={makeResize}
        />
        <Icons>
          <img src={microphone} alt="Microphone" />
        </Icons>
      </Footer>
    </Container>
  );
};

export default Chat;
