import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const defaultStyles = {
  spacing: 32,
  previewIconSize: 20,
  green: "#e4ffe1",
  orange: "#f3caba",
  blue: "#bcd5f0",
  violet: "#c9b8cc",
  teal: "#d6fffe",
  gray: "#808080",
};

const lightTheme = {
  background: "#ffffff",
  border: "#ffffff",
  lightBorder: "#edeff1",
  text: "#000000",
  themeToggleBackground: "#f5f5f5",
  toggleIcon: "#000000",
  navTextColor: "#000000",
  headingTextColor: "#000000",
};

const darkTheme = {
  background: "#151319",
  border: "rgba(85, 205, 252, 0.226)",
  lightBorder: "#000000",
  text: "#000000",
  themeToggleBackground: "#1e1e1e",
  toggleIcon: "#f2f2f2",
  navTextColor: "#f2f2f2",
  headingTextColor: "#f2f2f2",
};

const ThemeWrapper = (props) => {
  const [currentTheme, toggleCurrentTheme] = useReducer(
    (current) => (current == "light" ? "dark" : "light"),
    "light"
  );

  return (
    <ThemeProvider
      theme={{
        ...defaultStyles,
        ...(currentTheme == "light" ? lightTheme : darkTheme),
        currentTheme,
        themeToggle: toggleCurrentTheme,
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
