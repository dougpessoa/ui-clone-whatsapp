import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px 16px;
  background: #ededed;

  flex: none;
  height: 59px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
  justify-content: flex-end;
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
    }
  }
`;

export const Button = styled.div`
  padding: 5px 11px;
  display: flex;
  justify-content: center;
  margin-right: 2px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
