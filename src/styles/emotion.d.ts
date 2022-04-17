import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primaryColor: string;
    BlueGreenColor: string;
    TextDefault: string;
    NewsTitle: string;
    MyKeyword: string;
    SubTitle: string;
    Overline:string,
    NewsDescription:string,
  }
  export interface layout {
    primaryColor: string;
    BlueGreenColor: string;
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}
