import styled from "styled-components";

const LinksContainer = styled.div`
  flex-wrap: nowrap;
  align-items: center;
  max-width: 100%;
  margin-top: auto;
  margin-left: 0;
  padding-left: 1px;
  overflow: hidden;

  a {
    text-transform: uppercase;
    font-family: "Roboto Bold";
    font-size: 13px;
    font-weight: 600;
    color: #36454f;
    text-decoration: none;
  }
`;

export default LinksContainer;
