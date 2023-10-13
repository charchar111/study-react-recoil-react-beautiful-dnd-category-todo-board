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
   }

   .App {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }

   main {
    background-color: ${(props) => props.theme.bgcolors.surface1};  
    width: 80%;

 min-height: 500px;
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
