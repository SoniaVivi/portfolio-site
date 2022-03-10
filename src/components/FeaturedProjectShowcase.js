import React from "react";
import FeaturedRow from "./FeaturedRow";
import fakedit from "../assets/images/fakedit.png";
import mikoReader from "../assets/images/mikoReader.png";
import rommTea from "../assets/images/rommTea.png";
import getRowColor from "./helpers/getRowColor";

const FeaturedProjectShowcase = () => {
  return (
    <ul>
      <FeaturedRow
        className={getRowColor(true)}
        previewImage={mikoReader}
        githubLink="https://github.com/SoniaVivi/miko-reader"
        title="Miko Reader"
        description="A web app to read manga utilizing the Mangadex API and
                 update their respective AniList data."
        livePreviewLink="https://miko-reader.herokuapp.com/"
      />
      <FeaturedRow
        className={getRowColor()}
        previewImage={fakedit}
        githubLink="https://github.com/SoniaVivi/odin-reddit"
        title="Fakedit"
        description="A Reddit clone web app, replicating the core features and
                 appearance of Reddit."
        livePreviewLink="https://odin-fakedit.herokuapp.com/"
      />
      <FeaturedRow
        className={getRowColor()}
        previewImage={rommTea}
        githubLink="https://github.com/SoniaVivi/romm-tea"
        title="Romm Tea"
        description="A web app to list teas infusing time, rating, name, link, and more."
        livePreviewLink="https://romm-tea.herokuapp.com/"
      />
    </ul>
  );
};

export default FeaturedProjectShowcase;
