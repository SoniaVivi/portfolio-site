import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  color: ${(props) => props.theme.text}
}

body {
  background-color: ${(props) => props.theme.background};
}

.green {
  background-color: ${(props) => props.theme.green};
}

.orange {
  background-color: ${(props) => props.theme.orange};
}

.blue {
  background-color: ${(props) => props.theme.blue};
}

.violet {
  background-color: ${(props) => props.theme.violet};
}

.teal {
  background-color: ${(props) => props.theme.teal};
}
`;

export default GlobalStyle;
