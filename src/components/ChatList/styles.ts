import styled from 'styled-components';

import { CheckDouble, Check } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 109px);
  overflow-y: scroll;
  z-index: 0;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background: #cccccc;
  }
`;

export const Chat = styled.div<{ bgColor: boolean }>`
  width: 100%;
  height: 72px;
  background-color: ${(props) => (props.bgColor ? '#EBEBEB' : '#FFF')};
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.bgColor ? '#EBEBEB' : '#f5f5f5')};
  }

  &:hover > div > div > img {
    display: block;
  }
`;

export const IconImage = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const DetailsChat = styled.div`
  width: calc(100% - 72px);
  height: 72px;
  border-bottom: 0.25px solid rgba(147, 147, 147, 0.1);
  font-family: 'Open Sans', sans-serif;
`;

export const Top = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px 13px 0 7px;
  display: flex;
  justify-content: space-between;

  h5 {
    font-size: 16.5px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    color: #a8a8a8;
    margin-top: 7px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 2px 13px 0 7px;

  p {
    font-weight: 400;
    font-size: 14px;
    color: #939393;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img {
    display: none;
  }
`;

export const CheckDoubleIcon = styled(CheckDouble)<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  color: #4fc3f7;
`;

export const CheckIcon = styled(Check)`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  color: rgba(0, 0, 0, 0.45);
`;
