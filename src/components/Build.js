import React from "react";
import raw from "../release.txt";

const Build = () => {
  return GetText();
};

function GetText() {
  const [text, setText] = React.useState();
  fetch(raw)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });
  return text || "Loading...";
}

export default Build;
