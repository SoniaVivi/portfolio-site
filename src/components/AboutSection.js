import React from "react";
import PropTypes from "prop-types";

const AboutSection = (props) => {
  return (
    <div className="col-12 row about blue">
      <div className="portrait col-12 col-sm-3">
        <img src={props.portrait}></img>
      </div>
      <div className="about description col-12 col-sm-9">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, cum commodo delectus instructior id, his
          ex utinam intellegam, fugit nostro periculis ei his. Eu sanctus
          recteque necessitatibus duo, ut mundi gloriatur intellegat his. Ea pro
          efficiendi philosophia, elit erat et has. Vero maluisset definitiones
          eam cu, nibh autem tibique eu quo
        </p>
        <div className="row about links-container">
          <a className="github-preview"></a>
          <div className="dot"></div>
          <a>Codewars</a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

AboutSection.propTypes = {
  portrait: PropTypes.string,
};
