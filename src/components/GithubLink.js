import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GithubIcon from "../assets/svgs/github.svg";
import { Icon } from "./styled/Icon";

const LinkIcon = styled(Icon)`
  min-width: ${(props) => props.theme.previewIconSize};
  min-height: ${(props) => props.theme.previewIconSize};
  width: ${(props) => props.theme.previewIconSize};
  height: ${(props) => props.theme.previewIconSize};
  margin-top: auto;
  cursor: pointer;
`;

const GithubLink = (props) => {
  return (
    <LinkIcon
      onClick={() => window.open(props.github)}
      link={GithubIcon}
      size={"20"}
      color={"#000000"}
    />
  );
};

export default GithubLink;

GithubLink.propTypes = {
  github: PropTypes.string.isRequired,
};
