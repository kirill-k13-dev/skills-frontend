import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    margin: 0 auto;
    background: lightgray;
    height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
