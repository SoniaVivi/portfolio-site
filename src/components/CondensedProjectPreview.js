import React from "react";
import PropTypes from "prop-types";
import useModal from "../hooks/useModal";

const CondensedProjectPreview = (props) => {
  const [modal, toggleModal] = useModal(props.image);

  return (
    <li className="project condensed col-12 col-lg-4">
      <img
        src={props.image}
        className="condensed preview col-sm-4 col-lg-12"
        onClick={toggleModal}
      ></img>
      <div className={`project wrapper condensed ${props.color}`}>
        <div className="project description">
          <h5 className="project">{props.title}</h5>
          <p>
            {props.description ??
              `Lorem ipsum dolor sit amet, dicat indoctum mediocrem ad sed. Vis ne
            wisi congue possim. No purto ferri eos, pri in velit aperiam
            aliquam.`}
          </p>
        </div>
        <a className="github-preview" href={props.githubLink}></a>
      </div>
      {modal}
    </li>
  );
};

export default CondensedProjectPreview;

CondensedProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  description: PropTypes.string,
};
