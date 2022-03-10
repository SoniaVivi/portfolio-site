let currentRowIndex = 0;

const getRowColor = (reset = false) => {
  if (reset) currentRowIndex = 0;
  const rowColors = ["green", "orange", "blue", "violet", "teal"];
  const current = rowColors[currentRowIndex];

  currentRowIndex =
    currentRowIndex != rowColors.length - 1 ? currentRowIndex + 1 : 0;
  return current;
};

export default getRowColor;
