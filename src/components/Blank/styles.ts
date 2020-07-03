import styled from 'styled-components';

import introConnection from '../../assets/images/intro-connection-light.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #f8f9fa;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 6px solid #4adf83;
`;

export const ImageConnection = styled.div`
  width: 356px;
  height: 356px;
  background-image: url(${introConnection});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const InfoConnection = styled.div`
  width: 450px;
  margin: 40px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 35px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }

  div {
    display: flex;
  }

  svg {
    margin-right: 6px;
  }

  a {
    color: #07bc4c;
    text-decoration: none;

    &:hover {
      color: #05cd51;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.7px;
  margin: 33px 0;
  background-color: rgba(0, 0, 0, 0.08);
`;
