/* eslint-disable no-sequences */
import React from "react";
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.split("").map((char, i) => (
        <p key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </p>
      ))}
    </span>
  );
};

export default AnimatedLetters;
