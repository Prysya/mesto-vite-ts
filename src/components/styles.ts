import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: black;
    min-height: 100vh;
    font-family: 'Inter', Arial, sans-serif;
    padding-bottom: 194px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  
`;
