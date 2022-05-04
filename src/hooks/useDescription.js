import { useState, useEffect } from "react";

const useDescription = (descriptionLink) => {
  const [description, setDescription] =
    useState(`Lorem ipsum dolor sit amet, dicat indoctum mediocrem ad sed. Vis ne
  wisi congue possim. No purto ferri eos, pri in velit aperiam
  aliquam.`);

  useEffect(
    () =>
      fetch(descriptionLink)
        .then((r) => r.text())
        .then((text) => setDescription(text)),
    []
  );
  return description;
};

export default useDescription;
