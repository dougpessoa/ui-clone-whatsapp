import styled from 'styled-components';

import backgroundChat from '../../assets/images/background2.png';
import tailOut from '../../assets/svg/tailOut.svg';
import tailIn from '../../assets/svg/tailIn.svg';

import {  } from 'styled-icons/boxicons-regular/CheckDouble';



import { Props } from '.';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px 16px;
  background: #ededed;
  border-left: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    white-space: nowrap;

    h5 {
      margin-left: 15px;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: black;
    }

    img {
      margin: 0 12px;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 40px;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

    img {
      max-width: 40px;
      max-height: 40px;
      border-radius: 50%;
      margin: 0;
    }
  }
`;

export const Messenger = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: #e6dcd5;
  /* position: relative; */
  background-image: url(${backgroundChat});
  background-blend-mode: overlay;
  background-position: center;
  padding: 20px 80px;
  /* background-color: red; */

  display: flex;
  flex-direction: column-reverse;
  align-items: space-between;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
  }
`;

export const SkinMessage = styled.div<Props>`
  width: 100%;
  padding: ${props => props.isFirst ? '5px 5px 1px' : '2px 5px' };
  color: #303030;
  display: flex;
  justify-content: ${props => props.isOutgoing ? 'flex-end' : 'flex-start' };
  /* border: 1px dotted red; */
`;


export const Message = styled.div<Props>`
  min-width: 30px;
  max-width: 60%;
  padding: 6px 60px 8px 9px;
  background-color: ${(props) =>
    props.bgColor === 'outgoing' ? '#dcf8c6' : '#fff'};
  border-radius: ${(props) =>
      props.isFirst && props.bgColor === 'incoming' ? `0px` : '5px'}
    ${(props) =>
      props.isFirst && props.bgColor === 'outgoing' ? `0px` : '5px'}
    5px 5px;
  display: flex;
  position: relative;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  span {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  &::after {
    content: url(${tailOut});
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: -15px;
    margin-top: -1px;
    display: ${(props) =>
      props.isFirst && props.bgColor === 'outgoing' ? 'inline' : 'none'};
  }

  &::before {
    content: url(${tailIn});
    width: 15px;
    height: 15px;
    position: absolute;
    left: 0;
    top: 0;
    margin-left: -8px;
    margin-top: -1px;
    display: ${(props) =>
      props.isFirst && props.bgColor === 'incoming' ? 'inline' : 'none'};
  }
`;

export const InfoMessage = styled.div<Props>`
  width: ${(props) => (props.isOutgoing ? '50px' : '32px')};
  background: red;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3px;

  span {
    font-size: 10.5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.45);
    margin-right: 3px;
    /* background: blue; */
  }
`;

export const CheckIcon = styled()

export const Footer = styled.footer`
  width: 100%;
  padding: 5px 10px;
  background-color: #f0f0f0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Input = styled.textarea<Props>`
  width: calc(99% - 100px);
  border: 8px solid white;
  min-height: 42px;
  padding: 2px 10px 12px 8px;
  border-radius: 20px;
  margin-bottom: 3px;
  color: #4a4a4a;
  font-size: 14.5px;
  font-family: 'Open Sans', sans-serif;
  overflow: ${(props) => (props.resize ? 'visible' : 'hidden')};
  resize: none;
  display: block;

  &::placeholder {
    font-size: 14.5px;
    font-family: 'Open Sans', sans-serif;
    color: #999;
  }

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

export const Icons = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
  }
`;
