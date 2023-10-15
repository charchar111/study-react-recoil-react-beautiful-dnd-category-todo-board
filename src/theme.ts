import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  mode: "dark",
  bgcolors: {
    background: "#121212",
    surface1: "#1d1d1d",
    surface2: "rgb(60,60,60)",
    surface3: "rgb(80,80,80)",
    primary: "rgba(187,134,252,0.5)",
    secondary: "rgba(3,218,198,0.5)",
    primaryHighContrast: "rgba(187,134,252,0.7)",
    secondaryHighContrast: "rgba(3,218,198,0.7)",
  },
  textcolors: {
    background: "rgba(255,255,255,0.9)",
    surface1: "rgba(255,255,255,0.9)",
    surface1Title: "#7f7f7f,",
    primary: "rgba(0,0,0,0.95)",
    secondary: "rgba(0,0,0,0.95)",
  },

  bordercolor: { primary: "rgba(255,255,255,0.6)" },
  scrollbar: {
    thumbcolor: "rgba(90,90,90)",
  },
};
