import React, { useRef } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FeaturedProjectShowcase from "./components/featured/FeaturedProjectShowcase";
import CondensedProjectShowcase from "./components/condensed/CondensedProjectShowCase";
import aboutImage from "./assets/images/aboutPic.png";

const dividerHeight = "2px";

const Divider = styled.div`
  min-height: ${dividerHeight};
  max-height: ${dividerHeight};
  margin-top: 25px;
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.lightBorder};
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.theme.headingTextColor};
`;

const FeaturedHeading = styled(StyledHeading)`
  align-self: flex-start;
  text-align: center;
  margin-bottom: 32px;
`;

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <React.Fragment>
      <Navbar portfolioRef={portfolioRef} aboutRef={aboutRef} />
      <div className="container-lg content">
        <FeaturedHeading className="col-12 featured">
          Featured Work
        </FeaturedHeading>
        <div className="col-1 col-lg-2"></div>
        <div className="w-100"></div>
        <FeaturedProjectShowcase />
        <Divider className="w-100" ref={portfolioRef} />
        <CondensedProjectShowcase />
        <Divider className="w-100" ref={aboutRef} />
        <StyledHeading>About</StyledHeading>
        <AboutSection portrait={aboutImage} />
      </div>
    </React.Fragment>
  );
}

export default App;
