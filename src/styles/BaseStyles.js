import { createGlobalStyle } from 'styled-components';

// import { color, font, mixin } from 'shared/utils/styles';

export default createGlobalStyle`
  html, body, #root {
    
  }

  body {
    color: ${(props) => props.theme.color.textDark};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    ${(props) => props.theme.font.size(16)}
    ${(props) => props.theme.font.regular}
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${(props) => props.theme.font.regular}
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${(props) => props.theme.font.bold}
  }

  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }
  [role="button"], button, input, textarea {
    // appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  select::-ms-expand {
    display: none;
  }
  select option {
    color: ${(props) => props.theme.color.textDarkest};
  }

  p {
    line-height: 1.4285;
    a {
      ${(props) => props.theme.mixin.link()}
    }
  }

  textarea {
    line-height: 1.4285;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }

  table,tr,th,td{
    text-align:left;
    
  }

  table {
    color: #333;
    background: white;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
  }
  table thead th,
  table tfoot th {
    color: #777;
    background: rgba(0,0,0,.1);
  }
  table caption {
    padding:.5em;
  }
  table th,
  table td {
    padding: .5em;
    border: 1px solid lightgrey;
  }

  ${(props) => props.theme.mixin.placeholderColor((props) => props.theme.color.textLight)}
`;
