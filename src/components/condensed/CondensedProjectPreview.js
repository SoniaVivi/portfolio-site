import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useModal from "../../hooks/useModal";
import useDescription from "../../hooks/useDescription";
import ReactMarkdown from "react-markdown";

const Container = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 1 / 1;
  width: calc(33.3333% - 10px);
  margin: 0 5px 32px 5px;
  padding: unset;

  &:hover > * {
    opacity: 1;
  }

  @media (max-width: 991px) {
    & {
      min-width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 991px) {
    & {
      flex-flow: row nowrap;
      height: 200px;
      aspect-ratio: unset;
    }
  }

  @media (max-width: 576px) {
    & {
      flex-flow: column nowrap;
      width: fit-content;
      height: fit-content;
      padding-left: 0;

      > * {
        position: relative;
        opacity: 1;
      }
    }
  }
`;

const PreviewImage = styled.img`
  flex-grow: 1;
  max-height: 100%;
  height: fit-content;
  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: 5px;
  object-position: top center;

  @media (max-width: 991px) {
    & {
      height: 100%;
      flex-grow: 1;
      margin-right: 5px;
    }
  }

  @media (max-width: 576px) {
    flex-grow: 0;
    max-width: calc(100vw - 20px);
    height: auto;
    margin-right: 0;
  }
`;

const Description = styled.div`
  padding-right: ${(props) => props.theme.previewIconSize};

  @media (max-width: 1199px) {
    & {
      h5 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  max-height: 100%;
  width: 100%;
  height: fit-content;
  padding: 5px;
  opacity: 0;
  transition: opacity 125ms ease-in;
  border-top: unset;
  border: 1px solid ${(props) => props.theme.lightBorder};
  border-radius: 5px;
  border-top-left-radius: unset;
  border-top-right-radius: unset;

  p {
    margin-bottom: unset;
  }

  @media (min-width: 992px) {
    & {
      background-color: ${(props) => props.theme.background};
    }
  }

  @media (max-width: 991px) {
    & {
      position: relative;
      flex-basis: 75%;
      height: 100%;
      padding-left: 10px;
      padding-bottom: 10px;
      opacity: 1;

      .github-preview {
        align-self: flex-start;
      }

      h5 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
`;

const CondensedProjectPreview = (props) => {
  const [modal, toggleModal] = useModal(props.image);
  const description = useDescription(props.descriptionLink);

  return (
    <Container className="col-12 col-lg-4">
      <PreviewImage
        src={props.image}
        className="col-sm-4 col-lg-12 clickable"
        onClick={toggleModal}
      />
      <Wrapper className={props.color}>
        <Description>
          <h5>{props.title}</h5>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Description>
        <a
          className="github-preview"
          onClick={() => window.open(props.githubLink)}
        ></a>
      </Wrapper>
      {modal}
    </Container>
  );
};

export default CondensedProjectPreview;

CondensedProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  descriptionLink: PropTypes.string,
};
