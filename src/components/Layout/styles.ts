import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Window = styled.div`
  height: calc(100% - 38px);
  min-height: 500px;
  min-width: 648px;
  top: 19px;
  max-width: 1396px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;

  @media (max-width: 1440px) {
    height: 100%;
    top: 0;
    width: 100%;
    max-width: 1440px;
  }
`;
