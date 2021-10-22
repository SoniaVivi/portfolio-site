import React from "react";
import PropTypes from "prop-types";

const PreviewModal = (props) => {
  return (
    <div className="modal" onClick={props.onClick}>
      <div className="overlay"></div>
      <img src={props.previewImage} className="preview modal"></img>
    </div>
  );
};

export default PreviewModal;

PreviewModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  previewImage: PropTypes.string.isRequired,
};
