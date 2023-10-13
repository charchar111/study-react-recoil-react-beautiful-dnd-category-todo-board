import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgcolors: {
      background: string;
      surface1: string;
      surface2: string;
      primary: string;
      secondary: string;
    };
    textcolors: {
      background: string;
      surface1: string;
      surface1Title: string;
      primary: string;
      secondary: string;
    };
    bordercolor: { primary: string };
  }
}
