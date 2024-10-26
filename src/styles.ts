import { createGlobalStyle } from 'styled-components'

export const Colors = {
  Primary: '#8a1900',
  Secondary: '#451c10',
  white: '#c5c2be',
  TextBack: '#000'
}

export const Fonts = {
  Amsterdam: 'amsterdam',
  Aloja: 'aloja',
  Roboto: 'Roboto'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
    color: ${Colors.white};
    font-family: ${Fonts.Roboto};
  }

  @font-face {
    font-family: 'amsterdam';
    src: url('./amsterdam-one.ttf') format('truetype');
  }

  @font-face {
    font-family: 'aloja';
    src: url('./Aloja-Light.otf') format('opentype');
  }
`
