import React from "react";
import styled from "styled-components";
import CondensedProjectPreview from "./CondensedProjectPreview";
import vividImageOrganizer from "../assets/images/vividImageOrganizer.png";
import mockTweeter from "../assets/images/mockTweeter.png";
import snake from "../assets/images/snake.png";
import battleship from "../assets/images/battleship.png";
import skyFish from "../assets/images/skyFish.png";
import yuriaMPGen from "../assets/images/yuriaMPGen.png";
import getRowColor from "./helpers/getRowColor";

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
        description="A desktop application to manage and search large
                 quantities of images."
        color={getRowColor(true)}
      />
      <CondensedProjectPreview
        image={yuriaMPGen}
        title="Yuria Movie Poster Generator"
        githubLink="https://github.com/SoniaVivi/yuria-mp-gen"
        description="A web app to quickly and easily create movie posters."
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={mockTweeter}
        title="Mock Tweeter"
        githubLink="https://github.com/SoniaVivi/mock-tweeter"
        description="A web application to easily create and
                   download fake Tweets for use on other sites."
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={snake}
        title="Snake"
        githubLink="https://github.com/SoniaVivi/snake"
        description="A recreation of the classic arcade game Snake with
                   retro-style graphics."
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={skyFish}
        title="Sky Fish"
        githubLink="https://github.com/SoniaVivi/sky-fish"
        description="A Firefox browser extension to retrieve manga data
                   from their respective title on Reddit."
        color={getRowColor()}
      />
      <CondensedProjectPreview
        image={battleship}
        title="Battleship"
        githubLink="https://github.com/SoniaVivi/battleship"
        description="A recreation of the classic game Battleship."
        color={getRowColor()}
      />
    </Container>
  );
};

export default CondensedProjectShowcase;
