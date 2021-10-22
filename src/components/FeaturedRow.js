import React from "react";
import PropTypes from "prop-types";
import ArrowsFullscreen from "../assets/ArrowsFullscreen";
import useModal from "../hooks/useModal";

const FeaturedRow = (props) => {
  const [modal, toggleModal] = useModal(props.previewImage);

  return (
    <div
      className={`featured row col-12 ${
        props.className ? props.className : ""
      }`}
    >
      <div className="col-5 col-lg-4 featured preview" onClick={toggleModal}>
        <div className="featured wrapper">
          <img src={props.previewImage} className="featured preview"></img>
          <ArrowsFullscreen className="featured preview" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="col-6 col-lg-6 featured description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className="row featured links-container">
          <a className="github-preview" href={props.githubLink}></a>
          {props.livePreviewLink ? (
            <React.Fragment>
              <div className="dot"></div>
              <a href={props.livePreviewLink} className="live-preview">
                Live Preview
              </a>
            </React.Fragment>
          ) : null}
        </div>
      </div>
      {modal}
    </div>
  );
};

export default FeaturedRow;

FeaturedRow.propTypes = {
  previewImage: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  livePreviewLink: PropTypes.string,
  className: PropTypes.string,
};
