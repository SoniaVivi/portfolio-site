import React, { useContext } from "react";
import styled from "styled-components";
import moon from "../../assets/svgs/moon.svg";
import sun from "../../assets/svgs/sun.svg";
import { Icon } from "./Icon";
import { ThemeContext } from "styled-components";

const containerHeight = 24;
const iconSize = 12;
const padding = 5;

const Container = styled.li`
  align-self: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: ${containerHeight}px;
  margin-top: 3px;
  margin-right: 10px;
  padding: 0 ${padding}px;
  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: ${containerHeight * 0.75}px;
  background-color: ${(props) => props.theme.themeToggleBackground};
  cursor: pointer;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 3;
  left: ${(props) =>
    props.themeName == "light"
      ? "5px"
      : `calc(100% - ${padding + iconSize}px)`};
  min-width: ${iconSize + 2}px;
  min-height: ${iconSize + 2}px;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: 50%;
  transition: left 200ms ease-out;
`;

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container onClick={() => themeContext.themeToggle()}>
      <Icon link={moon} size={iconSize} />
      <Circle themeName={themeContext.currentTheme} />
      <Icon link={sun} size={iconSize} />
    </Container>
  );
};

export default ThemeToggle;
