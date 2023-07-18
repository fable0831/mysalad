import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: var(--font-family);
  line-height: normal;
}
html {
  scroll-behavior: smooth;
  height: 100%;
  overflow-x: hidden;
  font-size: 16px;
}

`;

export default GlobalStyle;
