import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    bgcolors: {
      background: string;
      surface1: string;
      surface2: string;
      surface3: string;
      primary: string;
      secondary: string;
      primaryHighContrast: string;
      secondaryHighContrast: string;
    };
    textcolors: {
      background: string;
      surface1: string;
      surface1Title: string;
      primary: string;
      secondary: string;
    };
    bordercolor: { primary: string };

    scrollbar: {
      thumbcolor: string;
    };
  }
}
