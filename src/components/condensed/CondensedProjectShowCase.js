import React from "react";
import styled from "styled-components";
import CondensedProjectPreview from "./CondensedProjectPreview";
import vividImageOrganizer from "../../assets/images/vividImageOrganizer.png";
import mockTweeter from "../../assets/images/mockTweeter.png";
import snake from "../../assets/images/snake.png";
import battleship from "../../assets/images/battleship.png";
import skyFish from "../../assets/images/skyFish.png";
import yuriaMPGen from "../../assets/images/yuriaMPGen.png";
import getRowColor from "../helpers/getRowColor";
import vividLink from "./projectDescriptions/vivid.md";
import yuriaLink from "./projectDescriptions/yuria.md";
import mockTweeterLink from "./projectDescriptions/mockTweeter.md";
import snakeLink from "./projectDescriptions/snake.md";
import skyFishLink from "./projectDescriptions/skyFish.md";
import battleshipLink from "./projectDescriptions/battleship.md";

const Container = styled.ul`
  padding-left: 0;
`;

const CondensedProjectShowcase = () => {
  return (
    <Container className="col-12 row">
      <CondensedProjectPreview
        image={vividImageOrganizer}
        githubLink="https://github.com/SoniaVivi/Image-Organizer"
        title="Vivid Image Organizer"
        descriptionLink={vividLink}
        color={getRowColor(true)}
      />
      <CondensedProjectPreview
        image={yuriaMPGen}
        title="Yuria Movie Poster Generator"
        githubLink="https://github.com/SoniaVivi/yuria-mp-gen"
        descriptionLink={yuriaLink}
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={mockTweeter}
        title="Mock Tweeter"
        githubLink="https://github.com/SoniaVivi/mock-tweeter"
        descriptionLink={mockTweeterLink}
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={snake}
        title="Snake"
        githubLink="https://github.com/SoniaVivi/snake"
        descriptionLink={snakeLink}
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={skyFish}
        title="Sky Fish"
        githubLink="https://github.com/SoniaVivi/sky-fish"
        descriptionLink={skyFishLink}
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={battleship}
        title="Battleship"
        githubLink="https://github.com/SoniaVivi/battleship"
        descriptionLink={battleshipLink}
        color={getRowColor()}
      />
    </Container>
  );
};

export default CondensedProjectShowcase;
