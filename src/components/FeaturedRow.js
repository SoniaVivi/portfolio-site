import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowsFullscreen from "../assets/ArrowsFullscreen";
import useModal from "../hooks/useModal";
import LinksContainer from "./styled/LinksContainer";

const arrowSize = "25%";

const Container = styled.li`
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;
  height: fit-content;
  margin-bottom: 32px;
  padding: 10px 0;
  padding-left: 5px;
  overflow: hidden;

  @media (min-width: 992px) {
    flex-direction: row;
    min-height: 290px;
  }
`;

const PreviewContainer = styled.div`
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding-bottom: 15px;

  @media (min-width: 992px) {
    &:hover {
      .arrows.featured,
      .overlay {
        display: block;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 992px) {
    height: fit-content;
    max-height: 260px;
    padding-bottom: 0;
  }
`;

const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: fit-content;
  max-height: fit-content;
  height: 100%;

  .arrows.featured {
    display: none;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${arrowSize};
    height: ${arrowSize};
    color: #ffffff;
  }
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: unset;

  @media (min-width: 993px) {
    max-height: 260px;
  }
`;

const LivePreview = styled.a`
  width: fit-content;
  text-decoration: none;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedRow = (props) => {
  const [modal, toggleModal] = useModal(props.previewImage);

  return (
    <Container
      className={`row col-12 ${props.className ? props.className : ""}`}
    >
      <PreviewContainer
        className="col-12 col-lg-6"
        onClick={() => window.innerWidth >= 992 && toggleModal()}
      >
        <PreviewWrapper>
          <PreviewImage src={props.previewImage} />
          <ArrowsFullscreen className="featured" />
          <div className="overlay"></div>
        </PreviewWrapper>
      </PreviewContainer>
      <DescriptionContainer className="col-12 col-lg-6">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <LinksContainer className="row ">
          <a
            className="github-preview"
            onClick={() => window.open(props.githubLink)}
          ></a>
          {props.livePreviewLink ? (
            <React.Fragment>
              <div className="dot"></div>
              <LivePreview
                onClick={() => window.open(props.livePreviewLink)}
                className="clickable"
              >
                Live Preview
              </LivePreview>
            </React.Fragment>
          ) : null}
        </LinksContainer>
      </DescriptionContainer>
      {modal}
    </Container>
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
