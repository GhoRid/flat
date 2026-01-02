import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* === HARD CSS RESET (Meyer + Modern Normalize Custom) === */

  /* Box sizing rules */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default padding & margin */
  * {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles */
  ul, ol {
    list-style: none;
  }

  /* Set core root defaults */
  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  /* Prevent iOS input zoom */
  input, select, textarea {
    font-size: 16px;
  }

  /* Body defaults */
  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    background-color: #fff;
    color: #111;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  /* Remove all default heading styles */
  h1, h2, h3, h4, h5, h6 {
    font: inherit;
    font-weight: inherit;
  }

  /* Remove default link styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Media elements */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Forms */
  input, textarea, select, button {
    font: inherit;
    border-radius: 0;
    background: none;
    border: none;
    outline: none;
  }

  /* Remove table spacing */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Remove quotes from blockquotes & q */
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: "";
  }

  /* Hidden attribute fix */
  [hidden] {
    display: none !important;
  }
`;
