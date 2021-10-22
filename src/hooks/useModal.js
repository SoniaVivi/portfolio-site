import React, { useReducer } from "react";
import PreviewModal from "../components/PreviewModal";

const useModal = (image) => {
  const [showModal, toggleModal] = useReducer((state) => !state, false);
  const previewOverlay = (
    <PreviewModal previewImage={image} onClick={toggleModal} />
  );

  return [showModal ? previewOverlay : null, toggleModal];
};

export default useModal;
