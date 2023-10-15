import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
   ${reset}

   body * {
    box-sizing: border-box;
   }

   body {
    background-color: ${(props) => props.theme.bgcolors.background};
    color:${(props) => props.theme.textcolors.background};
    overflow-wrap: anywhere;
    word-break: keep-all;


   }


   .App {
    padding: 40px 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }


   main {
    background-color: ${(props) => props.theme.bgcolors.surface1};  
    width: 80%;

   }


   button {
    all: unset;
    box-sizing: border-box;
    opacity: ${(props) => (props.theme.mode === "dark" ? "0.7" : "inherit")};
    cursor: pointer;
    transition:opacity 0.2s ease-in-out;
    &:hover {
      opacity: ${(props) => (props.theme.mode === "dark" ? "1" : "inherit")};
    }
   }

   input {
    all: unset;
    box-sizing: border-box;
   }

textarea {
  all: unset;
  resize: none;
  line-height: 1.2em;
}

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
