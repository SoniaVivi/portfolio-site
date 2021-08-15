import React from "react";
import PropTypes from "prop-types";

const CondensedProjectPreview = (props) => {
  return (
    <div className="project condensed col-12 col-lg-4">
      <img src={props.image} className="project"></img>
      <div className={`project wrapper ${props.color ? props.color : ""}`}>
        <div className="project description">
          <h5 className="project">Lorem Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, dicat indoctum mediocrem ad sed. Vis ne
            wisi congue possim. No purto ferri eos, pri in velit aperiam
            aliquam, eu quo tantas aeterno consectetuer.
          </p>
        </div>
        <a className="github-preview"></a>
      </div>
    </div>
  );
};

export default CondensedProjectPreview;

CondensedProjectPreview.propTypes = {
  image: PropTypes.string,
  color: PropTypes.string,
};
