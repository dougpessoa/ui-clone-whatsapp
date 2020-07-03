
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #D9DBD4;
    color: #4a4a4a;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    text-rendering: optimizeLegibility;
    background-color: #dddbd1;
    background-image: linear-gradient(180deg,#dddbd1,#d2dbdc);
  }

  a, button, p, h1, h2, h3, h4, h5, h6, ::placeholder, span, input{
    font-family: 'Open Sans', sans-serif;
  }

  body::after{
    content: "";
    background-color: #009688;
    width: 100%;
    height: 127px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  button {
    cursor: pointer;
  }
`;
