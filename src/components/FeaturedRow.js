import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowsFullscreen from "../assets/ArrowsFullscreen";
import useModal from "../hooks/useModal";
import LinksContainer from "./styled/LinksContainer";

const arrowSize = "25%";

const Container = styled.li`
  justify-content: center;
  min-height: 290px;
  height: fit-content;
  margin-bottom: 32px;
  padding: 25px 0;
  padding-left: 5px;
  overflow: hidden;
`;

const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;

  &:hover {
    .arrows.featured,
    .overlay {
      display: block;
    }
  }
`;

const PreviewWrapper = styled.div`
  position: relative;
  max-width: fit-content;
  max-height: fit-content;

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
  max-height: 100%;
`;

const LivePreview = styled.a`
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
      <PreviewContainer className="col-5 col-lg-4" onClick={toggleModal}>
        <PreviewWrapper>
          <PreviewImage src={props.previewImage} />
          <ArrowsFullscreen className="featured" />
          <div className="overlay"></div>
        </PreviewWrapper>
      </PreviewContainer>
      <DescriptionContainer className="col-6 col-lg-6 ">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <LinksContainer className="row ">
          <a className="github-preview" href={props.githubLink}></a>
          {props.livePreviewLink ? (
            <React.Fragment>
              <div className="dot"></div>
              <LivePreview href={props.livePreviewLink}>
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
