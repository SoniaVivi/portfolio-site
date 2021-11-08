import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import FeaturedRow from "./components/FeaturedRow";
import CondensedProjectPreview from "./components/CondensedProjectPreview";
import AboutSection from "./components/AboutSection";
import testImage from "./assets/images/testImage.jpg";
import fakedit from "./assets/images/fakedit.png";
import mikoReader from "./assets/images/mikoReader.png";
import vividImageOrganizer from "./assets/images/vividImageOrganizer.png";
import mockTweeter from "./assets/images/mockTweeter.png";
import tweetIguana from "./assets/images/tweetIguana.png";
import snake from "./assets/images/snake.png";
import battleship from "./assets/images/battleship.png";
import skyFish from "./assets/images/skyFish.png";

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <React.Fragment>
      <Navbar portfolioRef={portfolioRef} aboutRef={aboutRef} />
      <div className="container-lg content">
        <h3 className="col-12 featured">Featured Work</h3>
        <div className="col-1 col-lg-2"></div>
        <div className="w-100"></div>
        <FeaturedRow
          className="green"
          previewImage={fakedit}
          githubLink="https://github.com/SoniaVivi/odin-reddit"
          title="Fakedit"
          description="A Reddit clone web app, replicating the core features and
                       appearance of Reddit."
          livePreviewLink="https://odin-fakedit.herokuapp.com/"
        />
        <FeaturedRow
          className="orange"
          previewImage={mikoReader}
          githubLink="https://github.com/SoniaVivi/miko-reader"
          title="Miko Reader"
          description="A web app to read manga utilizing the Mangadex API and
                       update their respective AniList data."
          livePreviewLink="https://miko-reader.herokuapp.com/"
        />
        <FeaturedRow
          className="blue"
          previewImage={vividImageOrganizer}
          githubLink="https://github.com/SoniaVivi/Image-Organizer"
          title="Vivid Image Organizer"
          description="A desktop application to manage and search large
                       quantities of images."
        />
        <div className="w-100 divider" ref={portfolioRef}></div>
        <ul className="col-12 row portfolio">
          <CondensedProjectPreview
            image={mockTweeter}
            title="Mock Tweeter"
            githubLink="https://github.com/SoniaVivi/mock-tweeter"
            description="A web application to easily create and
                         download fake Tweets for use on other sites."
            color="orange"
          />
          <CondensedProjectPreview
            image={snake}
            title="Snake"
            githubLink="https://github.com/SoniaVivi/snake"
            description="A recreation of the classic arcade game Snake with
                         retro-style graphics."
            color="green"
          />
          <CondensedProjectPreview
            image={skyFish}
            title="Sky Fish"
            githubLink="https://github.com/SoniaVivi/sky-fish"
            description="A Firefox browser extension to retrieve manga data
                         from their respective title on Reddit."
            color="violet"
          />
          <CondensedProjectPreview
            image={battleship}
            title="Battleship"
            githubLink="https://github.com/SoniaVivi/battleship"
            description="A recreation of the classic game Battleship."
            color="blue"
          />
          <CondensedProjectPreview
            image={tweetIguana}
            title="Tweet Iguana"
            githubLink="https://github.com/SoniaVivi/tweet-iguana"
            description="A Firefox browser extension that adds a download
                         button to tweets."
            color="teal"
          />
          <CondensedProjectPreview image={testImage} color="green" />
        </ul>
        <div className="w-100 divider" ref={aboutRef}></div>
        <h3>About</h3>
        <AboutSection portrait={testImage} />
      </div>
    </React.Fragment>
  );
}

export default App;
