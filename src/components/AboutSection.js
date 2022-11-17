import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinksContainer from "./styled/LinksContainer";
import GithubLink from "./GithubLink";
import aboutLink from "./aboutDescription/about.md";
import ReactMarkdown from "react-markdown";
import useDescription from "../hooks/useDescription";

const portraitPadding = "25px";

const PortraitWrapper = styled.div`
  padding-top: ${portraitPadding};
  padding-bottom: ${portraitPadding};
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
`;

const DescriptionWrapper = styled.div`
  padding-top: ${portraitPadding};
  padding-bottom: 25px;
`;

const AboutSection = (props) => {
  const description = useDescription(aboutLink);

  return (
    <div className="col-12 row about blue">
      <PortraitWrapper className=" col-12 col-sm-3">
        <Portrait src={props.portrait} />
      </PortraitWrapper>
      <DescriptionWrapper className="col-12 col-sm-9">
        <h5>Siona Vivian</h5>
        <ReactMarkdown>{description}</ReactMarkdown>
        <p></p>
        <LinksContainer className="row about">
          <GithubLink github="https://github.com/SoniaVivi" />
          <div className="dot"></div>
          <a
            onClick={() => window.open("https://www.codewars.com/users/SVivn")}
          >
            Codewars
          </a>
        </LinksContainer>
      </DescriptionWrapper>
    </div>
  );
};

export default AboutSection;

AboutSection.propTypes = {
  portrait: PropTypes.string,
};
