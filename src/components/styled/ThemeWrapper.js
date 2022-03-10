import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const defaultStyles = { spacing: 32, previewIconSize: 20 };

const lightTheme = {
  background: "#ffffff",
  lightBorder: "#edeff1",
  green: "#e4ffe1",
  orange: "#f3caba",
  blue: "#bcd5f0",
  violet: "#c9b8cc",
  teal: "#d6fffe",
  gray: "#808080",
  border: "#ffffff",
  text: "#000000",
};

const darkTheme = {};

const ThemeWrapper = (props) => {
  //eslint-disable-next-line
  const [currentTheme, toggleCurrentTheme] = useReducer(
    (current) => (current == "light" ? "dark" : "light"),
    "light"
  );

  return (
    <ThemeProvider
      theme={{
        ...defaultStyles,
        ...(currentTheme == "light" ? lightTheme : darkTheme),
      }}
    >
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
