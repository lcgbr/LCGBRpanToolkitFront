import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color: rgba(255, 255, 255, 0.87);
    background-color: #003544;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
  }

   a {
    font-weight: 500;
    color: #54C0E8;
    text-decoration: inherit;
  }

  a:hover {
    color: #1DA6D7;
  }

  button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #54C0E8;
  cursor: pointer;
  transition: border-color 0.25s;

  }
  button:hover {
    border-color: #1DA6D7;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default GlobalStyles;