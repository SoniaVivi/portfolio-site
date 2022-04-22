import React from "react";
import FeaturedRow from "./FeaturedRow";
import fakedit from "../../assets/images/fakedit.png";
import mikoReader from "../../assets/images/mikoReader.png";
import rommTea from "../../assets/images/rommTea.png";
import getRowColor from "../helpers/getRowColor";
import mikoReaderLink from "./projectDescriptions/mikoReader.md";
import fakeditLink from "./projectDescriptions/fakedit.md";
import rommTeaLink from "./projectDescriptions/rommTea.md";

const FeaturedProjectShowcase = () => {
  return (
    <ul>
      <FeaturedRow
        className={getRowColor(true)}
        previewImage={mikoReader}
        githubLink="https://github.com/SoniaVivi/miko-reader"
        title="Miko Reader"
        descriptionLink={mikoReaderLink}
        livePreviewLink="https://miko-reader.herokuapp.com/"
      />
      <FeaturedRow
        className={getRowColor()}
        previewImage={rommTea}
        githubLink="https://github.com/SoniaVivi/romm-tea"
        title="Romm Tea"
        descriptionLink={rommTeaLink}
        livePreviewLink="https://romm-tea.herokuapp.com/"
      />
      <FeaturedRow
        className={getRowColor()}
        previewImage={fakedit}
        githubLink="https://github.com/SoniaVivi/odin-reddit"
        title="Fakedit"
        descriptionLink={fakeditLink}
        livePreviewLink="https://odin-fakedit.herokuapp.com/"
      />
    </ul>
  );
};

export default FeaturedProjectShowcase;
