import styled, { keyframes } from 'styled-components';

export const Search = styled.div`
  height: 49px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  z-index: 100;
  border-bottom: 0.5px solid rgba(147, 147, 147, 0.2);

  input {
    height: 100%;
    width: calc(100% - 45px);
    padding: 10px 10px 13px 25px;
    border: none;

    &::placeholder {
      font-family: inherit;
      font-size: 14px;
      color: #a2a2a2;
      font-family: 'Ubuntu', sans-serif;
    }
  }
`;

const clockwiseSearch: any = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const anticlockwiseSearch: any = keyframes`
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }

`;

const clockwiseArrow: any = keyframes`
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const anticlockwiseArrow: any = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }

`;

export const Icon = styled.svg<{
  marginLeft: number;
  marginRight: number;
}>`
  height: 24px;
  width: 24px;
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  cursor: pointer;
`;

export const SearchIcon = styled.svg<{
  marginLeft: number;
  marginRight: number;
  rotation: boolean;
  canRotate: boolean;
  deg: number;
}>`
  height: 24px;
  width: 24px;
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  animation: ${(props) =>
      props.canRotate &&
      (props.rotation ? clockwiseSearch : anticlockwiseSearch)}
    0.15s linear backwards;
  cursor: pointer;
  transform: rotate(${(props) => `${props.deg}deg`});
`;

export const ArrowIcon = styled.svg<{
  marginLeft: number;
  marginRight: number;
  rotation: boolean;
  canRotate: boolean;
  deg: number;
}>`
  height: 24px;
  width: 24px;
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  animation: ${(props) =>
      props.canRotate && (props.rotation ? clockwiseArrow : anticlockwiseArrow)}
    0.15s linear backwards;
  cursor: pointer;
  transform: rotate(${(props) => `${props.deg}deg`});
`;

const rotate: any = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash: any = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const SpinnerContainer = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  animation: ${rotate} 2s linear infinite;
  -webkit-animation: ${rotate} 2s linear infinite;
  stroke-dasharray: 1, 150;
  stroke-dashoffset: 0;
  stroke: rgba(27, 154, 89, 0.7);
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
  -webkit-animation: ${dash} 1.5s ease-in-out infinite;
`;

export const Circle = styled.circle`
  stroke-dasharray: 1, 150;
  stroke-dashoffset: 0;
  stroke: rgba(27, 154, 89, 0.7);
  stroke-linecap: round;
  stroke-width: 5px;
  animation: ${dash} 1.5s ease-in-out infinite;
  -webkit-animation: ${dash} 1.5s ease-in-out infinite;
`;
