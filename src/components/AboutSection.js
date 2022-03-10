import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinksContainer from "./styled/LinksContainer";

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
  return (
    <div className="col-12 row about blue">
      <PortraitWrapper className=" col-12 col-sm-3">
        <Portrait src={props.portrait} />
      </PortraitWrapper>
      <DescriptionWrapper className="col-12 col-sm-9">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, cum commodo delectus instructior id, his
          ex utinam intellegam, fugit nostro periculis ei his. Eu sanctus
          recteque necessitatibus duo, ut mundi gloriatur intellegat his. Ea pro
          efficiendi philosophia, elit erat et has. Vero maluisset definitiones
          eam cu, nibh autem tibique eu quo
        </p>
        <LinksContainer className="row about">
          <a className="github-preview"></a>
          <div className="dot"></div>
          <a>Codewars</a>
        </LinksContainer>
      </DescriptionWrapper>
    </div>
  );
};

export default AboutSection;

AboutSection.propTypes = {
  portrait: PropTypes.string,
};
