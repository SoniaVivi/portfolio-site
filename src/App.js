import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import FeaturedRow from "./components/FeaturedRow";
import CondensedProjectPreview from "./components/CondensedProjectPreview";
import testImage from "./assets/testImage.jpg";
import AboutSection from "./components/AboutSection";

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <React.Fragment>
      <Navbar portfolioRef={portfolioRef} aboutRef={aboutRef} />
      <div className="container-lg content">
        <h3 className="col-12 featured">Featured Work</h3>
        <div className="col-1 col-lg-2"></div>
        <div className="w-100"></div>
        <FeaturedRow className="green" />
        <FeaturedRow className="orange" />
        <FeaturedRow className="blue" />
        <div className="w-100 divider" ref={portfolioRef}></div>
        <div className="col-12 row portfolio">
          <CondensedProjectPreview image={testImage} color="green" />
          <CondensedProjectPreview image={testImage} color="orange" />
          <CondensedProjectPreview image={testImage} color="blue" />
          <CondensedProjectPreview image={testImage} color="violet" />
          <CondensedProjectPreview image={testImage} color="teal" />
          <CondensedProjectPreview image={testImage} color="green" />
        </div>
        <div className="w-100 divider" ref={aboutRef}></div>
        <h3>About</h3>
        <AboutSection portrait={testImage} />
      </div>
    </React.Fragment>
  );
}

export default App;
