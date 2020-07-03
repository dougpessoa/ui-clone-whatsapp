import React, { useRef, useEffect, useState } from 'react';

import { uuid } from 'uuidv4';
import {
  Container,
  Header,
  Image,
  Footer,
  Icons,
  Input,
  Messenger,
  SkinMessage,
  Message,
  InfoMessage,
  CheckIcon
} from './styles';

import check from '../../assets/svg/check.svg';
import attachmentIcon from '../../assets/svg/attachmentIcon.svg';
import searchIcon from '../../assets/svg/searchIcon.svg';
import optionsIcon from '../../assets/svg/optionsIcon.svg';
import checkAndRead from '../../assets/svg/checkAndRead.svg';
import timing from '../../assets/svg/timing.svg';
import emojis from '../../assets/svg/emojis.svg';
import microphone from '../../assets/svg/microphone.svg';

import fakeConversation from '../../data/fakeConversation.json';

export interface Props {
  isFirst?: boolean;
  bgColor?: string;
  isOutgoing?: boolean;
  resize?: boolean;
}


interface Messages {
  id: string;
  isOutgoing: boolean;
  isFirst: boolean;
  message: string;
  time: string;
  read: boolean;
  delivered: boolean;
  user_name: string;
}

const Chat: React.FC<Props> = ({
  isFirst,
  bgColor,
  isOutgoing,
  resize
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [makeResize, setMakeResize] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  const [messagesInChat, setMessagesInChat] = useState<Messages[]>(fakeConversation.conversation);

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
  }, [currentValue]);

  function handleKeyEvent(e: any): void {

    if((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10))  {
      setCurrentValue(currentValue + '\n');
      return;
    }

    if (e.key !== 'Enter') return;

    e.preventDefault();

    if (!currentValue) return;
    console.log()


    const time = new Date();
    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const currentTime = `${hour}:${minutes}`;

    let isFirst = true;

    if (messagesInChat[0].isOutgoing) {
      isFirst = false;
    }

    const newMessage = {
      id: uuid(),
      isOutgoing: true,
      user_name: 'me',
      message: currentValue.trim(),
      time: currentTime,
      delivered: false,
      read: false,
      isFirst,
    };

    console.log(newMessage);

    messagesInChat.unshift(newMessage);

    setMessagesInChat(messagesInChat);
    setCurrentValue('');

    console.log('nao entregue ', messagesInChat[0]);

    // setTimeout(() => illusionOfSending(), 1500);
  }

  function formatMessage(message: string): Array<Element> {
    const html: Array<any> = [];

    const msg = message.split('\n');

    for (let i = 0; i < msg.length; i++) {
      html.push(<p>  {msg[i]}  <br /> </p>);
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
                src="https://lh3.google.com/u/0/d/1XEdKCylZpWEqNzr22M0BdYdFGy64motZ=w2000-h704-iv1"
                alt="User"
              />
            </div>
          </Image>
          <h5>Bill Gates</h5>
        </div>
        <div>
          <img src={searchIcon} alt="search icon" />
          <img src={attachmentIcon} alt="attachment icon" />
          <img src={optionsIcon} alt="options icon" />
        </div>
      </Header>

      <Messenger>
        {messagesInChat.map(msg => (
          <SkinMessage
            isOutgoing={msg.isOutgoing}
            isFirst={msg.isFirst}
            key={msg.id}
          >
            <Message bgColor={msg.isOutgoing ? "outgoing" : "incoming"} isFirst={msg.isFirst}>
              <span>{formatMessage(msg.message)}</span>
              <InfoMessage isOutgoing={msg.isOutgoing} >
                <span>{msg.time}</span>
                { msg.isOutgoing && <CheckIcon /> }
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
