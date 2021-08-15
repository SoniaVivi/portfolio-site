import React from "react";
import PropTypes from "prop-types";
import testImage from "../assets/testImage.jpg";

const FeaturedRow = (props) => {
  return (
    <div
      className={`featured row col-12 ${
        props.className ? props.className : ""
      }`}
    >
      <img className="col-5 col-lg-4 featured preview" src={testImage}></img>
      <div className="col-6 col-lg-6 featured description">
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, dicat indoctum mediocrem ad sed. Vis ne
          wisi congue possim. No purto ferri eos, pri in velit aperiam aliquam,
          eu quo tantas aeterno consectetuer. Docendi omittam reprehendunt ius
          an, munere tempor scriptorem ad per
        </p>
        <div className="row featured links-container">
          <a className="github-preview"></a>
          <div className="dot"></div>
          <a>Live Preview</a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRow;

FeaturedRow.propTypes = {
  className: PropTypes.string,
};
