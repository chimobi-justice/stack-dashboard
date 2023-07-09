import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #000;
  }

  body::-webkit-scrollbar {
    width: 20px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  } 

  body::-webkit-scrollbar-thumb {
    background-color: #020215;
    border-radius: 10px;
  }

  .active { 
    background: #f1f1f1;
    color: #000 !important;
  }
`;
